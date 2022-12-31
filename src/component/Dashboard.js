import React from "react";
import { Button } from "react-bootstrap";
import { FaShoppingBasket, FaUserAlt, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="dashboard pt-5 p-0 ">
      <Button variant="dark" as={Link} to="/Admin">
        <FaHome className="me-2" /> Dashboard
      </Button>
      <Button variant="dark" as={Link} to="/Admin/AdminProduct">
        <FaShoppingBasket className="me-2" /> Product
      </Button>
      <Button variant="dark" as={Link} to="/Admin/User">
        <FaUserAlt className="me-2" />
        User
      </Button>
    </div>
  );
};

export default Dashboard;
