import React from "react";

const Votingoption = ({ options, handleVote }) => {
  return (
    <div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          onClick={() => handleVote(options?.option)}
        />
        <label className="poll-option">{options?.option}</label>
      </div>
    </div>
  );
};
export default Votingoption;
