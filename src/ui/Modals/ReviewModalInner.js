import "./ReviewModalInner.css";
import React from "react";

const ReviewModalInner = (props) => {
  console.log(props.mainData);
  return <div id={props.id} className="ReviewModal_inner"></div>;
};

export default ReviewModalInner;
