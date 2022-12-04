import { useState, React } from "react";
import Web3Modal from "web3modal";
import {useEffect } from "react";
import WalletConnectProvider from '@walletconnect/web3-provider'
import AppPage from "../containers/AppPage/AppPage";
import { Navbar } from "../components";
import {ethers} from 'ethers';
import ABI from "../chain-data/ABI.json";
import ContractDetails from "../chain-data/ContractDetails.json";
import { Button } from "@mui/material";

function Wrapper({provider}) {
  const [web3Modal, setWeb3Modal] = useState(null);
  const [contractInstance, setContractInstance] = useState(null);

  useEffect(() => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: process.QUICKNODE_API,
        }
      },
    };

    const newWeb3Modal = new Web3Modal({
      cacheProvider: true, // very important
      network: "mainnet",
      providerOptions,
    });

    contractInstance = new ethers.Contract(ContractDetails['address'], ABI, provider);

    setWeb3Modal(newWeb3Modal);
  }, [])

  return (
    <div className="gradient__bg">
      <AppPage/>
    </div>
  );
}

export default Wrapper;

