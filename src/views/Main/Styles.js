import { getByDisplayValue } from "@testing-library/react";
import { isArray } from "lodash";
import styled from "styled-components";

export const StyledContainer = styled.div`
  display: grid;
  place-items: center;
  width: 100wh;
  height: 100vh;
`;

export const StyledMain = styled.div`
  width: 1000px;
  height: 80%;
  padding: 10px;
`;
