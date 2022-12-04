import { React } from "react";
import {
  Footer,
  WhatGPT3,
  Header,
} from "../containers";
import { Brand, Navbar } from "../components";

function Home() {
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