import React, { useContext, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Store from "../store/Store";
import { FaRegTimesCircle } from "react-icons/fa";
const Signin = () => {
  const navigate = useNavigate();
  const [inputPassword, setInputPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState(false);
  const { user, checkLogn } = useContext(Store);

  console.log(user);
  const handleForm = (e) => {
    e.preventDefault();
    user.map((e) => {
      if (e.email === inputEmail) {
        if (e.password === inputPassword) {
          checkLogn();
          navigate("/", { state: { id: e.id } });
        }
      } else {
        setError(true);
      }
    });
  };
  return (
    <div className=" d-flex justify-content-center mt-3 p-3">
      <Card style={{ width: "20rem" }}>
        <Form className=" p-3" onSubmit={handleForm}>
          <h1 className="text-center">Sign In</h1>
          <Row className="sign-in">
            <Col className="col-12 mb-3 ">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Email"
                onChange={(e) => setInputEmail(e.target.value)}
              />
            </Col>
            <Col className="col-12  position-relative ">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={showPassword === false ? "password" : "text"}
                placeholder="Password"
                onChange={(e) => setInputPassword(e.target.value)}
              />

              {inputPassword !== "" && (
                <div>
                  {showPassword === false ? (
                    <FaEye
                      style={{ cursor: "pointer" }}
                      className="show-password"
                      onClick={() => setShowPassword((e) => !e)}
                    />
                  ) : (
                    <FaEyeSlash
                      style={{ cursor: "pointer" }}
                      className="show-password"
                      onClick={() => setShowPassword((e) => !e)}
                    />
                  )}
                </div>
              )}
            </Col>
            {error === true && (
              <Col className="col-12 text-center mt-3">
                <Form.Label className="text-danger ">
                  <FaRegTimesCircle className="fs-4 " /> Incorrect Email Or
                  Password
                </Form.Label>
              </Col>
            )}

            <Col className="col-12 mt-2 mb-2 ">
              <Button variant="success" type="submit" className="w-100">
                Log In
              </Button>
            </Col>
            <Col className="col-12 d-flex justify-content-center">
              <Button variant="link" as={Link} to="/signup">
                Sign Up
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default Signin;
