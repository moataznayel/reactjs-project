import { useParams, useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
const Edit = () => {
  const { ID } = useParams();
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [items, setItems] = useState("");
  const navigate = useNavigate();
  console.log(ID);
  const getData = () => {
    axios({
      method: "get",
      url: `http://localhost:9000/prudect/${ID}`,
    }).then((data) => {
      console.log(data.data);
      setImg(data.data.img);
      setName(data.data.name);
      setPrice(data.data.price);
      setItems(data.data.items);
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
          url: `http://localhost:9000/prudect/${ID}`,
          data: {
            img,
            name,
            price,
            items,
          },
        }).then(() => navigate("/Admin/AdminProduct"));
      } else {
        getData();
      }
    });
  };
  return (
    <div>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3">
          <Form.Label>Url Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter url image"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name Product</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name Product"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="numer"
            placeholder="Enter url image"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Items</Form.Label>
          <Form.Control
            type="numer"
            placeholder="Enter url image"
            value={items}
            onChange={(e) => setItems(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
      <div className="mt-5 w-100 text-center">
        <Button
          variant="outline-success  w-25"
          as={Link}
          to={"/admin/adminProduct"}
        >
          back
        </Button>
      </div>
    </div>
  );
};

export default Edit;
