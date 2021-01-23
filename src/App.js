import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Layout } from "antd";
import PrivateRoute from "layout/PrivateRoute";
import PublicRoute from "layout/PublicRoute";
import "./App.less";
import { Page404, Navbar } from "components";
import withSizes from "react-sizes";
import { mobileSize, ROUTES } from "utils";
import styled from "styled-components";

const { Content } = Layout;
const mapSizesToProps = ({ width }) => ({
  isMobile: width < mobileSize,
});

const App = ({ isMobile }) => (
  <>
    <Navbar isMobile={isMobile} />
    <Container>
      <Switch>
        {ROUTES.map(({ path, isProtected, component }, i) =>
          isProtected ? (
            <PrivateRoute key={i} exact path={path} component={React.lazy(() => import(`pages/${component}`))} />
          ) : (
            <PublicRoute key={i} exact path={path} component={React.lazy(() => import(`pages/${component}`))} />
          )
        )}
        <Route component={Page404} />
      </Switch>
    </Container>
  </>
);
export default withSizes(mapSizesToProps)(App);

let Container = styled(Content)`
  padding: 0 50px;
  @media (max-width: ${mobileSize}px) {
    padding: 10px;
  }
`;

// const Calendar = React.lazy(() => {
//   return new Promise((resolve) => setTimeout(resolve, 5 * 1000)).then(() =>
//     Math.floor(Math.random() * 10) >= 4 ? import("pages/Home") : Promise.reject(new Error())
//   );
// });
