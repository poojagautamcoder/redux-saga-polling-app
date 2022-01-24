import React from "react";
const PollOption = () => {
  return (
    <div>
      <div class="form-check">
        <input type="radio" />
        <label className="poll-option">options</label>
        <div className="pollsbtn">
          <button type="button" className="btn btn-danger">
            Delete
          </button>

          <button type="button" className="btn btn-info edit">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};
export default PollOption;
