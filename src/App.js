import { useState, React } from "react";
import Web3Modal from "web3modal";
import { useRef, useEffect } from "react";
import { providers } from "ethers";
import { Button } from "@mui/material";
import Home from "./pages/Home";
// import Wrapper from "./pages/Wrapper";
import WalletConnectProvider from "@walletconnect/web3-provider";

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

  const [web3Modal, setWeb3Modal] = useState(null);

  useEffect(() => {
    // initiate web3modal
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: process.QUICKNODE_API,
        },
      },
    };

    const newWeb3Modal = new Web3Modal({
      cacheProvider: true, // very important
      network: "mainnet",
      providerOptions,
    });

    setWeb3Modal(newWeb3Modal);
  }, []);

  async function connectWallet() {
    const provider = await web3Modal.connect();
  }

  return (
    <div className="App">
      <Home></Home>
    </div>
<<<<<<< HEAD
=======
    <Brand />
    <WhatGPT3 />
    <Footer />
  </div>
>>>>>>> 57ff348f1f100e09016bc5afde75904dd11dfe83
  );
}

export default App;
