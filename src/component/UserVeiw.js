import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const UserVeiw = () => {
  const { id } = useParams();
  const [users, setUsers] = useState({});
  console.log(id);
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:9000/user/${id}`,
    }).then((data) => {
      setUsers(data.data);
    });
  }, []);
  return (
    <div>
      <Card
        style={{ width: "20rem" }}
        className="col-12 col-md-6 col-lg-4 mb-3  m-auto p-2 mt-3"
      >
        <Card.Body>
          <div className="  text-shop ">
            <Card.Text className=" text-start">
              Id: <span className="text-dark">#{users.id}</span>
            </Card.Text>
            <Card.Text className=" text-start">
              Name: <span className="text-dark">{users.name}</span>
            </Card.Text>
            <Card.Text className=" text-start">
              Role: <span className="text-dark">{users.role}</span>
            </Card.Text>
            <Card.Text>
              User Name: <span className="text-dark">{users.username}</span>{" "}
            </Card.Text>
            <Card.Text>
              Items: <span className="text-dark">{users.email}</span>
            </Card.Text>
            <Card.Text>
              Password: <span className="text-dark">{users.password}</span>
            </Card.Text>
          </div>
        </Card.Body>

        <Button variant="outline-success" as={Link} to={"/admin/User"}>
          back
        </Button>
      </Card>
    </div>
  );
};

export default UserVeiw;
