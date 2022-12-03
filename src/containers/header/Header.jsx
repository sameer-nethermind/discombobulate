import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./header.css";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Bringing TradFi grade security to Defi</h1>
      <p>
        Vanilla Mint allows users to eliminate any smart contract risks and
        private key thefts by allowing quick and easy recovery of funds through
        a simple decentralized asset wrapping mechanism.
      </p>

      <div className="gpt3__header-content__input">
        <Link to="/app"> 
        <Button> Go to App</Button></Link>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
