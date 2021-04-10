import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import PageHome from "./pages/page-home";
import DataBaseContext, { db } from "./application/database-provider";

const App = () => {
  return (
    <ChakraProvider>
      <DataBaseContext.Provider value={db}>
        <BrowserRouter>
          <Switch>
            <Route component={PageHome} path="/" />
          </Switch>
        </BrowserRouter>
      </DataBaseContext.Provider>
    </ChakraProvider>
  );
};

export default App;
