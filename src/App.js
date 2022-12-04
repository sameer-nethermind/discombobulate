import { useState, React } from "react";
import Web3Modal from "web3modal";
import { useRef, useEffect } from "react";
import Home from "./pages/Home";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Wrapper from "./pages/Wrapper";
import ABI from "./chain-data/ABI.json";
import ContractDetails from "./chain-data/ContractDetails.json";

import "./App.css";
import { ethers } from "ethers";

function App() {
  const [web3Modal, setWeb3Modal] = useState(null);
  const [provider, setProvider] = useState(null);

  async function connectWallet() {
    const _provider = await web3Modal.connect();
    setProvider(_provider);
    let address = _provider.selectedAddress;
    // if (parseInt(_provider.chainId) === 8001) {
    //   let _provider = new ethers.providers.Web3Provider(provider);
    //   let name = await _provider.lookupAddress(address);
    //   address = name;
    //   console.log(name);
    // }
    // else{
    //   console.log("wrong network broo");
    // }

    return address;
  }

  useEffect(() => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: process.QUICKNODE_API,
        },
      },
    };
    const newWeb3Modal = new Web3Modal({
      cacheProvider: true,
      network: "mainnet",
      providerOptions,
    });
    setWeb3Modal(newWeb3Modal);
  }, []);

  return (
    <BrowserRouter>
    <div className="App">
      <div className="gpt3__navbar-sign">
        <button type="button" onClick={connectWallet}>
          Connect Wallet
        </button>
      </div>
      
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/app" element={<Wrapper/>} />
        </Routes>
      </div>
      </BrowserRouter>
    
  );
}

export default App;
