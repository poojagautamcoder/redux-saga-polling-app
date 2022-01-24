import React, { useEffect } from "react";
import MyOwnComponents from "../../components/MyOwnComponents";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { ListRequest } from "../../redux/action/index";

const UserList = () => {
  const { data } = useSelector((state) => state.ListReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ListRequest());
  }, []);
  console.log(data, "asdfghjkl");
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
            {data &&
              data.length &&
              data?.map((curElem, index) => {
                return (
                  <tr key={curElem._id}>
                    <MyOwnComponents data={curElem} />
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default UserList;
