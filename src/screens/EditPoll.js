import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditpollRequest, AddoptionRequest } from "../redux/action/index";
import { useParams } from "react-router-dom";
import EditOption from "../components/EditOption";
import checkAuth from "../redux/checkAuth";
const EditPoll = () => {
  const { id } = useParams();
  const { data } = useSelector((state) => state.EditpollReducer);
  const dispatch = useDispatch();
  const [newOption, setNewOption] = useState("");

  useEffect(() => {
    dispatch(EditpollRequest({ id }));
  }, []);

  useEffect(() => {
    if (!checkAuth()) {
      navigate("/");
    }
  }, []);

  const addopt = (e) => {
    e.preventDefault();
    if (!newOption) {
      alert("please fill the data");
    } else {
      const myNewOption = {
        id: id,
        option: newOption,
      };
      dispatch(AddoptionRequest(myNewOption));
      setNewOption(...newOption, "");
    }
  };

  return (
    <div className="Screen-page  dashboard">
      <h3>{data?.title}</h3>
      {data.options?.map((option, index) => {
        return (
          <div key={index}>
            <EditOption options={option} />
          </div>
        );
      })}
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">
          Option
        </span>

        <input
          onChange={(e) => setNewOption(e.target.value)}
          value={newOption}
          type="text"
          class="form-control"
        />
        <button type="button" className="btn btn-outline-dark" onClick={addopt}>
          Add
        </button>
      </div>
    </div>
  );
};

export default EditPoll;
