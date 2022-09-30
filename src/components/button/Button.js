import styled, { css } from "styled-components";

const Button = styled.button`
  border: 1px solid var(--main900);
  background: var(--main50);
  color: var(--main900);
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: var(--main700);
      color: var(--main50);
    `}

  ${props =>
    props.category &&
    css`
      background: transparent;
      color: var(--main700);
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      border: none;
    `}

    ${props =>
    props.active &&
    css`
      font-weight: 700;
      font-size: 22px;
      text-decoration-line: underline;
    `}

  ${props =>
    props.small &&
    css`
  width:100px;
  height40px;
  padding: 8px 22px;
  font-size:15px;
`}
${props =>
    props.sort &&
    css`
  width:136px;
  height30px;
  font-size: 16px;
  font-weight:300;
  line-height:20px;  
  margin-left:50px;
  flex-shrink:0;
  `}

${props =>
    props.load &&
    css`
  width:80%;
  height50px;
  margin: 40px 10% 0 10%;
  font-size: 16px;
  font-weight:300;
  line-height:24px;  
  `}
`;
export default Button;
