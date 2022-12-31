import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";
import "../style/header.css";
import { useContext } from "react";
import Store from "../store/Store";
import { Col, Row } from "react-bootstrap";
const Header = () => {
  const { card, logn, logout } = useContext(Store);
  console.log(logn.id);
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="fw-bold">Lusion</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div className="d-flex justify-content-around">
              <Nav.Link as={Link} to="/card" className="position-relative">
                <FaShoppingBasket className="icon-shop" />
                <Badge
                  bg={card.length < 1 ? "danger" : "success"}
                  className="position-absolute "
                >
                  {card.length}
                </Badge>
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/shop">
                Shop
              </Nav.Link>
            </div>
            {logn.id > 0 && (
              <div className="d-flex justify-content-around">
                <p className="p-2 pb-0 text-light">Welcome {logn.name}</p>
                <Nav.Link as={Link} onClick={() => logout()}>
                  logout
                </Nav.Link>
                {logn.role === "admin" && (
                  <Nav.Link as={Link} to="/admin">
                    Control Panel
                  </Nav.Link>
                )}
              </div>
            )}

            {logn.id === 0 && (
              <Nav.Link as={Link} to="/signin" className="text-center">
                sign in
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
