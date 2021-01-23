import React from "react";
import { Route, Redirect } from "react-router-dom";
import { fakeAuthCentralState } from "components";

function PrivateRoute({ component: Component, isAuthenticated, ...props }) {
  if (fakeAuthCentralState.isAuthenticated === true) {
    return <Route {...props} render={(props) => <Component {...props} />} />;
  }
  return <Redirect to="login" />;
}

export default PrivateRoute;
