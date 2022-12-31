import { createContext } from "react";

const Store = createContext({
  proudect: [],
  card: [],
  add: () => {},
  addNew: () => {},
  decrement: () => {},
  remove: () => {},
  user: [],
  checkSignIn: false,
  checkLogn: () => {},
  logn: {},
  logout: () => {},
});
export default Store;
