import React from "react";
import Navbar from "../../components/Navbar";
import List from "../../components/Navbar";

const UserList = (props) => {
  return (
    <div>
      <Navbar />
      <div className="table-responsive  ">
        <h3>Userlist</h3>
        <table className="table align-middle">
          <thead>
            <tr className="align-bottom">
              <th>Username</th>
              <th>Password</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="align-top"> {props.username}</td>
              <td className="align-top">{props.password}</td>
              <td className="align-top">{props.role}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default UserList;
