import React from "react";
import { StyledIcon, StyledIconSection, StyledText } from "./Styles";
import { Icons } from "../../assets/icons/icons";
import { Text } from "../";

const Icon = ({ size, icon, onClick, title, fontSize }) => (
  <StyledIconSection onClick={onClick}>
    <StyledIcon size={size} icon={Icons[icon]} title={title} />
    {title ? <Text fontSize={fontSize} text={title} /> : null}
  </StyledIconSection>
);

export default Icon;

Icon.defaultProps = {
  onClick: () => null,
  size: 20,
  title: "",
  fontSize: "sm",
  text: null,
};
