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
    console.log(provider);
    // const _provider = new ethers.providers.Web3Provider(provider);
    // const name = await _provider.lookupAddress(
    //   "0x648aa14e4424e0825a5ce739c8c68610e143fb79"
    // );
    // console.log(name);
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
