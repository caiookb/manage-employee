import React from "react";
import { StyledText } from "./Styles";

const Text = (props) => <StyledText {...props}>{props.text}</StyledText>;

export default Text;
