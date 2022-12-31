import React from "react";
import "../style/logo.css";
import Carousel from "react-bootstrap/Carousel";
import p from "../Photos/logoOne.png";
import p2 from "../Photos/logoTwo.png";
const Logo = () => {
  return (
    <div>
      <Carousel className="logo">
        <Carousel.Item>
          <img className="d-block w-100 " src={p} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={p2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Logo;
