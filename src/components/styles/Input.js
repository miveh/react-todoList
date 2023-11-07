import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  type: props.$type,
  $size: props.$size || "1em",
}))`
  border: 2px solid #a14fbf;
  outline: none;
  padding: 1rem;
  border-radius: 5px;
  width: 300px;
  font-size: 1.5rem;
  cursor: ${(props) => props.$cursor || "text"};
`;

export default Input