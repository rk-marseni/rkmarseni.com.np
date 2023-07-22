import React, { Fragment } from "react";
import MainNavigation from "./MainNavigation";
function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main className="font-Lato">{props.children}</main>
    </Fragment>
  );
}

export default Layout;
