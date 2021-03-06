import logo from "./logo.svg";
import React from "react";
import "./App.css";
import LogIn from "./screens/login/LogIn";
import DashBoard from "./screens/dashboard/DashBoard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./screens/signUp/SignUp";
import UserList from "./screens/list/UserList";
import Navbar from "./components/Navbar";
import EditPoll from "./screens/EditPoll";
import Addpoll from "./screens/Addpoll";
import Pollpage from "./screens/Pollpage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LogIn />}></Route>
          <Route exact path="/dash-board" element={<DashBoard />}></Route>
          <Route exact path="/sign-up" element={<SignUp />}></Route>
          <Route exact path="/user-list" element={<UserList />}></Route>
          <Route exact path="/edit-poll/:id" element={<EditPoll />}></Route>
          <Route exact path="/add-poll" element={<Addpoll/>}></Route>
          <Route exact path="/poll-page" element={<Pollpage/>}></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
