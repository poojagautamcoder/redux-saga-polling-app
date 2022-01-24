import logo from "./logo.svg";
import React from "react";
import "./App.css";
import LogIn from "./screens/login/LogIn";
import DashBoard from "./screens/dashboard/DashBoard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./screens/signUp/SignUp";
import UserList from "./screens/list/UserList";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<LogIn />}></Route>
          <Route exact path="/dashBoard" element={<DashBoard />}></Route>
          <Route exact path="/signUp" element={<SignUp />}></Route>
          <Route exact path="/userList" element={<UserList />}></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
