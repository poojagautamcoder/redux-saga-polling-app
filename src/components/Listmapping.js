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
      {data?.map((curElem, index) => {
        return (
          <div key={curElem.id}>
            <MyOwnComponent data={curElem} />
          </div>
        );
      })}
    </div>
  );
};
export default App;
