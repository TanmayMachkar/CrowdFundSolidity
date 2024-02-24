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
}