import React from "react";
const PollOption = ({ options }) => {
  console.log(options, "optiondata");
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
