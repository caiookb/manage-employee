import React from "react";
import { Colors } from "../../utils/Colors";
import { Icon } from "../";
import { StyledInput, StyledInputDiv } from "./Styles";

const TextInput = (props) => {
  const { size, color, icon, placeholder, onChange } = props;

  return (
    <StyledInputDiv>
      <Icon icon={icon} size={"md"} />

      <StyledInput
        onChange={(e) => onChange(e.target.value)}
        size={size}
        color={Colors[color]}
        placeholder={placeholder}
        icon={icon}
      />
    </StyledInputDiv>
  );
};

export default TextInput;

TextInput.defaultProps = {
  onChange: () => null,
};
