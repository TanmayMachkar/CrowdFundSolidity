import React, { useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';

import { CrowdFundingAddress, CrowdFundingABI } from './constants';

const fetchContract = (signerOrProvider) => {
	return new ethers.Contract(CrowdFundingAddress, CrowdFundingABI, signerOrProvider);
}

export const CrowdFundingContext = React.createContext();

export const CrowdFundingProvider = ({ children }) => {
	const titleData = 'Crowd Funding Contract';
	const [currentAccount, setCurrentAccount] = useState("");
	const [error, setError] = useState("");
	const [openError, setOpenError] = useState(false);

	const createCampaign = async(campaign) => {
		const { title, description, amount, deadline } = campaign;
		const web3Modal = new Web3Modal();
		const connection = await web3Modal.connect();
		const provider = new ethers.providers.Web3Provider(connection);
		const signer = provider.getSigner();
		const contract = fetchContract(signer);

		console.log(currentAccount);
		try{
			const transaction = await contract.createCampaign(
				currentAccount,
				title,
				description,
				ethers.utils.parseUnits(amount, 18),      //convert target value to be in ethers, 18 denoted upto 18th decimal point
				new Date(deadline).getTime()
			);

		await transaction.wait();
		console.log("Contract called succesfully", transaction);
		} catch(error){
			console.log("contract call failure", error);
		}
	}

	const getCampaigns = async() => {
		const provider = new ethers.providers.JsonRpcProvider("https://polygon-testnet.public.blastapi.io");
		const contract = fetchContract(provider);

		const campaigns = await contract.getCampaigns();

		const parsedCampaigns = campaigns.map((campaign, i) => ({
			owner: campaign.owner,
			title: campaign.title,
			description: campaign.description,
			target: ethers.utils.formatEther(campaign.target.toString()),	//target property of each campaign object is converted from wei to ether and stored in the parsedCampaigns array under the target property of each new object
			deadline: campaign.deadline.toNumber(),
			amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
			pId: i
		}));

		return parsedCampaigns;
	}

	const getUserCampaigns = async() => {	//will return all campaigns created by a single user
		const provider = new ethers.providers.JsonRpcProvider("https://polygon-testnet.public.blastapi.io");
		const contract = fetchContract(provider);

		const allCampaigns = await contract.getCampaigns();

		const accounts = await window.ethereum.request({
			method: "eth_requestAccounts", //request acc of user
		})
		const currentUser = accounts[0];

		const filteredCampaigns = allCampaigns.filter(
			(campaign) =>
				campaign.owner === '0x8805973978a51a93D1Ad99721573c00eC7FF9B67'
		)

		console.log(currentUser)

		const userData = filteredCampaigns.map((campaign, i) => ({
			owner: campaign.owner,
			title: campaign.title,
			description: campaign.description,
			target: ethers.utils.formatEther(campaign.target.toString()),	//target property of each campaign object is converted from wei to ether and stored in the parsedCampaigns array under the target property of each new object
			deadline: campaign.deadline.toNumber(),
			amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
			pId: i
		}))

		return userData;
	}

	const donate = async(pId, amount) => {
		//use web3modal whenever we want to change the data of the smart contract(here we are donating therefore the state variables of smart contract will change)
		const web3Modal = new Web3Modal();
		const connection = await web3Modal.connect();
		const provider = new ethers.providers.Web3Provider(connection);
		const signer = provider.getSigner();
		const contract = fetchContract(signer);

		const campaignData = await contract.donateToCampaign(pId, {
			value: ethers.utils.parseEther(amount) //whatever amount provided will be converted to ethers
		})

		await campaignData.wait();
		location.reload(); //reload current web page

		return campaignData;
	}

	const getDonations = async(pId) => {
		const provider = new ethers.providers.JsonRpcProvider("https://polygon-testnet.public.blastapi.io")
		const contract = fetchContract(provider);

		const donations = await contract.getDonators(pId);
		const numberOfDonations = donations[0].length;

		const parsedDonations = [];

		for(let i = 0; i<numberOfDonations; i++)
		{
			parsedDonations.push({
				donator: donations[0][i],
				donation: ethers.utils.formatEther(donations[1][i].toString())
			})
		}

		return parsedDonations;
	}

	const checkIfWalletConnected = async() => {
		try {
			if(!window.ethereum)
			{	setOpenError(true) 
				setError("Install Metamask");
				return
			}
			const accounts = await window.ethereum.request({
				method: "eth_accounts"
			})

			if(accounts.length){
				setCurrentAccount(accounts[0]);
			} else{
				console.log("No Account Found");
			}
		} catch(error){
			console.log("Something wrong while connecting to wallet");
		}
	}

	useEffect(() => {
		checkIfWalletConnected();
	}, []);

	const connectWallet = async() => {
		try {
			if(!window.ethereum)
				return console.log("Install Metamask");

			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts"
			})
			setCurrentAccount(accounts[0]);
		} catch(error){
			console.log("Error while connecting to wallet");
		}
	}

	return(
		<CrowdFundingContext.Provider
			value = {{
				titleData,
				currentAccount,
				createCampaign,
				getCampaigns,
				getUserCampaigns,
				donate,
				getDonations,
				checkIfWalletConnected,
				connectWallet
			}}
		>
		{children}
		</CrowdFundingContext.Provider>
	);
}