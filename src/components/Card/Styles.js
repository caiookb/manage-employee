import styled, { css, keyframes } from "styled-components";
import { Colors } from "../../utils/Colors";

const getIconBackground = (icon) =>
  ({
    Frontend: Colors.frontend,
    Backend: Colors.backend,
    Mobile: Colors.mobile,
  }[icon]);

export const StyledCard = styled.div`
  width: 450px;
  height: 100px;
  border-radius: 5px;
  -webkit-box-shadow: 4px 4px 5px 1px rgba(171, 171, 171, 1);
  -moz-box-shadow: 4px 4px 5px 1px rgba(171, 171, 171, 1);
  box-shadow: 4px 4px 5px 1px rgba(171, 171, 171, 1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledTag = styled.div`
  width: 70px;
  height: 70px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 5px;
  background-color: ${(props) => getIconBackground(props.team)};
  display: grid;
  place-items: center;
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  margin-right: 10px;
  flex-grow: 1;
`;

export const StyledText = styled.p`
  margin: 0;
  font-size: ${(props) => props.size}px;
  font-style: ${(props) => props.styling};
  color: ${Colors.grayText};
  font-weight: 300;
  display: flex;
`;

export const StyledAction = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const StyledOptions = styled.div`
  display: flex;
  width: 50px;
  justify-content: space-between;
`;
