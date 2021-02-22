import React from "react";
import { StyledIcon, StyledIconSection, StyledText } from "./Styles";
import { Icons } from "../../assets/icons/icons";
import { Text } from "../";

const Icon = ({ size, icon, onClick, title, fontSize, bold, styling }) => (
  <StyledIconSection onClick={onClick}>
    <StyledIcon size={size} icon={Icons[icon]} title={title} />
    {title ? (
      <Text fontSize={fontSize} text={title} bold={bold} styling={styling} />
    ) : null}
  </StyledIconSection>
);

export default Icon;

Icon.defaultProps = {
  onClick: () => null,
  size: "md",
  title: "",
  fontSize: "sm",
  text: null,
};
