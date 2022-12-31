import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const NewProduct = () => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [price, setPrice] = useState(0);
  const [errorPrice, setErrorPrice] = useState(false);
  const [items, setItems] = useState(0);
  const [errorItems, setErrorItems] = useState(false);
  const navigate = useNavigate();
  console.log(name);
  console.log(price);
  console.log(items);
  const submit = (e) => {
    e.preventDefault();
    if (name === "") {
      setErrorName(true);
    } else if (price < 1) {
      setErrorName(false);
      setErrorPrice(true);
    } else if (items < 1) {
      setErrorName(false);
      setErrorPrice(false);
      setErrorItems(true);
    } else {
      axios({
        method: "post",
        url: "http://localhost:9000/prudect",
        data: {
          img,
          name,
          price: parseInt(price),
          items: parseInt(items),
          count: 1,
        },
      }).then(() => navigate("/Admin/AdminProduct"));
    }
  };
  return (
    <div className="container-fluid">
      <Row>
        <Col className=" controlpanel col-2">
          {" "}
          <Dashboard />
        </Col>
        <Col className="col-10">
          <Form onSubmit={submit}>
            <Form.Group className="mb-3">
              <Form.Label>Url Image</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter url image"
                onChange={(e) => setImg(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              {errorName === false ? (
                <Form.Label>Name Product</Form.Label>
              ) : (
                <Form.Label className="text-danger">
                  {" "}
                  valid Name Product
                </Form.Label>
              )}

              <Form.Control
                type="text"
                placeholder="Enter Name Product"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              {errorPrice === false ? (
                <Form.Label>Price</Form.Label>
              ) : (
                <Form.Label className="text-danger"> valid Price</Form.Label>
              )}
              <Form.Control
                type="number"
                placeholder="Enter product price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              {errorItems === false ? (
                <Form.Label>Items</Form.Label>
              ) : (
                <Form.Label className="text-danger"> valid Items</Form.Label>
              )}
              <Form.Control
                type="number"
                placeholder="Enter Number of Items"
                onChange={(e) => setItems(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default NewProduct;
