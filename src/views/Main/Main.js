import React from "react";
import { Button, Grid, TextInput } from "../../components";
import { StyledMain, StyledContainer } from "./Styles";

const Main = (props) => {
  return (
    <StyledContainer>
      <StyledMain>
        <Grid columns={[2]} display={[1.75, 1]}>
          <TextInput
            icon={"search"}
            placeholder={"Search by name or team... "}
          />
          <Button title={"Add new employee"} color={"green"} icon={"plus"} />
        </Grid>
        
      </StyledMain>
    </StyledContainer>
  );
};

export default Main;
