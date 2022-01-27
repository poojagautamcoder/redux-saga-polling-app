import React from "react";

const EditOption = ({ options }) => {
  return (
    <div class="form-check">
      <input type="radio" />
      <label className="poll-option">{options?.option}</label>

      <button type="button" className="btn btn-outline-danger deloption">
        Delete
      </button>
    </div>
  );
};
export default EditOption;
