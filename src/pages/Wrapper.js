import { useState, React } from "react";
import Web3Modal from "web3modal";
import {useEffect } from "react";
import WalletConnectProvider from '@walletconnect/web3-provider'

import {
  Footer,
  WhatGPT3,


  
  Header,
} from "../containers";
import { Navbar } from "../components";

function Wrapper() {
  const [currentAccount, setCurrentAccount] = useState(null);

  const connectWalletButton = () => {
    return (
      <button
        onClick={connectWallet}
        className="cta-button connect-wallet-button"
      >
        Connect Wallet
      </button>
    );
  };

  const [web3Modal, setWeb3Modal] = useState(null)

  useEffect(() => {
    // initiate web3modal
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

    setWeb3Modal(newWeb3Modal)
  }, [])

  async function connectWallet() {
    const provider = await web3Modal.connect();
  }

  return (
    <div className="gradient__bg">
      <Header />
    </div>
  );
}

export default Wrapper;
