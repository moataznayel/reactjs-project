import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../style/footer.css";
import fifth1 from "../Photos/fifth1.jpg";
import fifth2 from "../Photos/fifth2.jpg";
import fifth3 from "../Photos/fifth3.jpg";
import fifth4 from "../Photos/fifth4.jpg";
import fifth5 from "../Photos/fifth5.jpg";
import fifth6 from "../Photos/fifth6.jpg";
import f1 from "../Photos/f1.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <Container className="footer mt-5">
        <Row className="justify-content-around mb-5">
          <Col className="col-10  col-lg-9 m-auto mb-3">
            <Card className="footer-img">
              <Card.Img src={f1} alt="Card image" />
              <Card.ImgOverlay className="text-img text-center text-img text-dark d-flex align-items-end justify-content-center">
                <div>
                  {" "}
                  <h1>MERRY</h1>
                  <p>
                    Christmas <span className="text-success">40%</span> Off
                  </p>
                  <Button variant="outline-success" as={Link} to="/shop">
                    Shoping Now
                  </Button>{" "}
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col className="col-10  col-lg-3 ms-auto me-auto mb-3">
            <Card className="pt-5 pb-3 card-text p-1 d-flex justify-content-between footer-img text-dark h-100 m-auto text-over text-center">
              <Card.Title>
                <h1 className="text-success">
                  Your
                  <br />
                  Next
                </h1>
              </Card.Title>

              <h1>
                Purchase <span className="text-success">10%</span> Off
              </h1>

              <Card.Text>
                <Button variant="outline-success" as={Link} to="/shop">
                  Shoping Now
                </Button>
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
      <div style={{ background: "#ddd" }} className="mt-5 pt-5 pb-5">
        <Container>
          <Row>
            <Col className="col-10 col-lg-4 m-auto mb-3">
              <Row>
                <Col className="col-6 p-0">
                  <img src={fifth1} width={"100%"} />
                </Col>
                <Col className="col-6 p-0">
                  <img src={fifth2} width={"100%"} />
                </Col>
                <Col className="col-6 p-0">
                  <img src={fifth3} width={"100%"} />
                </Col>
                <Col className="col-6 p-0">
                  <img src={fifth4} width={"100%"} />
                </Col>
                <Col className="col-6 p-0">
                  <img src={fifth5} width={"100%"} />
                </Col>
                <Col className="col-6 p-0">
                  <img src={fifth6} width={"100%"} />
                </Col>
              </Row>
            </Col>
            <Col className=" col-10 col-lg-8 text-center  m-auto">
              <h1>Vintage Style</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                eaque iusto error debitis odio architecto omnis laboriosam ipsa,
                corrupti quod! Voluptatem sit voluptatibus facere sunt iste
                numquam voluptatum in esse!
              </p>
              <h1>#Lusiontheme</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
