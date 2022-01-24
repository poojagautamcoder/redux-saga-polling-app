import React from "react";
import DashPoll from "../../components/DashPoll";
import DashOption from "../../components/DashOption";
const DashBoard = () => {
  return (
    <div className="poll-details ">
      <DashPoll />
      <DashOption />
    </div>
  );
};

export default DashBoard;
