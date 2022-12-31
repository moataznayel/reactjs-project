import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "../style/Form.css";
import axios from "axios";
const FormValidation = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("Name");
  const [inputName, setInputName] = useState("");
  const [age, setAge] = useState("Age");
  const [inputAge, setInputAge] = useState(0);
  const [Gender, setGender] = useState("Gender");
  const [email, setEmail] = useState("Email");
  const [inputEmail, setInputEmail] = useState(" ");
  const [user, setUser] = useState("User Name");
  const [inputUser, setInputUser] = useState("");
  const [password, setPassword] = useState("Password");
  const [inputPassword, setInputPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("Confirm Password");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");
  const [date, setDate] = useState("Birthdate");
  const [inputDate, setInputDate] = useState("");
  const [getEmail, setGetEmail] = useState([]);
  const [error, setError] = useState(false);
  const [male, setMale] = useState(true);
  const check = male ? "male" : "female";
  console.log(check);
  let reName = /^[a-zA-Z ]/;
  let reemail = /\w+(\d+)?@\w+.\w+/g;
  let reUser = /^[a-zA-Z\-]+$/;
  let rephone = /(\+20)?01\d{9}/g;
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9000/user",
    }).then((data) => {
      let x = data.data.map((e) => e.email);
      setGetEmail(x);
    });
  }, []);
  const handleForm = (e) => {
    e.preventDefault();
    if (!reName.test(inputName)) {
      setName("Invalid Name");
    } else if (inputAge < 15) {
      setName("Name");
      setAge("Invalid Age");
    } else if (!reemail.test(inputEmail)) {
      setName("Name");
      setAge("Age");
      setEmail("invalid Email");
    } else if (inputPassword.length < 8) {
      setName("Name");
      setAge("Age");
      setEmail("Email");
      setPassword("Invalid Password");
    } else if (getEmail.indexOf(inputEmail) !== -1) {
      setName("Name");
      setAge("Age");
      setEmail("Email");
      setPassword("Password");
      setError(true);
    } else {
      navigate("/signin");
      axios({
        method: "post",
        url: "http://localhost:9000/user",
        data: {
          name: inputName,
          username: inputUser,
          age: +inputAge,
          password: inputPassword,
          role: "member",
          email: inputEmail,
          gender: check,
        },
      }).then((e) => e.data);
    }
  };

  return (
    <div className=" d-flex justify-content-center mt-3 p-3">
      <Card style={{ width: "20rem" }}>
        <Form className=" p-2" onSubmit={handleForm}>
          <h1 className="text-center">Sign Up</h1>
          <Row>
            <Col className="col-12 mb-2 ">
              <Form.Label style={name !== "Name" ? { color: "red" } : {}}>
                {name}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your name"
                onChange={(e) => setInputName(e.target.value)}
              />
            </Col>
            <Col className="col-12  mb-2">
              <Form.Label style={age !== "Age" ? { color: "red" } : {}}>
                {age}
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Your Age"
                onChange={(e) => setInputAge(e.target.value)}
              />
            </Col>
            <Col className="col-12  mb-2 ">
              <Form.Label style={Gender !== "Gender" ? { color: "red" } : {}}>
                {Gender}
              </Form.Label>
              <Form.Select onChange={(e) => setMale((e) => !e)}>
                <option>Male</option>
                <option>Femail</option>
              </Form.Select>
            </Col>
            <Col className="col-12   mb-2  ">
              <Form.Label style={email !== "Email" ? { color: "red" } : {}}>
                {email}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Email"
                onChange={(e) => setInputEmail(e.target.value)}
              />
            </Col>
            <Col className="col-12   mb-2 ">
              <Form.Label style={user !== "User Name" ? { color: "red" } : {}}>
                {user}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your UserName"
                onChange={(e) => setInputUser(e.target.value)}
              />
            </Col>
            <Col className="col-12   mb-2  mb-2 position-relative">
              <Form.Label
                style={password !== "Password" ? { color: "red" } : {}}
              >
                {password}
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Your password"
                onChange={(e) => setInputPassword(e.target.value)}
              />
            </Col>

            <Col className="col-12  mb-2  mt-2 text-center fs-3 ">
              {error === true && (
                <Form.Label className="text-danger">
                  Email Aready Exist{" "}
                </Form.Label>
              )}
            </Col>
            <Col className="col-12  mb-2  mt-2">
              <Button variant="success" type="submit" className="w-100">
                Sign Up
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default FormValidation;
