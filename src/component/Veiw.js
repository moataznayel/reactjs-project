import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Veiw = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  console.log(id);
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:9000/prudect/${id}`,
    }).then((data) => {
      setProduct(data.data);
    });
  }, []);
  return (
    <div>
      <Card
        style={{ width: "20rem" }}
        className="col-12 col-md-6 col-lg-4 mb-3  m-auto p-2 mt-3"
      >
        <div className="img-shop">
          <Card.Img variant="top" src={product.img} />
        </div>

        <Card.Body>
          <div className="  text-shop ">
            <Card.Title className=" text-start">
              Id: <span className="text-dark">#{product.id}</span>
            </Card.Title>
            <Card.Title className=" text-start">
              Url: <span className="text-dark">{product.img}</span>
            </Card.Title>
            <Card.Title className=" text-start">
              Name: <span className="text-dark">{product.name}</span>
            </Card.Title>
            <Card.Text>
              Price: <span className="text-dark">${product.price}</span>{" "}
            </Card.Text>
            <Card.Text>
              Items: <span className="text-dark">{product.items}</span>
            </Card.Text>
          </div>
        </Card.Body>
        <Button variant="outline-success" as={Link} to={"/admin/AdminProduct"}>
          Back
        </Button>
      </Card>
    </div>
  );
};

export default Veiw;
