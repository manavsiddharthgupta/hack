import styled from "styled-components";
import InputContainer from "./InputContainer";

const Button = styled.button`
  margin: 7px 0px;
  padding: 10px;
  width: 120px;
  border: 2px solid white;
  color: white;
  background-color: #424242;
  font-weight: bolder;
  transition: all 0.2s ease-in;
  // margin-top: 20px;

  &:hover {
    background-color: white;
    color: #424242;
    border: 2px solid #424242;
    cursor: pointer;
    transform: scale(1);
  }
`;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin: 10px 50px;
`;

const PublicComponents = (props) => {
  console.log(props.data);
  const onChangeTitleData = (e, index) => {
    const newData = [...props.data];
    const containerData = {
      ...props.data[index],
      title: e.target.value,
    };
    newData[index] = containerData;
    props.onsetData(() => {
      return newData;
    });
  };

  const onChangeDescData = (e, index) => {
    const newData = [...props.data];
    const containerData = {
      ...props.data[index],
      desc: e.target.value,
    };
    newData[index] = containerData;
    props.onsetData(() => {
      return newData;
    });
  };

  return (
    <Container>
      {props.data.map((each, ind) => {
        return (
          <InputContainer
            key={each.id}
            titlefun={onChangeTitleData}
            descfunc={onChangeDescData}
            index={ind}
            val={each}
          />
        );
      })}
      <Button
        type="button"
        onClick={() => {
          props.onsetData((state) => {
            const newData = [...state];
            let randomNum = Math.random();

            newData.push({
              title: "",
              desc: "",
              id: randomNum,
            });
            return newData;
          });
        }}
      >
        Add Item +
      </Button>
      {/* {  [...Array(count)].map((_, i) => <AddedElement key={i} />)} */}
    </Container>
  );
};

export default PublicComponents;
