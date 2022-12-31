import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

const Pay = () => {
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "25rem" }} className="mt-5 p-2">
        <Card.Title className="text-center  fs-2" style={{ color: "#1976d2" }}>
          Payment information
        </Card.Title>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="Text" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="Email" placeholder="Enter Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control type="Text" placeholder="Enter Address" />
          </Form.Group>
          <Form.Control type="month" id="start" name="start" value="2022-11" />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Visa</Form.Label>
            <Form.Control type="Text" placeholder="Enter visa number" />
          </Form.Group>
          <div className="d-flex">
            <Button variant="success" className="login1 col-6">
              Pay
            </Button>
            <Button
              variant="primary"
              className="login1 col-6 ms-1"
              as={Link}
              to="/card"
            >
              Back
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Pay;
