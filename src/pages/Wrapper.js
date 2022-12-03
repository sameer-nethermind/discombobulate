import { useState, React } from "react";
import Web3Modal from "web3modal";
import {useEffect } from "react";
import WalletConnectProvider from '@walletconnect/web3-provider'
import AppPage from "../containers/AppPage/AppPage";


import { Navbar } from "../components";

function Wrapper() {
  const [web3Modal, setWeb3Modal] = useState(null)
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

    setWeb3Modal(newWeb3Modal)
  }, [])

  return (
    <div className="gradient__bg">
      <AppPage/>
    </div>
  );
}

export default Wrapper;
