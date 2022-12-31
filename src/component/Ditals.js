import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Store from "../store/Store";

const Ditals = (props) => {
  const { id } = useParams();
  const { proudect } = useContext(Store);
  const ditalse = proudect[id];
  // console.log(id);
  // console.log(proudect);
  const [data, setData] = useState(ditalse);

  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.price}</h1>
    </div>
  );
};

export default Ditals;
