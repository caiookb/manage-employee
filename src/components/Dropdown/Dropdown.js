import React from "react";
import {
  StyledPlaceholder,
  StyledInputDiv,
  StyledTextInput,
  StyledError,
} from "../TextInput/Styles";
import { StyledSelect, StyledOption } from "./Styles";

const Dropdown = (props) => {
  const {
    name,
    register,
    label,
    onChange,
    children,
    errors,
    defaultValue,
  } = props;

  const options = React.Children.toArray(children);

  return (
    <StyledTextInput data-testid="dropdown">
      {label ? <StyledPlaceholder>{label}</StyledPlaceholder> : null}
      <StyledSelect
        defaultValue={defaultValue}
        name={name}
        ref={register}
        onChange={onChange}
      >
        {options.map((option) => option)}
      </StyledSelect>
      <StyledError>
        {errors?.[name] && <span>{label} is required</span>}
      </StyledError>
    </StyledTextInput>
  );
};

export default Dropdown;

Dropdown.defaultProps = {
  defaultValue: undefined,
};
