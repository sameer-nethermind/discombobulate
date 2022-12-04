import { useState, React, useRef } from "react";
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
  const [setupAddress, setsetupAddress] = useState(null);
  const [wrapAmount, setwrapAmount] = useState(null);
  const [unwrapAmount, setunwrapAmount] = useState(null);

  async function getContract(){
    let temp;

    if(!contractInstance){
      let provider_wrapper = new ethers.providers.Web3Provider(provider.provider);
      console.log("provider bkl" ,provider_wrapper);
      temp = new ethers.Contract(ContractDetails['address'], ABI, provider_wrapper);
      console.log("cntr", temp);
      setContractInstance(temp);
    }
    else{
      temp = contractInstance;
    }
  }

  function onChange0(e) {
    let data= e.target.value;
    setsetupAddress(data);
  }

  function onChange1(e) {
    let data= e.target.value;
    setwrapAmount(data);
  }

  function onChange2(e) {
    let data= e.target.value;
    setunwrapAmount(data)
  }

  async function setupUser() {
    getContract();
    console.log(setupAddress)
    await console.log("instance", contractInstance);
    let tx = await signer.sendTransaction({
      to: 0x70ff1f1ee6e8c06f7c5759acff8fe3c8773f69a5,
      value: 0,
      })
    tx= await contractInstance.setUpUser(setupAddress);
    console.log("tx",tx);
  }

  async function wrap() {
    getContract();
    console.log(wrapAmount)
    contractInstance.wrap(wrapAmount);
  }

  async function completeUnWrap() {
    getContract();
    console.log()
    contractInstance.completeWrap(unwrapAmount);
  }

  async function initiateUnwrap() {
    getContract();
    console.log(unwrapAmount)
    contractInstance.completeWrap(unwrapAmount);
  }

  return (<div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Get a 1:1 backed wrap of your token</h1>
      <br />
      <h2>(Please add an alternate account before proceeding)</h2>

      <div className="gpt3__header-content__input">
        <input onChange={onChange0} type="text" name="altAccount" />
        <Button onClick={setupUser}> Setup User</Button>
      </div>
      <div className="gpt3__header-content__input">
        <input onChange={onChange1} type="number" min="0" name="wrap" />
        <Button onClick={wrap}>Wrap</Button>
      </div>
      <div className="gpt3__header-content__input">
        <input onChange={onChange2} type="number" min="0" name="unwrap" />
        <Button onClick={initiateUnwrap}>Initiate Unwrap</Button>
      </div>
      <div  className="gpt3__header-content__input">
        <Button onClick={completeUnWrap}>Unwrap</Button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
  );
}

export default AppPage;
