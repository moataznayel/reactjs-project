import Button from "react-bootstrap/Button";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Items from "./Items";
import Product from "./Product";
import Footer from "./Footer";

const Home = (props) => {
  useEffect(() => {}, []);
  return (
    <div>
      <Logo />
      <Items />
      <Product />
      <Footer />
    </div>
  );
};

export default Home;
