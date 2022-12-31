import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import s1 from "../Photos/s1.jpg";
import s2 from "../Photos/s2.jpg";
import s3 from "../Photos/s3.jpg";
import s4 from "../Photos/s4.jpg";
import "../style/items.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Items = () => {
  const [item, setItem] = useState([
    { id: 0, img: s1, name: "Clothes", item: "item 5" },
    { id: 1, img: s2, name: "Bag Barnd", item: "item 20" },
    { id: 2, img: s3, name: "Accessories", item: "item 6" },
    { id: 3, img: s4, name: "Shoes", item: "item 8" },
  ]);
  // item.map((e) => console.log(e.name));
  // console.log();
  return (
    <Container>
      <Row className="mt-5 mb-5 item">
        {item.map((e) => (
          <Card
            style={{ width: "18rem" }}
            className="col-12 col-md-6 col-lg-3 mb-2  m-auto"
            key={e.id}
          >
            <div className="img-shop">
              <Card.Img variant="top" src={e.img} />
            </div>

            <Card.Body className="text-center">
              <Card.Title>{e.name}</Card.Title>
              <Card.Text className=" opacity-50">{e.item}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default Items;
