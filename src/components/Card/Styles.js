import styled, { css, keyframes } from "styled-components";
import { Colors } from "../../utils/Colors";

const getIconBackground = (icon) =>
  ({
    Frontend: Colors.frontend,
    Backend: Colors.backend,
    Mobile: Colors.mobile,
    "No team": Colors.gray,
  }[icon]);

export const StyledCard = styled.div`
  width: 450px;
  height: 100px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 25px;
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
  align-items: flex-start;
  flex-grow: 1;
  margin-right: 10px;
  justify-content: space-between;
`;

export const StyledText = styled.p`
  margin: 0;
  font-size: ${(props) => props.size}px;
  font-style: ${(props) => props.styling};
  color: ${Colors.grayText};
  font-weight: 300;
  display: flex;

  ${(props) =>
    props.icon &&
    css`
      margin-top: 5px;
    `}
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
