import React from "react";
import { StyledText } from "./Styles";

const Text = (props) => (
  <StyledText data-testid="text" {...props}>
    {props.text}
  </StyledText>
);

export default Text;
