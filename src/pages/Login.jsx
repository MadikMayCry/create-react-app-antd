import React, { useState } from "react";
import { fakeAuthCentralState } from "components";
import { Redirect } from "react-router-dom";
import { Button } from "antd";

function Login(props) {
  const [redirect, setRedirect] = useState(false);
  const login = () => {
    fakeAuthCentralState.authenticate(() => {
      setRedirect(true);
    });
  };

  const { from } = props.location.state || { from: { pathname: "/" } };

  if (redirect === true) {
    // props.history.push(from.pathname);
    return <Redirect to={from.pathname} />;
  }
  return (
    <div>
      <Button onClick={login}>Login</Button>
    </div>
  );
}

export default Login;
