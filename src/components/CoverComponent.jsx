import React, { useState } from "react";
import "./cover.css";
import Input from "../ui/Input";
import Label_Input from "../ui/Label_Input";
const CoverComponent = () => {
  const [selected, setSelected] = useState("yes");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };
  return (
    <div>
      <Label_Input labelName="Date Created :" type="date" />
      <div>
        <label className="lbl" htmlFor="currency">
          Credit Line Mode:
        </label>
        <select
          //   onChange={(e) => {
          //     cntx.onSetCurrency(e.target.value);
          //   }}
          //   value={cntx.changeCurrency}
          className="crncy_lable"
          name="currency"
          id="crc"
        >
          <option value="increase">Increase</option>
          <option value="decrease">Decrease</option>
        </select>
      </div>
      <Label_Input
        labelName="Version Number :"
        type="number"
        className="cover_verNum"
        defaultValue="1"
        min="0"
      />
      <Label_Input labelName="Model Group :" type="date" />
      <label className="lbl cover_lbl">
        Is document reviewed :
        <input
          type="radio"
          id="yes"
          name="choose"
          value="yes"
          checked={selected === "yes"}
          onChange={handleChange}
        />
        <label htmlFor="yes">Yes</label>
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
        <Label_Input labelName="Last Review Date :" type="date" />
      )}
      {selected === "yes" && (
        <Label_Input labelName="Review Name :" type="text" />
      )}

      <div className="cover_date cover_lbl">
        <h3>Developer Name:</h3>
        <Input
          //   onChange={cntx.onAddInvdueDate}
          //   value={cntx.invHeadData.dueDate}
          type="text"
        />
      </div>
    </div>
  );
};
export default CoverComponent;
