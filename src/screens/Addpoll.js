import React from "react";

const Addpoll = () => {
  return (
    <form className="Screen-page ">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Title
        </label>
        <input type="text" class="form-control" />
      </div>
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
         <span class="input-group-text" id="inputGroup-sizing-default">
          Option
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
         <span class="input-group-text" id="inputGroup-sizing-default">
          Option
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
         <span class="input-group-text" id="inputGroup-sizing-default">
          Option
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Add
      </button>
    </form>
  );
};
export default Addpoll;
