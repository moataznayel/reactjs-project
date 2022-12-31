import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Dashboard from "./Dashboard";
import { Col, Row } from "react-bootstrap";
const Users = () => {
  const [data, setData] = useState([]);
  const editAdmin = (obj) => {
    if (obj.role === "admin") {
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
            url: `http://localhost:9000/user/${obj.id}`,
            data: {
              name: obj.name,
              username: obj.username,
              email: obj.email,
              password: obj.password,
              role: "member",
              age: obj.age,
            },
          }).then(() => {
            getData();
          });
        }
      });
    } else {
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
            url: `http://localhost:9000/user/${obj.id}`,
            data: {
              name: obj.name,
              username: obj.username,
              email: obj.email,
              password: obj.password,
              role: "admin",
              age: obj.age,
            },
          }).then(() => {
            getData();
          });
        }
      });
    }
  };

  const delet = (id) => {
    Swal.fire({
      title: "Are you sure you  delete the user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((data) => {
      if (data.isConfirmed === true) {
        axios({
          method: "delete",
          url: `http://localhost:9000/user/${id}`,
        }).then(() => {
          getData();
        });
      }
    });
  };
  const getData = () => {
    axios({
      method: "get",
      url: "http://localhost:9000/user",
    }).then((data) => {
      setData(data.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="admin container-fluid">
        <Row>
          <Col className=" controlpanel col-2">
            <Dashboard />
          </Col>

          <Col className="col-10">
            {/* <Button
              variant="success"
              as={Link}
              to="/admin/User/newuser"
              className="mt-2 mb-2"
            >
              Add New User
            </Button>{" "} */}
            <Table striped className="text-center mt-5">
              <thead className="bg-dark text-light ">
                <tr>
                  <th>ID</th>
                  <th>User Name</th>
                  <th>Age</th>
                  <th>Role</th>
                  <th>Controls</th>
                </tr>
              </thead>
              <tbody>
                {data.map((e) => (
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.username}</td>
                    <td>{e.age}</td>
                    <td>{e.role}</td>
                    <td className="d-flex justify-content-evenly">
                      <Button
                        variant="outline-danger"
                        onClick={() => delet(e.id)}
                      >
                        Delete User
                      </Button>
                      <Button
                        variant="outline-primary"
                        as={Link}
                        to={`/admin/User/${e.id}`}
                      >
                        Veiw
                      </Button>
                      <Button
                        variant="outline-warning"
                        as={Link}
                        to={`/User/Edit/${e.id}`}
                      >
                        Edit
                      </Button>
                      {e.role === "admin" ? (
                        <Button
                          variant={e.role === "admin" ? "secondary" : "success"}
                          className="w-25"
                          onClick={() => editAdmin(e)}
                        >
                          Remove Admin
                        </Button>
                      ) : (
                        <Button
                          variant={e.role === "admin" ? "secondary" : "success"}
                          className="w-25"
                          onClick={() => editAdmin(e)}
                        >
                          Make Admin
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Users;
