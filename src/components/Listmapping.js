import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListRequest } from "../redux/action/index";
import MyOwnComponent from "../components/MyOwnComponents"

const Listmapping = () => {
  const { data } = useSelector((state) => state.ListReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ListRequest());
  }, []);
  console.log(data,'asdfghjkl')
  return (
    <div>
      {data?.map((curElem, index) => {
        return (
          <div key={curElem._id}>
            <MyOwnComponent data={curElem} />
          </div>
        );
      })}
    </div>
  );
};
export default Listmapping;
