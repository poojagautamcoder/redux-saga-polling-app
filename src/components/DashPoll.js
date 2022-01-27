import React from "react";
import PollOption from "../components/PollOption";
const DashPoll = ({ data }) => {
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
