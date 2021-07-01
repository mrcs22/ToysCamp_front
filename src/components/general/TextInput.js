import styled from "styled-components";

const TextInput = styled.input`
  height: 58px;
  width: 100%;

  font-size: 15px;

  background-color: #dbe6fd;

  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: ${({ isValueValid, isInputFilled }) =>
    isInputFilled
      ? isValueValid
        ? "2px solid green"
        : "2px solid red"
      : "none"};
  outline: none;

  margin-bottom: 13px;

  padding: 0 15px;

  &::placeholder {
    color: #000;
  }
`;

export default TextInput;
