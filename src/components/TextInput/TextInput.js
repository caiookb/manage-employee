import React from "react";
import { Colors } from "../../utils/Colors";
import { Icon } from "../";
import {
  StyledInput,
  StyledInputDiv,
  StyledPlaceholder,
  StyledTextInput,
  StyledError,
} from "./Styles";

const TextInput = (props) => {
  const {
    size,
    color,
    icon,
    placeholder,
    onChange,
    defaultValue,
    name,
    label,
    register,
    type,
    value,
    errors,
  } = props;

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
          name={name}
          ref={register}
          defaultValue={defaultValue}
        />
        {icon ? <Icon icon={icon} size={"sm"} /> : null}
      </StyledInputDiv>
      {errors ? (
        <StyledError>
          {errors?.[name] && (
            <span>
              <i>{label.replace("*", " ")} is required</i>
            </span>
          )}
        </StyledError>
      ) : null}
    </StyledTextInput>
  );
};

export default TextInput;

TextInput.defaultProps = {
  onChange: () => null,
  defaultValue: null,
};
