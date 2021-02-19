import React from "react";
import { Icon } from "..";
import {
  StyledAction,
  StyledCard,
  StyledImage,
  StyledInfo,
  StyledOptions,
  StyledTag,
  StyledText,
} from "./Styles";

const user = {
  name: "Caio Henrique Moraes Silva",
  email: "caiookb@gmail.com",
  team: "Backend",
  start_date: "12/2020",
};

const Card = (props) => {
  // const {
  //   employee: { name, email, team, start_date },
  // } = props;

  return (
    <StyledCard>
      <StyledTag team={user.team}>
        <Icon size={"md"} icon={user.team.toLowerCase()} />
      </StyledTag>

      <StyledInfo>
        <StyledText size={"22"}>{user.name}</StyledText>
        <StyledText size={"16"} styling={"italic"}>
          {user.team} since {user.start_date}
        </StyledText>

        <StyledAction>
          <StyledText size={"14"}>
            <Icon size={"sm"} icon={"email"} />
            {user.email}
          </StyledText>
          <StyledOptions>
            <Icon size={"sm"} icon={"edit"} />
            <Icon size={"sm"} icon={"trash"} />
          </StyledOptions>
        </StyledAction>
      </StyledInfo>
    </StyledCard>
  );
};

export default Card;
