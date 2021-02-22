import styled, { css, keyframes } from "styled-components";
import { Colors } from "../../utils/Colors";

const spin = keyframes`
  0% {
    width: 0%;
    opacity: 0;

  }
  100% {
    width: 100%;
    opacity: 1;

  }
`;

const fade = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1
  }
`;

export const StyledPrevious = styled.div`
  margin: 20px auto;
  width: 95%;
  animation: ${fade} 1s linear forwards;
`;

export const StyledLine = styled.div`
  width: 100%;
  margin-top: 20px;
  border-bottom: 3px solid ${Colors.green};
  animation: ${spin} 3 linear forwards;
`;
