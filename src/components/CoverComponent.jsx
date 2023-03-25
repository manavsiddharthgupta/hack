import React, { useState, useEffect } from "react";
import "./cover.css";
// import Input from "../ui/Input";
import LabelInput from "../ui/LabelInput";
const CoverComponent = () => {
  const [creditLineMode, setCreditMode] = useState({
    mode: "increase",
    version: 1,
  });
  const [selected, setSelected] = useState("yes");
  const [modelGroup, setModalGroup] = useState("");
  const [developerName, setDeveloperName] = useState("");
  const [reviewData, setReviewData] = useState({
    date: "",
    name: "",
  });
  const [createdDate, setCreatedDate] = useState("");

  console.log(
    creditLineMode,
    modelGroup,
    developerName,
    reviewData,
    createdDate
  );
  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  useEffect(() => {
    if (selected === "no") {
      setReviewData((state) => {
        return {
          date: "",
          name: "",
        };
      });
    }
  }, [selected]);
  return (
    <div>
      <LabelInput
        labelName="Date Created :"
        type="date"
        value={createdDate}
        onChange={(e) => {
          setCreatedDate(e.target.value);
        }}
      />
      <div>
        <label className="lbl" htmlFor="currency">
          Credit Line Mode:
        </label>
        <select
          onChange={(e) => {
            setCreditMode((state) => {
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
        value={creditLineMode.version}
        onChange={(e) => {
          setCreditMode((state) => {
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
          setModalGroup(e.target.value);
        }}
        value={modelGroup}
      />
      <label className="lbl cover_lbl">
        Is Document Reviewed :
        <input
          type="radio"
          id="yes"
          name="choose"
          value="yes"
          checked={selected === "yes"}
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
          checked={selected === "no"}
        />
        <label htmlFor="no">No</label>
      </label>
      {selected === "yes" && (
        <LabelInput
          onChange={(e) => {
            setReviewData((state) => {
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
      {selected === "yes" && (
        <LabelInput
          value={reviewData.name}
          onChange={(e) => {
            setReviewData((state) => {
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
        value={developerName}
        onChange={(e) => {
          setDeveloperName(e.target.value);
        }}
      />
    </div>
  );
};
export default CoverComponent;
