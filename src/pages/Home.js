import { React } from "react";
import {
  Footer,
  WhatGPT3,
  Header,
} from "../containers";
import { Brand, Navbar } from "../components";

function Home() {
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