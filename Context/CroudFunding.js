import React, { useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';

//Internal import
import { CrowdFundingABI, CrowdFundingAddress } from './constants';

//Fetching smart contract
const fetchContract = (signerOrProvider) =>
	new ethers.Contract(CrowdFundingAddress, CrowdFundingABI, signerOrProvider);

export const CrowdFundingContext = React.createContext();

export const CrowdFundingProvider = ({children}) => {
	const titleData = 'Crowd Funding Contract';
	const [currentAccount, setCurrentAccount] = useState("");

	const createCampaign = async(campaign) => {
		const { title, description, amount, deadline } = campaign;
		const web3modal = new Web3Modal();
		const connection = await web3modal.connect(); //This line uses the connect method of the Web3Modal instance to initiate a connection to a user's Ethereum wallet. It awaits the result of this connection operation.
		const provider = new ethers.providers.Web3Provider(connection); //Once the connection to the wallet is established, this line creates a new instance of ethers.providers.Web3Provider. This provider interacts with the Ethereum blockchain through the connected wallet.
		const signer = provider.getSigner(); //This line obtains a signer object from the provider. The signer is used to sign transactions and messages. It allows the application to interact with the blockchain on behalf of the connected wallet.
		const contract = fetchContract(signer);

		console.log(currentAccount);
		try{
			const transaction = await contract.createCampaign(
				currentAccount,
				title,
				description,
				ethers.utils.parseUnits(amount, 18), //amount should be in ethers, 18->decimal points
				new Date(deadline).getTime() //This method of the Date object returns the number of milliseconds since January 1, 1970, 00:00:00 UTC, which is also known as the Unix timestamp.
			);

			await transaction.wait();
			console.log("Contract call success", transaction);
		} catch(error){
			console.log("Contract call failure", error);
		}
	}

	const getCampaigns = async() => {
		const provider = new ethers.providers.JsonRpcProvider();
		const contract = fetchContract(provider);

		const campaigns = await contract.getCampaigns();

		const parsedCampaigns = campaigns.map((campaign, i) => ({
			owner: campaign.owner, //1st owner is a key or an object literal
			title: campaign.title,
			description: campaign.description,
			target: ethers.utils.formatEther(campaign.target.toString()), //convert to ether
			deadline: campaign.deadline.toNumber(),
			amountCollected: ethers.utils.formatEther(
				campaign.amountCollected.toString()
			),
			pId: i
		}))

		return parsedCampaigns;
	}

	const getUserCampaigns = async() => { //campaigns created by specific user
		const provider = new ethers.providers.JsonRpcProvider();
		const contract = fetchContract(provider);

		const allCampaigns = await contract.getCampaigns();

		const accounts = await window.ethereum.request({
			method: "eth_accounts"
		});
		//This line uses the Ethereum Provider API (window.ethereum) 
		//to request the accounts currently connected to the dapp using eth_accounts 
		//method. This returns an array of account addresses.
		

		const currentUser = accounts[0]; //currentUser is assigned the 1st user in array returned by 'accounts' assuming its the current user
		const filteredCampaigns = allCampaigns.filter(
			(campaign) =>
				campaign.owner === '0xf39d6e51aad88F6F4ce6aB8827279cffFb92266'
		)

		const userData = filteredCampaigns.map((campaign, i) => {
			owner: campaign.owner, //1st owner is a key or an object literal
			title: campaign.title,
			description: campaign.description,
			target: ethers.utils.formatEther(campaign.target.toString()), //convert to ether
			deadline: campaign.deadline.toNumber(),
			amountCollected: ethers.utils.formatEther(
				campaign.amountCollected.toString()
			),
			pId: i
		})

		return userData;
	}

	const donate = async(pId, amount) => {
		const web3modal = new Web3Modal();
		const connection = await web3modal.connect(); //This line uses the connect method of the Web3Modal instance to initiate a connection to a user's Ethereum wallet. It awaits the result of this connection operation.
		const provider = new ethers.providers.Web3Provider(connection); //Once the connection to the wallet is established, this line creates a new instance of ethers.providers.Web3Provider. This provider interacts with the Ethereum blockchain through the connected wallet.
		const signer = provider.getSigner(); //This line obtains a signer object from the provider. The signer is used to sign transactions and messages. It allows the application to interact with the blockchain on behalf of the connected wallet.
		const contract = fetchContract(signer);
		//the above 5 lines are repeated basically equivalent to connectingWithContract in ChatAppSolidity
		
		const campaignData = await contract.donateToCompaign(pId, {
			value: ethers.utils.parseEther(amount), //convert to ethers
		})
		await campaignData.wait();
		location.reload(); //reload current web page
		
		return campaignData;
	}

	const getDonations = async(pId) => {
		const provider = new ethers.providers.JsonRpcProvider();
		const contract = fetchContract(provider);
	
		const donations = await contract.getDonators(pId);
		const numberOfDonations = donations[0].length;

		const parsedDonations = [];

		for(let i = 0; i < numberOfDonations; i++){
			parsedDonations.push({
				donator: donations[0][i],
				donation: ethers.utils.formatEther(donations[1][i].toString())
			})
		}

		return parsedDonations;
	}
}