import styled, { css } from "styled-components";

const Div = styled.div`
  color: var(--main900);
  padding: 1em;
  margin: 1em;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em 0.25em;

  ${props =>
    props.row &&
    css`
      flex-direction: row;
    `}

  ${props =>
    props.column &&
    css`
      flex-direction: column;
    `}

    ${props =>
    props.outline &&
    css`
      border: 1px solid var(--main900);
      background: var(--main50);
    `}

    ${props =>
    props.dark &&
    css`
      background: var(--main100);
    `}

    ${props =>
    props.nomp &&
    css`
      margin: 0;
      padding: 0;
    `}

    ${props =>
    props.large &&
    css`
      width: 80%;
    `}

    ${props =>
    props.medium &&
    css`
      width: 50%;
    `}

      ${props =>
    props.small &&
    css`
      width: 30%;
    `}

    ${props =>
    props.full &&
    css`
      width: 100%;
      height: 100%;
    `}
`;
export default Div;
