import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Text, TextInput } from "..";
import { StyledForm } from "../CustomModal/AddOrEditEmployeeModal/Styles";
import { StyledError, StyledMessage } from "./Styles";
import { useForm } from "react-hook-form";
import * as EmployeesController from "../../controller/EmployeesController";
import Spinner from "../Spinner/Spinner";

const Welcome = (props) => {
  const { register, handleSubmit } = useForm();
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false);

  const { saveToken } = props;

  const onSubmit = (data) => {
    console.log(data.token);
    const token = data.token;
    localStorage.setItem("token", JSON.stringify(data.token));
    setFetching(true);
    saveToken(token)
      .then((res) => {
        setFetching(false);
      })
      .catch((err) => {
        setFetching(false);
        setError(
          "Token does not works :( \nPlease try again with another one!"
        );
      });
  };

  return (
    <StyledError>
      <StyledMessage>
        <Text fontSize={38} bold text={"Welcome to Employees Frontend"} />
        <Text
          fontSize={22}
          text={`Set an API Token by getting it on the link down bellow :)`}
        />
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
