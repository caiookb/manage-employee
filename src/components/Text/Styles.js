import styled, { css } from "styled-components";
import { Colors } from "../../utils/Colors";

export const StyledText = styled.p`
  font-size: ${(props) => props?.fontSize}px;
  font-weight: 300;
  margin: 0;
  color: ${Colors.grayText}
    ${(props) =>
      props.bold &&
      css`
        font-weight: bold;
      `}
    ${(props) =>
      props.styling &&
      css`
        font-style: ${props.styling};
      `};
`;
