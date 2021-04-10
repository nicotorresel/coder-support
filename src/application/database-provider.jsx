import { createContext } from "react";
import Loki from "lokijs";

export let db = new Loki("coder.db");

//Adding collections to the database
let error_type = db.addCollection("error_type");
let error = db.addCollection("error");

//const DataBaseContext = createContext({db});

// export const db = {
//   error: "login",
//   typeError: "usuario",
//   quantity: 3,
// };

const DataBaseContext = createContext(db);

export default DataBaseContext;
