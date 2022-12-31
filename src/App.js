import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
// import "../style/admin.css";
import { FaShoppingBasket, FaUserAlt } from "react-icons/fa";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Ditals from "./component/Ditals";
import FormValidation from "./component/FormValidation";
import Header from "./component/Header";
import Home from "./component/Home";
import Shop from "./component/Shop";
import Signin from "./component/Signin";
import Store from "./store/Store";
import axios from "axios";
import Shopcard from "./component/Shopcard";
import Pay from "./component/Pay";
import Admin from "./component/Admin";
import AdminProduct from "./component/AdminProduct";
import NewProduct from "./component/NewProduct";
import Veiw from "./component/Veiw";
import Edit from "./component/Edit";
import Users from "./component/Users";
import UserVeiw from "./component/UserVeiw";
import UserEdit from "./component/UserEdit";
import NewUser from "./component/NewUser";
const App = () => {
  const location = useLocation();
  const [product, setProduct] = useState([]);
  const [addCard, setAddCard] = useState([]);
  const [user, setUser] = useState([]);
  const [logn, setlogn] = useState({ id: 0 });
  const [checkSignIn, setCheckSignIn] = useState(false);
  const navigate = useNavigate();
  const showProduct = () => {
    console.log(location);
    axios({
      method: "get",
      url: "http://localhost:9000/prudect",
    }).then((data) => {
      setProduct(data.data);
    });
  };
  const showUser = () => {
    axios({
      method: "get",
      url: "http://localhost:9000/user",
    }).then((data) => {
      setUser(data.data);
    });
  };
  const showUserName = () => {
    if (checkSignIn === true) {
      axios({
        method: "get",
        url: `http://localhost:9000/user/${location.state.id}`,
      }).then((data) => {
        setlogn(data.data);
      });
    }
  };
  useEffect(() => {
    showProduct();
    showUser();
    showUserName();
  }, [checkSignIn]);
  let addcard = (obj) => {
    let data = addCard;
    let newData = data
      .map((e) => {
        if (e.id !== obj.id) {
          return e;
        } else {
          return e.count++;
        }
      })
      .filter((e) => isNaN(e));
    setAddCard([...newData, obj]);
  };
  const increment = (obj) => {
    addCard.map((e) => {
      if (e.id === obj.id) {
        e.count++;
      }
      return e;
    });
    setAddCard([...addCard]);
  };
  const decrement = (obj) => {
    addCard.map((e) => {
      if (e.id === obj.id) {
        if (e.count > 1) {
          e.count--;
        }
      }
      return e;
    });
    setAddCard([...addCard]);
  };
  const remove = (obj) => {
    let data = addCard;
    let newData = data
      .map((e) => {
        if (e.id === obj.id) {
          e.count = 1;
        }
        return e;
      })
      .filter((e) => e !== obj);
    setAddCard([...newData]);
  };
  const checkLogn = () => {
    setCheckSignIn(true);
  };
  const logout = () => {
    setlogn({ id: 0 });
    setCheckSignIn(false);
  };

  console.log(checkSignIn);
  console.log(logn);
  return (
    <div>
      <Store.Provider
        value={{
          proudect: product,
          card: addCard,
          add: addcard,
          addNew: increment,
          decrement,
          remove,
          user,
          checkSignIn,
          checkLogn,
          logn,
          logout,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<FormValidation />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/card" element={<Shopcard />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/AdminProduct" element={<AdminProduct />} />
          <Route path="/admin/User" element={<Users />} />
          <Route path="/admin/User/newuser" element={<NewUser />} />
          <Route path="/admin/User/:id" element={<UserVeiw />} />
          <Route path="/User/Edit/:ID" element={<UserEdit />} />
          <Route path="/admin/newproduct" element={<NewProduct />} />
          <Route path="/admin/AdminProduct/:id" element={<Veiw />} />
          <Route path="/admin/Edit/:ID" element={<Edit />} />
          <Route path="/:id" element={<Ditals />} />
        </Routes>
      </Store.Provider>
    </div>
  );
};

export default App;
