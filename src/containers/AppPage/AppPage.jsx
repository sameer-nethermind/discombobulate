import { useState, React } from "react";
import people from "../../assets/people.png";
import ai from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./appPage.css";
import {ethers} from 'ethers';
import ABI from "../../chain-data/ABI.json";
import ContractDetails from "../../chain-data/ContractDetails.json";

function AppPage(provider) {
  const [contractInstance, setContractInstance] = useState(null);

  async function wrapTokens(){
    if(!contractInstance){
      console.log("ContractDetails['address']: ", ContractDetails['address']);
      console.log("ABI: ", ABI);
      console.log("provider.provider: ", provider.provider);
      console.log("provider: ", provider);
      contractInstance = new ethers.Contract(ContractDetails['address'], ABI, provider.provider);
    }
    else{
      console.log("else block");
    }
    let x = await contractInstance.totalPublishedProjs();
    console.log("X:", x);
  }

  return (<div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Get a 1:1 backed wrap of your token</h1>
      <br />
      <h2>(Please add an alternate account before proceeding)</h2>

      <div className="gpt3__header-content__input">
        <input type="text" name="altAccount" />
        <Button onClick={wrapTokens}> Wrap</Button>
      </div>
      <div className="gpt3__header-content__input">
        <input type="number" min="0" name="wrap" />
        <Button onClick={wrap}>Wrap</Button>
      </div>
      <div className="gpt3__header-content__input">
        <input type="number" min="0" name="unwrap" />
        <Button onClick={unwrap}>Unwrap</Button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
  );
}

export default AppPage;
