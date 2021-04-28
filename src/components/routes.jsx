import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PageHome from "../pages/page-home";
import ErrorPage from "../pages/error-page";
import TypeErrorPage from "../pages/type-error-page";

const Routes = () => {
  return (
    <Switch>
      <Route exact component={PageHome} path="/" />
      <Route component={ErrorPage} path="/Errores" />
      <Route component={TypeErrorPage} path="/TiposDeError" />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
