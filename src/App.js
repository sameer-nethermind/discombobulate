import { useState, React } from "react";
import Web3Modal from "web3modal";
import { useRef, useEffect } from "react";
import Home from "./pages/Home";
import WalletConnectProvider from "@walletconnect/web3-provider";
import "./App.css";

function App() {
  const [web3Modal, setWeb3Modal] = useState(null);
  async function connectWallet() {
    const provider = await web3Modal.connect();
    console.log(provider)
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
        <button type="button" onClick={connectWallet}>Connect Wallet</button>
      </div>
      <Home></Home>
    </div>
  );
}

export default App;