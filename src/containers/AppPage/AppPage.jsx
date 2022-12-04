import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./appPage.css";

function setAltAddress() {
  let address = document.getElementsByName("altAccount");

}

function wrap() {
  let wrapAmount = document.getElementsByName("wrap");

}

function unwrap() {
  let unwrapAmount = document.getElementsByName("unwrap");

}

const AppPage = (props) => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Get a 1:1 backed wrap of your token</h1>
      <br />
      <h2>(Please add an alternate account before proceeding)</h2>

      <div className="gpt3__header-content__input">
        <input type="text" maxlength="64" name="altAccount" />
        <Button onClick={setAltAddress}>Set</Button>
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

export default AppPage;
