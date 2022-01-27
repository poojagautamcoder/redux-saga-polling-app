import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditpollRequest, AddoptionRequest } from "../redux/action/index";
import { useParams } from "react-router-dom";
import EditOption from "../components/EditOption";
const EditPoll = () => {
  const { id } = useParams();
  const { data } = useSelector((state) => state.EditpollReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(EditpollRequest({ id }));
  }, []);

  const addopt = (id, optionText) => {
    dispatch(AddoptionRequest({ id: id, optionText: optionText }));
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
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
        <button type="button" className="btn btn-outline-dark"  onClick={() => addopt(id, options?.option)}>
          Add
        </button>
      </div>
    </div>
  );
};

export default EditPoll;
