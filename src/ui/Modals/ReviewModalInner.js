import "./ReviewModalInner.css";
import React from "react";
import LineChart from "../LineChart";

const ReviewModalInner = (props) => {
  console.log(props.mainData);
  return (
    <div id={props.id} className="ReviewModal_inner">
      <div>
        <div>Model risk management document</div>
        <div>
          Credit line {props.mainData.creditLineData.mode} model : Version{" "}
          {props.mainData.creditLineData.version}
        </div>
        <div>Model group: {props.mainData.modalGrp}</div>
        <div>
          <p>date created: {props.mainData.createDate}</p>
        </div>
        <div>
          <p>Developer: {props.mainData.developerName}</p>
        </div>
        {props.mainData.selected === "yes" && (
          <div>
            <div>Reviewer: {props.mainData.reviewStatus.name}</div>
            <div>last review date: {props.mainData.reviewStatus.date}</div>
          </div>
        )}
      </div>
      <div>
        {/* {props.mainData.modalSpecificData.map((each) => {
          return <div>{each.title}</div>
          <div>{each.desc}</div>
        })} */}
      </div>
      <LineChart srdata={props.exceldata.utilization} labelName="Utilization" />
    </div>
  );
};

export default ReviewModalInner;
