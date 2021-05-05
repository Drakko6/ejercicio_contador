import { CounterContainer, Label, Number } from "./Styles";

const CounterBox = ({ text, number }) => {
  return (
    <CounterContainer>
      <Number>{number}</Number>
      <Label>{text}</Label>
    </CounterContainer>
  );
};

export default CounterBox;
