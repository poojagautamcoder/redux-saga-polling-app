import React from "react";
const MyOwnComponents = ({curElem}) => {
  return (
    <div>
      <tbody>
        <tr>
          <td className="align-top"> {curElem?.username}</td>
          <td className="align-top">{curElem?.password}</td>
          <td className="align-top">{curElem?.role}</td>
        </tr>
      </tbody>
    </div>
  );
};

export default MyOwnComponents;
