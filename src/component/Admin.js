import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "../style/admin.css";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import "../style/admin.css";
import axios from "axios";
import Card from "react-bootstrap/Card";
const Admin = () => {
  const navigate = useNavigate();
  const [userCount, setUserCount] = useState(0);
  const [ProductCount, setProductCount] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minage, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(0);
  const getUser = () => {
    axios({
      method: "get",
      url: "http://localhost:9000/user",
    }).then((data) => {
      setUserCount(data.data.length);
      let age = data.data.map((e) => {
        return e.age;
      });
      setMaxAge(Math.max(...age));
      setMinAge(Math.min(...age));
    });
  };
  const getProduct = () => {
    axios({
      method: "get",
      url: "http://localhost:9000/prudect",
    }).then((data) => {
      setProductCount(data.data.length);
      let price = data.data.map((e) => {
        return e.price;
      });
      setMaxPrice(Math.max(...price));
      setMinPrice(Math.min(...price));
    });
  };
  useEffect(() => {
    getUser();
    getProduct();
  }, []);
  return (
    <div className="admin container-fluid">
      <Row>
        <Col className=" controlpanel col-12 col-sm-3 col-lg-2 ">
          {" "}
          <Dashboard />
        </Col>
        <Col className="col-12 col-sm-9 mt-5 col-lg-10 d-flex align-items-center justify-content-center ">
          <Row>
            <Col className="col-12 col-lg-6">
              <Card
                style={{ width: "25rem" }}
                className=" text-center m-auto mb-5 "
              >
                <Card.Header className="bg-success">Products</Card.Header>
                <Card.Text className="text-warning">
                  You Have{" "}
                  <span className="text-success fs-5">{ProductCount}</span>{" "}
                  Product Available
                </Card.Text>
                <Card.Text>
                  With price products between{" "}
                  <span className="text-danger"> ${minPrice}</span>:
                  <span className="text-danger"> ${maxPrice}</span>
                </Card.Text>
                <Button
                  className="w-50 m-auto mb-2"
                  variant="success"
                  as={Link}
                  to="/Admin/AdminProduct"
                >
                  Manage Prodects
                </Button>
              </Card>
            </Col>
            <Col className="col-12 col-lg-6">
              <Card style={{ width: "25rem" }} className=" text-center m-auto">
                <Card.Header className="bg-success">Users</Card.Header>
                <Card.Text className="text-warning">
                  You Have{" "}
                  <span className="text-success fs-5">{userCount}</span> Users
                  Register
                </Card.Text>
                <Card.Text>
                  With Age User between{" "}
                  <span className="text-danger"> {minage} </span>:
                  <span className="text-danger"> {maxAge} </span>
                  Old
                </Card.Text>
                <Button
                  className="w-50 m-auto mb-2"
                  variant="success"
                  as={Link}
                  to="/Admin/AdminProduct"
                >
                  Manage Users{" "}
                </Button>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
