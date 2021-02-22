import styled, { css, keyframes } from "styled-components";
import { Colors } from "../../utils/Colors";

const textColor = (color) =>
  color == Colors.gray || !color ? Colors.grayText : Colors.primary;

const buttonWidth = (size) =>
  size == "sm" ? "150px" : size == "md" ? "300px" : "100%";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: ${(props) => buttonWidth(props.size)};
  background-color: ${(props) => props.color || Colors.gray};
  color: ${(props) => textColor(props.color)};
  height: 55px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in;
  font-weight: 300;

  &:hover {
    filter: brightness(1.1);
  }

  position: relative;
`;

export const StyledIconButton = styled.div`
  position: absolute;
  left: 15px;
`;
