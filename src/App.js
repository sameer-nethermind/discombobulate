import { useState, React } from "react";
import Web3Modal from "web3modal";
import { useRef, useEffect } from "react";
import { providers } from "ethers";
import { Button } from "@mui/material";
import WalletConnectProvider from '@walletconnect/web3-provider'


import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

import "./App.css";

function App() {
  const [currentAccount, setCurrentAccount] = useState(null);

  // const connectWalletHandler = async () => {
  //   const { ethereum } = window;
  //   if (!ethereum) {
  //     alert("Please install Metamask!");
  //   }
  //   try {
  //       const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  //       console.log("Found an account! Address: ", accounts[0]);
  //       setCurrentAccount(accounts[0]);
  //     } catch (err) {
  //       console.log(err)
  //   }
  // }

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
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    {connectWalletButton()}
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
  );
}

export default App;
