import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListRequest } from "../../redux/action/index";
import List from "../../components/Navbar";

const UserList = () => {
  const data = useSelector((state) => state.ListReducer.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ListRequest());
  }, []);
  return (
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
        {data &&
          data.length &&
          data?.map((curElem, index) => {
            return (
              <tbody key={curElem.id}>
                <tr>
                  <td className="align-top"> {curElem?.username}</td>
                  <td className="align-top">{curElem?.password}</td>
                  <td className="align-top">{curElem?.role}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};
export default UserList;
