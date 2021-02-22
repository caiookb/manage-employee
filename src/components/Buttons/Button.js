import React from "react";
import { Colors } from "../../utils/Colors";
import { Icon } from "../";
import { StyledButton, StyledIconButton } from "./Styles";

const Button = (props) => {
  const { size, color, icon, title, onClick, type } = props;

  return (
    <StyledButton
      size={size}
      type={type}
      color={Colors[color]}
      onClick={onClick}
    >
      {icon ? (
        <StyledIconButton>
          <Icon size={"sm"} icon={icon} />
        </StyledIconButton>
      ) : null}
      {title}
    </StyledButton>
  );
};

export default Button;
