import React from "react";

const Classes = (props) => {
  return (
    <div className="class-card">
      <h2>{props.data.name}</h2>
      <div>
        <p>Time: {props.data.time}</p>
      </div>
      <div>
        <p>Class Description: {props.data.description}</p>
      </div>
      <div>
        <p>Location: {props.data.address}</p>
      </div>
      <div>
        <p>Class starting: {props.data.startDate}</p>
      </div>
    </div>
  );
};
export default Classes;