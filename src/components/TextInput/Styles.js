import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Colors } from "../../utils/Colors";

export const StyledTextInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledInputDiv = styled.div`
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  background-color: ${Colors.gray};
  border-radius: 5px;
  margin: 10px;
`;

export const StyledError = styled.div`
  height: 25px;
  margin: 10px;
  margin-top: 0;
  color: ${Colors.red};
  font-size: 14px;
`;

export const StyledInput = styled.input`
  border: none;
  height: 55px;
  width: ${(props) => (props.icon ? "96%" : "100%")};
  border-radius: 5px;
  background-color: ${Colors.gray};
  color: ${Colors.grayText};
  font-size: 22px;
`;

export const StyledPlaceholder = styled.label`
  display: flex;
  margin: 10px;
  color: ${Colors.grayText};
  font-size: 22px;
`;
