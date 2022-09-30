import styled, { css } from "styled-components";

const TextInput = styled.input`
  border: 1px solid var(--main700);
  background: transparent;
  color: var(--main900);
  padding: 0.25em 1em;
  width: 100%;
  height: 30px;
  font-size: 16px;
  line-height: 24px;
  margin: 0 5%;

  ${props =>
    props.primary &&
    css`
      background: var(--main700);
      color: var(--main50);
    `}
`;
export default TextInput;
