import React from "react";
import { StyledIcon } from "./Styles";
import { Icons } from "../../assets/icons/icons";

const Icon = ({ size, icon, onClick }) =>
  icon ? (
    <StyledIcon size={size} icon={Icons[icon]} onClick={onClick}></StyledIcon>
  ) : null;

export default Icon;

Icon.defaultProps = {
  onClick: () => null,
};
