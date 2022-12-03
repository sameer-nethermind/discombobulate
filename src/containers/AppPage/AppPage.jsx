import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./appPage.css";

const AppPage = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Get a 1:1 backed wrap of your token</h1>

      <div className="gpt3__header-content__input">
        <input type="text" name="altAccount" />
        <Button> Wrap</Button>
      </div>
      <div className="gpt3__header-content__input">
        <input type="number" min="0" name="wrap" />
        <Button> Wrap</Button>
      </div>
      <div className="gpt3__header-content__input">
        <input type="number" min="0" name="unwrap" />
        <Button> Wrap</Button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default AppPage;
