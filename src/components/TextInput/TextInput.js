import React from "react";
import { Colors } from "../../utils/Colors";
import { Icon } from "../";
import {
  StyledInput,
  StyledInputDiv,
  StyledPlaceholder,
  StyledTextInput,
} from "./Styles";

const TextInput = (props) => {
  const { size, color, icon, placeholder, onChange, label, type } = props;

  return (
    <StyledTextInput>
      {label ? <StyledPlaceholder>{label}</StyledPlaceholder> : null}
      <StyledInputDiv>
        <StyledInput
          onChange={(e) => onChange(e.target.value)}
          size={size}
          color={Colors[color]}
          placeholder={placeholder}
          icon={icon}
          type={type}
        />
        {icon ? <Icon icon={icon} size={"sm"} /> : null}
      </StyledInputDiv>
    </StyledTextInput>
  );
};

export default TextInput;

TextInput.defaultProps = {
  onChange: () => null,
};
