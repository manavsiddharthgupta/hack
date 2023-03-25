import React from "react";
import "./label_input.css";

const Label_Input = (props) => {
  return (
    <label className="label">
      {props.labelName}
      <input
        className={`all_input ${props.className}`}
        type={props.type}
        min={props.min}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        step={props.step}
        required
      />
    </label>
  );
};
export default Label_Input;
