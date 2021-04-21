import { createContext } from "react";
import Loki from "lokijs";

export let db = new Loki("coder.db");

//Adding collections to the database
let error_type = db.addCollection("error_type");
let error = db.addCollection("error");

error_type.insert({
  date_created: "12-5-21",
  title: "cambio de camada",
  description: "no puedo cambiar de camada",
  posible_workarounds: [
    { date_created: "12-6-21", description: "desde el boton menu de los 3 puntitos...." },
  ],
});

const DataBaseContext = createContext(db);

export default DataBaseContext;
