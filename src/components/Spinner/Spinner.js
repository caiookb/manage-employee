import React from "react";
import styled, { keyframes } from "styled-components";
import { Colors } from "../../utils/Colors";

const Spinner = () => <StyledSpinner data-testid="spinner"></StyledSpinner>;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  display: inline-block;
  width: fit-content;
  height: fit-content;
  margin: 100px auto;

  &:after {
    content: "  ";
    display: block;
    width: 72px;
    height: 72px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #000;
    border-color: ${Colors.frontend} ${Colors.frontend} ${Colors.frontend}
      transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;

export default Spinner;
