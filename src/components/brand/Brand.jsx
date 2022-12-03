import React from "react";
import "./brand.css";
import Button from "@mui/material/Button";

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <h3>
        <a className="btn" href="/">
          Lodge Complaint
        </a>
      </h3>
    </div>
    <div>
      <h3>
        <Button variant="contained">Lodge Complaint</Button>
      </h3>
    </div>
  </div>
);

export default Brand;
