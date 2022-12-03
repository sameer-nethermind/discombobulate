import { useState, React } from "react";
import Web3Modal from "web3modal";
import {useEffect } from "react";
import WalletConnectProvider from '@walletconnect/web3-provider'

import {
  Footer,
  WhatGPT3,
  Header,
} from "../containers";
import { CTA, Brand, Navbar } from "../components";

function Home() {
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

  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Footer />
  </div>
  );
}

export default Home;
