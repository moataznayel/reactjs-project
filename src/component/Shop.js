import React, { useContext } from "react";
import "../style/shop.css";
import Button from "react-bootstrap/Button";
import { FaShoppingBasket } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Store from "../store/Store";
const Shop = () => {
  const { proudect, add } = useContext(Store);
  return (
    <div>
      <div className="shop-header">
        <h1 className=" fw-bolder text-light">Shop Now</h1>
      </div>
      <Container className="text-center ">
        <Button
          variant="outline-success"
          as={Link}
          to="/"
          className="mt-3 mb-3"
        >
          Back Home
        </Button>
        <Row className=" justify-content-between p-5 p-sm-0 ">
          {proudect.map((e) => (
            <div className="col-12 col-sm-6  col-lg-4 mb-3 m-auto  " key={e.id}>
              {" "}
              <Card
              // style={{ width: "25rem" }}
              >
                <div className="img-shop">
                  <Card.Img
                    variant="top"
                    src={e.img}
                    className="img-fluid"
                    // style={{ height: "420px" }}
                  />
                </div>

                <Card.Body>
                  <Card.Title className=" text-start">{e.name}</Card.Title>
                  <div className=" d-flex justify-content-between text-shop ">
                    <Card.Text>{e.price}$</Card.Text>
                    <Card.Text>
                      <FaShoppingBasket
                        className="icon-basket"
                        as={Link}
                        onClick={() => add(e)}
                      />
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
