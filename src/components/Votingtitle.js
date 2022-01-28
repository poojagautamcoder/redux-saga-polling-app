import React, { useState } from "react";
import { VoteRequest } from "../redux/action/index";
import { useDispatch } from "react-redux";
import Votingoption from "./Votingoption";
const Votingtitle = ({ data }) => {
  const [payload, setPayload] = useState({
    id: "",
    option: "",
  });
  const dispatch = useDispatch();
  const handleVote = (option) => {
    console.log(option, data._id);
    setPayload({ ...payload, id: data._id, option: option });
  };

  const handleDispatch = () => {
    dispatch(VoteRequest({ id: payload.id, option: payload.option }));
  };

  return (
    <div>
      <div className="table-responsive voting">
        <h3>{data?.title}</h3>
        {data.options?.map((option, index) => {
          return (
            <div key={index}>
              <Votingoption options={option} handleVote={handleVote} />
            </div>
          );
        })}
        <button
          className="btn btn-warning btnn-lg btnn-block"
          onClick={handleDispatch}
        >
          Vote
        </button>
      </div>
    </div>
  );
};
export default Votingtitle;
