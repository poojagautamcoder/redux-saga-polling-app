import React from "react";
const MyOwnComponents = ({ data }) => {
  console.log(data, "abcd");
  return (
    <>
      <td className="align-top"> {data?.username}</td>
      <td className="align-top">{data?.password}</td>
      <td className="align-top">{data?.role}</td>
    </>
  );
};

export default MyOwnComponents;
