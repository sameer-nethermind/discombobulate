import { useState, React } from "react";
import Web3Modal from "web3modal";
import { useRef, useEffect } from "react";
import { providers } from "ethers";
import { Button } from "@mui/material";

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

  const [connectedWallet, setConnectedWallet] = useState(false);
  const web3ModalRef = useRef(); // return the object with key named current

  // providers and signer  =>
  // providers is used for to get data from sc
  // signer is used for to sign data / set the data to sc

  const getSignerOrProvider = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 4) {
      alert("USE RINKEEBY NETWORK");
      throw new Error("Change network to Rinkeby");
    }
    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return provider;
  };

  const connectWallet = async () => {
    try {
      await getSignerOrProvider();
      setConnectedWallet(true);
    } catch (error) {
      console.log(" error", error);
    }
  };

  useEffect(() => {
    web3ModalRef.current = new Web3Modal({
      network: "rinkeby",
      providerOptions: {},
    });
  }, []);

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      {connectWalletButton}
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
