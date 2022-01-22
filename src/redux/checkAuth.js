import React from "react";

const checkAuth = () => {
  const auth = localStorage.getItem("token") ? true : false;
  return auth;
};

export default checkAuth;
