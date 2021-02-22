import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  CustomModal,
  Dropdown,
  Grid,
  Spinner,
  Text,
  TextInput,
} from "../..";
import { StyledOption } from "../../Dropdown/Styles";
import { StyledAction, StyledForm } from "./Styles";
import * as EmployeesController from "../../../controller/EmployeesController";
import { connect } from "react-redux";
import Icon from "../../Icons/Icon";

const AddOrEditEmployee = (props) => {
  const { active, setActive, editing, item, setDeleteModal } = props;
  const { addEmployee, editEmployee, clearLastAdded } = props;
  const { register, handleSubmit, errors } = useForm();

  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false);

  const handleRequest = (data) =>
    editing ? editEmployee(item?._id, data) : addEmployee(data);

  const onSubmit = (data) => {
    setFetching(true);
    handleRequest(data)
      .then(() => {
        if (editing) {
          clearLastAdded();
        }
        setActive(false);
        setFetching(false);
      })
      .catch((err) => {
        setFetching(false);
        setError(err.message);
      });
  };

  return (
    <CustomModal active={active} setActive={setActive}>
      {fetching ? (
        <Spinner />
      ) : (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Icon
            icon={editing ? "edit" : "employee"}
            size={"md"}
            title={
              editing
                ? `Edit ${item?.name?.split(" ")[0]}'s profile`
                : "Add a new employee"
            }
            fontSize={24}
            bold
          />
          <Icon
            title={"fields with * are required"}
            fontSize={18}
            styling={"italic"}
            size={"md"}
          />
          <br></br>
          <Grid rows={1} columns={1}>
            <TextInput
              name={"name"}
              label={"Name *"}
              defaultValue={editing ? item?.name : undefined}
              register={register({ required: true })}
              errors={errors}
            />
          </Grid>
          <Grid rows={1} columns={2}>
            <TextInput
              name={"email"}
              type={"email"}
              label={"Email *"}
              defaultValue={editing ? item?.email : undefined}
              register={register({
                required: true,
              })}
              errors={errors}
            />
            <TextInput
              name={"cpf"}
              label={"CPF *"}
              type={"number"}
              defaultValue={editing ? item?.cpf : undefined}
              register={register({
                required: true,
              })}
              errors={errors}
            />
          </Grid>
          <Grid rows={1} columns={4}>
            <Dropdown
              label={"Gender"}
              name={"gender"}
              register={register({
                required: true,
                validate: (value) => value != "--",
              })}
              defaultValue={editing ? item?.gender : undefined}
              errors={errors}
            >
              <StyledOption value={null}>--</StyledOption>
              <StyledOption value={"Genderqueer/Non-Binary"}>
                Genderqueer/Non-Binary
              </StyledOption>
              <StyledOption value={"Woman"}>Woman</StyledOption>
              <StyledOption value={"Man"}>Man</StyledOption>
              <StyledOption value={"Prefer not to disclose"}>
                Prefer not to disclose
              </StyledOption>
            </Dropdown>
            <TextInput
              name={"birthdate"}
              label={"Birthdate *"}
              type={"date"}
              defaultValue={editing ? item?.birthdate : undefined}
              register={register({ required: true })}
              errors={errors}
            />
            <TextInput
              name={"start_date"}
              label={"Start date *"}
              type={"month"}
              defaultValue={editing ? item?.start_date : undefined}
              register={register({ required: true })}
              errors={errors}
            />
            <Dropdown
              label={"Team"}
              name={"team"}
              register={register}
              errors={errors}
              defaultValue={editing ? item?.team : undefined}
            >
              <StyledOption value={"No team"}>-- </StyledOption>
              <StyledOption value={"Backend"}>Backend</StyledOption>
              <StyledOption value={"Frontend"}>Frontend</StyledOption>
              <StyledOption value={"Mobile"}>Mobile </StyledOption>
            </Dropdown>
          </Grid>
          <StyledAction>
            <Grid
              rows={1}
              columns={editing ? 3 : 2}
              customColumns={editing ? [0.5, 0.5, 1] : null}
            >
              {editing ? (
                <Button
                  title={"Delete"}
                  color={"red"}
                  type={"button"}
                  onClick={() => {
                    setActive(false);
                    setDeleteModal(true);
                  }}
                />
              ) : null}
              <Button
                title={"Cancel"}
                type={"button"}
                onClick={() => {
                  setActive(false);
                }}
              />
              <Button
                title={editing ? "Edit" : "Register"}
                color={"green"}
                type={"submit"}
              />
            </Grid>
          </StyledAction>
          {error ? <Text title={error} fontSize={22} /> : null}
        </StyledForm>
      )}
    </CustomModal>
  );
};

const mapStateToProps = (state) => {
  const {
    employees: { selectedEmployee, previouslyAddedEmployee },
  } = state;
  return { selectedEmployee, previouslyAddedEmployee };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEmployee: (data) =>
      dispatch(EmployeesController.createNewEmployee(data)),
    editEmployee: (id, data) =>
      dispatch(EmployeesController.updateEmployeeById(id, data)),
    deteleEmployee: (id) =>
      dispatch(EmployeesController.deleteEmployeeById(id)),
    clearLastAdded: () => dispatch(EmployeesController.clearLastAdded()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditEmployee);
