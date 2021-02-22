import styled from "styled-components";
import { Colors } from "../../utils/Colors";

export const StyledSelect = styled.select`
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  background-color: ${Colors.gray};
  color: ${Colors.grayText};

  border-radius: 5px;
  margin: 10px;
  height: 55px;
  font-size: 18px;
`;

export const StyledOption = styled.option`
  color: ${Colors.grayText};
`;
