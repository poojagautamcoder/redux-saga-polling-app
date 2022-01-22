import React from "react";
import { Route, Navigate } from "react-router-dom";
import LogIn from "./screens/login/LogIn";
const PrivateRouting = ({ children, path, ...rest }) => {
  const auth = localStorage.getItem("token") ? true : false
  return (
    <Route
      {...rest}
      render={() => (auth ? children : <Redirect to="/LogIn" />)}
    />
  );

 
};

export default PrivateRouting;