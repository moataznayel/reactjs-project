import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UserEdit = () => {
  const { ID } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const getData = () => {
    axios({
      method: "get",
      url: `http://localhost:9000/user/${ID}`,
    }).then((data) => {
      setName(data.data.name);
      setUserName(data.data.username);
      setAge(data.data.age);
      setEmail(data.data.email);
      setRole(data.data.role);
      setPassword(data.data.password);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const submit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure about the edit?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((data) => {
      if (data.isConfirmed === true) {
        axios({
          method: "put",
          url: `http://localhost:9000/user/${ID}`,
          data: {
            name,
            username,
            email,
            password,
            role,
            age,
          },
        }).then(() => {
          navigate("/admin/User");
        });
      } else {
        getData();
      }
    });
  };
  return (
    <div>
      <Form onSubmit={submit} className="p-2">
        <Form.Label>User: #{ID}</Form.Label>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name Product"
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
            placeholder="Enter email"
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
      </Form>
      <div className="mt-5 w-100 text-center">
        <Button variant="outline-primary  w-25" as={Link} to={"/admin/User"}>
          back
        </Button>
      </div>
    </div>
  );
};

export default UserEdit;
