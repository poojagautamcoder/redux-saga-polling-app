import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { DelpoloptRequest } from "../redux/action/index";
const EditOption = ({ options }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const delOpt = (id, optionText) => {
    dispatch(DelpoloptRequest({ id: id, optionText: optionText }));
  };

  return (
    <div class="form-check">
      <input type="radio" />
      <label className="poll-option">{options?.option}</label>

      <button
        type="button"
        className="btn btn-outline-danger deloption"
        onClick={() => delOpt(id, options?.option)}
      >
        Delete
      </button>
    </div>
  );
};
export default EditOption;
