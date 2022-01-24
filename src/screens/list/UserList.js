import React from "react";
import MyOwnComponents from "../../components/MyOwnComponents";
import Navbar from "../../components/Navbar";

const UserList = () => {
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
          <MyOwnComponents/>
        </table>
      </div>
    </div>
  );
};
export default UserList;
