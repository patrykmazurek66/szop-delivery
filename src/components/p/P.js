import styled, { css } from "styled-components";

const P = styled.p`
  color: var(--main900);
  margin: 0;
  text-transform: capitalize;

  ${props =>
    props.header &&
    css`
      font-size: 48px;
      font-weight: 700;
      text-align: center;
    `}

  ${props =>
    props.column &&
    css`
      flex-dorection: column;
    `}
`;
export default P;
