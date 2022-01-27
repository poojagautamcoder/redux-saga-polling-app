import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddpollRequest } from "../redux/action/index";

const Addpoll = () => {
  const [inputdata, setInputData] = useState("");
  const [newOption, setnewOption] = useState({
    opt1: "",
    opt2: "",
    opt3: "",
    opt4: "",
  });
  // setOptions({...options, opt1: e.target.value})
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.isAddpoll;
  });
  const addpoll = (e) => {
    e.preventDefault();
    if (!inputdata) {
      alert("please fill the data");
    } else {
      const myNewPollData = {
        title: inputdata,
        option: newOption,
      };
      dispatch(AddpollRequest(myNewPollData));
      setInputData(...inputdata, "");
      setnewOption({ ...newOption, opt1: "", opt2: "", opt3: "", opt4: "" });
    }
  };
  return (
    <form className="Screen-page" onSubmit={addpoll}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Title
        </label>
        <input
          type="text"
          class="form-control"
          value={inputdata}
          onChange={(e) => setInputData(e.target.value)}
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">
          Option
        </span>
        <input
          type="text"
          class="form-control"
          onChange={(e) => setnewOption({ ...newOption, opt1: e.target.value })}
          value={newOption.opt1}
        />
        <span class="input-group-text" id="inputGroup-sizing-default">
          Option
        </span>
        <input
          type="text"
          class="form-control"
          onChange={(e) => setnewOption({ ...newOption, opt2: e.target.value })}
          value={newOption.opt2}
        />
        <span class="input-group-text" id="inputGroup-sizing-default">
          Option
        </span>
        <input
          type="text"
          class="form-control"
          onChange={(e) => setnewOption({ ...newOption, opt3: e.target.value })}
          value={newOption.opt3}
        />
        <span class="input-group-text" id="inputGroup-sizing-default">
          Option
        </span>
        <input
          type="text"
          class="form-control"
          onChange={(e) => setnewOption({ ...newOption, opt4: e.target.value })}
          value={newOption.opt4}
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Add
      </button>
    </form>
  );
};
export default Addpoll;
