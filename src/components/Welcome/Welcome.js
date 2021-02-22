import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Text, TextInput, Spinner } from "..";
import { StyledForm } from "../CustomModal/AddOrEditEmployeeModal/Styles";
import { StyledError, StyledMessage, StyledIFrame } from "./Styles";
import { useForm } from "react-hook-form";
import * as EmployeesController from "../../controller/EmployeesController";

const Welcome = (props) => {
  const { register, handleSubmit } = useForm();
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false);

  const { saveToken } = props;

  const onSubmit = (data) => {
    const token = data.token;
    localStorage.setItem("token", JSON.stringify(data.token));
    setFetching(true);
    saveToken(token)
      .then(() => {
        setFetching(false);
      })
      .catch(() => {
        setFetching(false);
        setError(
          "Token does not works :( \nPlease try again with another one!"
        );
      });
  };

  return (
    <StyledError data-testid="welcome">
      <StyledMessage>
        <Text fontSize={38} bold text={"Welcome to Employees Frontend"} />
        <Text
          fontSize={22}
          text={`Set an API Token by getting it on the frame or link down bellow :)`}
        />
        <StyledIFrame src={"https://www.crudcrud.com"} />
        <a href={"http://www.crudcrud.com"}>www.crudcrud.com</a>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            name={"token"}
            label={"API Token *"}
            register={register({ required: true })}
          />
          {fetching ? null : (
            <Button title={"Add Token"} color={"green"} type={"submit"} />
          )}
        </StyledForm>
        {fetching ? <Spinner /> : null}
        {error ? (
          <Text
            fontSize={18}
            bold
            text={"Token does not works, please try again with another one"}
          />
        ) : null}
      </StyledMessage>
    </StyledError>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveToken: (token) => dispatch(EmployeesController.saveTokenOnRedux(token)),
  };
};

export default connect(null, mapDispatchToProps)(Welcome);
