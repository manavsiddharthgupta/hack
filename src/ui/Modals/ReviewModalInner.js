import "./ReviewModalInner.css";
import React from "react";
import LineChart from "../LineChart";

const ReviewModalInner = (props) => {
  console.log(props.mainData);
  return (
    <div id={props.id} className="ReviewModal_inner">
      <LineChart srdata={props.exceldata.utilization} labelName="Utilization" />
    </div>
  );
};

export default ReviewModalInner;
