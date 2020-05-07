import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Inicio from "../screens/Inicio"
import TP0 from "../screens/TP0";
import TP1 from "../screens/TP1";


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Inicio} />
      <Route path="/TP0" component={TP0} />
      <Route path="/TP1" component={TP1} />
      <Route path="/inicio" component={Inicio} isPrivate />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Inicio} />
    </Switch>
  );
}