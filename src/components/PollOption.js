import React from "react";
const PollOption = ({ options }) => {
  return (
    <div>
      <div class="form-check">
        <input type="radio" />
        <label className="poll-option">{options?.option}</label>
      </div>
    </div>
  );
};
export default PollOption;
