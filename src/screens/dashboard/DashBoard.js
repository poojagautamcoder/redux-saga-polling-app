import React from "react";
const DashBoard = () => {
  return (
    <div className="poll-details">
      <div className="table-responsive polldata">
        <h3>Title</h3>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <h5>options</h5>
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
    </div>
  );
};

export default DashBoard;
