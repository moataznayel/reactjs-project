import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "../style/product.css";
import t1 from "../Photos/t1.jpg";
import t2 from "../Photos/t2.jpg";
import t3 from "../Photos/t3.jpg";
import t4 from "../Photos/t4.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const Product = () => {
  const [product, setProudect] = useState([
    { id: 1, img: t1, name: "vanity of women clothes", price: 150 },
    { id: 2, img: t2, name: "vanity of women clothes", price: 150 },
    { id: 3, img: t3, name: "complete your look", price: 150 },
    { id: 4, img: t4, name: "vanity of women clothes", price: 150 },
  ]);
  return (
    <div className="product pb-5 pt-2">
      <Container>
        <h1 className="text-center mb-4 ">Featured Products</h1>
        <Row className=" justify-content-between">
          {product.map((e) => (
            <Card
              style={{ width: "18rem" }}
              className="col-12 col-md-6 col-lg-3 mb-2  m-auto"
              key={e.id}
            >
              <div className="img-shop">
                <Card.Img variant="top" src={e.img} />
              </div>

              <Card.Body className=" text-center">
                <Card.Title>{e.name}</Card.Title>
                <Card.Text>{e.price}$</Card.Text>
                <Button variant="outline-success" as={Link} to="/shop">
                  Shop Now
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Product;
