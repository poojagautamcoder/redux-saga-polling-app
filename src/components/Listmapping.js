import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListRequest } from "../redux/action/index";
import UserList from "../screens/list/UserList";
const Listmapping = () => {
  const data = useSelector((state) => state.ListReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ListRequest());
  }, []);
  return (
    <div>
      {data &&
        data.length &&
        data?.map((curElem, index) => {
          return (
            <UserList
              key={curElem.id}
              username={curElem.username}
              password={curElem.password}
              role={curElem.role}
            />
          );
        })}
    </div>
  );
};
export default App;
