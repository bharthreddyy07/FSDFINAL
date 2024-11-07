import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
      <>
      <Home />
      <Outlet />
      <Course />
      </>
    )
  }
  export default Layout;