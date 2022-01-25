import React from "react";
import PollOption from "../components/PollOption";
import { DashboardRequest } from "../redux/action/index";
const DashPoll = ({ data }) => {
  console.log(data, "apple");

  return (
    <div>
      <div className="table-responsive">
        <h3>{data?.title}</h3>
        {data.options?.map((option, index) => {
          return (
            <div key={index}>
              <PollOption options={option} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DashPoll;
