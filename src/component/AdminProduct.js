import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "../style/admin.css";
import { FaShoppingBasket, FaUserAlt, FaHome } from "react-icons/fa";
import ShowProduct from "./ShowProduct";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Swal from "sweetalert2";
import Dashboard from "./Dashboard";
const AdminProduct = () => {
  const [data, setData] = useState([]);

  const delet = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "delete",
          url: `http://localhost:9000/prudect/${id}`,
        }).then((data) => {
          showData();
        });
      }
    });
  };
  const showData = () => {
    axios({
      method: "get",
      url: "http://localhost:9000/prudect",
    }).then((data) => {
      setData(data.data);
    });
  };
  console.log(data);
  useEffect(() => {
    showData();
  }, []);
  return (
    <div className="admin container-fluid">
      <Row>
        <Col className=" controlpanel col-2">
          <Dashboard />
        </Col>
        <Col className="col-10">
          <Button
            variant="success"
            as={Link}
            to="/admin/newproduct"
            className="mt-2 mb-2"
          >
            Add New Product
          </Button>{" "}
          <Table striped className="text-center">
            <thead className="bg-dark text-light ">
              <tr>
                <th>ID</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Items</th>
                <th>Controls</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e) => (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>
                    <img src={e.img} width="28px" />
                  </td>
                  <td>{e.name}</td>
                  <td>${e.price}</td>
                  <td>{e.items}</td>
                  <td className="d-flex justify-content-evenly">
                    <Button variant="danger" onClick={() => delet(e.id)}>
                      Delet
                    </Button>
                    <Button
                      variant="primary"
                      as={Link}
                      to={`/admin/AdminProduct/${e.id}`}
                    >
                      Veiw
                    </Button>
                    <Button
                      variant="warning"
                      as={Link}
                      to={`/admin/Edit/${e.id}`}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default AdminProduct;
