import { useState, React } from "react";
import Web3Modal from "web3modal";
import { useRef, useEffect } from "react";
import Home from "./pages/Home";
import WalletConnectProvider from "@walletconnect/web3-provider";
import "./App.css";
import { ethers } from "ethers";

function App() {
  const [web3Modal, setWeb3Modal] = useState(null);
  async function connectWallet() {
    const provider = await web3Modal.connect();

    let address = provider.selectedAddress;
    if (parseInt(provider.chainId) === 1) {
      let _provider = new ethers.providers.Web3Provider(provider);
      let name = await _provider.lookupAddress(address);
      address = name;
      console.log(name);
    }

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
    <div className="App">
      <div className="gpt3__navbar-sign">
        <button type="button" onClick={connectWallet}>
          Connect Wallet
        </button>
      </div>
      <Home></Home>
    </div>
  );
}

export default App;
