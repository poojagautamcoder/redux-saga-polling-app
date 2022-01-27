import React, { useEffect, useState } from "react";
import PollOption from "../components/PollOption";
const DashPoll = ({ list }) => {
  return (
    <div>
      <div className="table-responsive">
        <h3>{list?.title}</h3>
        {list.options?.map((option, index) => {
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
