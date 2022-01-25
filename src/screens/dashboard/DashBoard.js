import React, { useEffect } from "react";
import DashPoll from "../../components/DashPoll";
import PollOption from "../../components/PollOption";
import { useDispatch, useSelector } from "react-redux";
import { DashboardRequest } from "../../redux/action/index";
const DashBoard = () => {
  const { data } = useSelector((state) => state.DashboardReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(DashboardRequest());
  }, []);

  return (
    <div className="poll-details ">
      {data &&
        data.length &&
        data?.map((curElem, index) => {
          return (
            <div key={curElem._id}>
              <DashPoll data={curElem} />
              <div className="pollsbtn">
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
                <button type="button" className="btn btn-info edit">
                  Edit
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default DashBoard;
