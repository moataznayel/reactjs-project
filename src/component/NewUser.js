import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaRegTimesCircle } from "react-icons/fa";
import Dashboard from "./Dashboard";
const NewUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (
      name !== "" &&
      username !== "" &&
      age !== "" &&
      role !== "" &&
      email !== "" &&
      password !== ""
    ) {
      axios({
        method: "post",
        url: "http://localhost:9000/user",
        data: { name, username, email, password, role, age },
      }).then(() => navigate("/admin/User"));
    } else {
      seterror("Please complete the data");
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
            <Form.Label className="w-100 text-center text-success fs-3">
              Add New User
            </Form.Label>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User Name"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Role"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
            {error !== "" && (
              <Form.Label className="w-100 text-center text-danger fs-3">
                <FaRegTimesCircle className="mb-2" />
                {error}
              </Form.Label>
            )}
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default NewUser;
