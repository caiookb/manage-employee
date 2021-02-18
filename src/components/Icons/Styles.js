import styled, { css, keyframes } from "styled-components";
import { Colors } from "../../utils/Colors";

const iconSize = (size) =>
  size == "sm" ? "20px" : size == "md" ? "40px" : "60px";

export const StyledIcon = styled.div`
  height: ${(props) => iconSize(props.size)};
  width: ${(props) => iconSize(props.size)};
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    filter: brightness(0.7);
  }
`;
