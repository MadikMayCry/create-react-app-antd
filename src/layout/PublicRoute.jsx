import React from "react";
import { Route } from "react-router-dom";

function PublicRoute({ component: Component, ...props }) {
  return <Route {...props} render={(props) => <Component {...props} />} />;
}

export default PublicRoute;
