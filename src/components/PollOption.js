import React from "react";
const PollOption = ({ options }) => {
  return (
    <div>
      <div class="form-check poldata">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <h6 className="poll-option">{options?.option}</h6>
        <h5 className="vote">{options?.vote}</h5>
      </div>
    </div>
  );
};
export default PollOption;
