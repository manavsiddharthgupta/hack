import React from "react";
import styled from "styled-components";

const InputInnContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  background-color: #f2f2f3;
  margin: 10px 10px;
  height: auto;
  width: 900px;
  align-items: left;
`;
const Input1 = styled.textarea`
  padding: 15px;
  margin: 10px 0px;
  width: 300px;
  overflowwrap: break-word;
`;
const Input2 = styled.textarea`
  padding: 10px;
  height: 180px;
  width: 850px;
`;

const InputContainer = (props) => {
  return (
    <InputInnContainer>
      <Input1
        placeholder="Enter title"
        id="title"
        onChange={(e) => {
          props.titlefun(e, props.index);
          console.log(e.target.value);
        }}
      />
      <Input2
        placeholder="Enter description"
        id="desc"
        onChange={(e) => {
          props.descfunc(e, props.index);
          console.log(e.target.value);
        }}
      />
      {/* <Button onChange={handleSave}>
  Save
  </Button> */}
    </InputInnContainer>
  );
};

export default InputContainer;
