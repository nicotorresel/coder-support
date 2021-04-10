import { createContext } from "react";
import Loki from "lokijs";

//export const db = new Loki('example.db');

//const DataBaseContext = createContext({db});

export const db = {
  error: "login",
  typeError: "usuario",
  quantity: 3,
};

const DataBaseContext = createContext(db);

export default DataBaseContext;
