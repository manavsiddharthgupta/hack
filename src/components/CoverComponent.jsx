import React, { useState, useEffect } from "react";
import "./cover.css";
// import Input from "../ui/Input";
import LabelInput from "../ui/LabelInput";
const CoverComponent = (props) => {
  // const [creditLineMode, setCreditMode] = useState({
  //   mode: "increase",
  //   version: 1,
  // });
  // const [selected, setSelected] = useState("yes");
  // const [modelGroup, setModalGroup] = useState("");
  // const [developerName, setDeveloperName] = useState("");
  // const [reviewData, setReviewData] = useState({
  //   date: "",
  //   name: "",
  // });
  // const [createdDate, setCreatedDate] = useState("");

  console.log(
    props.creditLineMode,
    props.modelGroup,
    props.developerName,
    props.reviewData,
    props.createdDate
  );

  const handleChange = (event) => {
    console.log(event.target.value);
    props.setSelected(event.target.value);
  };

  useEffect(() => {
    if (props.selected === "no") {
      props.setReviewData((state) => {
        return {
          date: "",
          name: "",
        };
      });
    }
  }, [props.selected]);
  return (
    <div>
      <LabelInput
        labelName="Date Created :"
        type="date"
        value={props.createdDate}
        onChange={(e) => {
          props.setCreatedDate(e.target.value);
        }}
      />
      <div>
        <label className="lbl" htmlFor="currency">
          Credit Line Mode:
        </label>
        <select
          onChange={(e) => {
            props.setCreditMode((state) => {
              return {
                mode: e.target.value,
                version: state.version,
              };
            });
          }}
          //   value={cntx.changeCurrency}
          className="crncy_lable"
          name="currency"
          id="crc"
        >
          <option value="increase">Increase</option>
          <option value="decrease">Decrease</option>
        </select>
      </div>
      <LabelInput
        labelName="Version Number :"
        type="number"
        className="cover_verNum"
        // defaultValue="1"
        min="0"
        value={props.creditLineMode.version}
        onChange={(e) => {
          props.setCreditMode((state) => {
            return {
              mode: state.mode,
              version: e.target.value,
            };
          });
        }}
      />
      <LabelInput
        labelName="Model Group :"
        type="text"
        onChange={(e) => {
          props.setModalGroup(e.target.value);
        }}
        value={props.modelGroup}
      />
      <label className="lbl cover_lbl">
        Is Document Reviewed :
        <input
          type="radio"
          id="yes"
          name="choose"
          value="yes"
          checked={props.selected === "yes"}
          onChange={handleChange}
        />
        <label className="inner_label" htmlFor="yes">
          Yes
        </label>
        <input
          type="radio"
          id="no"
          name="choose"
          value="no"
          onChange={handleChange}
          checked={props.selected === "no"}
        />
        <label htmlFor="no">No</label>
      </label>
      {props.selected === "yes" && (
        <LabelInput
          onChange={(e) => {
            props.setReviewData((state) => {
              return {
                ...state,
                date: e.target.value,
              };
            });
          }}
          labelName="Last Review Date :"
          type="date"
        />
      )}
      {props.selected === "yes" && (
        <LabelInput
          value={props.reviewData.name}
          onChange={(e) => {
            props.setReviewData((state) => {
              return {
                ...state,
                name: e.target.value,
              };
            });
          }}
          labelName="Reviewer Name :"
          type="text"
        />
      )}
      <LabelInput
        labelName="Model Developer Name :"
        type="text"
        value={props.developerName}
        onChange={(e) => {
          props.setDeveloperName(e.target.value);
        }}
      />
    </div>
  );
};
export default CoverComponent;
