import React, { useContext, useState } from "react";
import Store from "../store/Store";
import Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../style/shopcard.css";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import Swal from "sweetalert2";
const Shopcard = () => {
  const { card, addNew, decrement, remove, checkSignIn } = useContext(Store);
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const Total =
    card.length > 0 &&
    card
      .map((e) => {
        return eval(e.count * e.price);
      })
      .reduce((a, b) => {
        return a + b;
      });
  console.log(Total);
  const sweetAleart = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You are not a member!",
    }).then((data) => {
      if (data.isConfirmed) {
        navigate("/signin");
      }
    });
  };
  return (
    <div>
      <Container className="text-center shopcard">
        {card.length > 0 ? (
          <div>
            <Button
              variant="outline-success"
              as={Link}
              to="/shop"
              className="mt-3 mb-3 "
            >
              Back Shopping
            </Button>
            <div className="bg-success p-2 text-light">
              <h1>
                Total Price: <span className="text-warning">${Total}</span>
              </h1>
            </div>

            <Row className=" justify-content-between mt-3 ">
              {card.map((e) => (
                <Card
                  style={{ width: "18rem" }}
                  className="col-12 col-md-6 col-lg-4 mb-2  m-auto p-2 "
                  key={e.id}
                >
                  <Card.Img variant="top" src={e.img} />

                  <Card.Body className=" text-start">
                    <div className=" text position-relative p-3">
                      <Card.Text className="details-text">
                        Product Details
                      </Card.Text>
                      <Card.Text>Code:#{e.id}</Card.Text>
                      <Card.Text>Name:{e.name}</Card.Text>
                      <Card.Text>Price:{e.price}$</Card.Text>
                    </div>
                    <div className=" d-flex justify-content-between mt-3 align-item-center">
                      <Card.Text className="fw-bolder item">
                        {e.count} Item
                      </Card.Text>
                      <Card.Text>
                        <Button
                          variant="warning"
                          className="me-2 p-1"
                          onClick={() => addNew(e)}
                        >
                          +
                        </Button>
                        <Button
                          variant="success"
                          className=" me-2 p-1"
                          onClick={() => decrement(e)}
                        >
                          -
                        </Button>
                        <Button
                          variant="danger"
                          className="p-1"
                          onClick={() => remove(e)}
                        >
                          <FaTrashAlt />
                        </Button>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </Row>

            <Button
              variant="primary w-25 mt-2 mb-5"
              onClick={
                checkSignIn === true
                  ? () => navigate("/pay")
                  : () => sweetAleart()
              }
            >
              Proceed to pay
            </Button>
          </div>
        ) : (
          <div className="empty">
            <h1 className="text-danger">Your shopping card is Empty</h1>
            <h2>
              Please go to Product Section to
              <Button
                variant="link"
                className="ps-1 fs-2 pt-0 text-success "
                as={Link}
                to="/shop"
              >
                Start Shopping
              </Button>
            </h2>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Shopcard;
