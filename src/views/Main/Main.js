import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Card,
  Grid,
  Icon,
  PreviouslyAdded,
  TextInput,
  Welcome,
} from "../../components";
import { StyledMain, StyledContainer, StyledCards } from "./Styles";
import * as EmployeesController from "../../controller/EmployeesController";
import AddOrEditEmployee from "../../components/CustomModal/AddOrEditEmployeeModal/AddOrEditEmployeeModal";

const Main = (props) => {
  const { employeesList, token } = props;
  const { getEmployees } = props;

  const [addEmployeeModal, setAddEmployeeModal] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getEmployees()
      .then((res) => {
        console.log("ok?", res);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [error, token]);

  console.log("OTKEN", token);

  return !token || token != null ? (
    <StyledContainer>
      <StyledMain>
        <Icon icon={"employee"} size={"lg"} fontSize={36} title={"Employee"} />
        <br></br>
        <Grid rows={1} columns={2} customColumns={[1.75, 1]}>
          <TextInput
            icon={"search"}
            placeholder={"Search by name or team... "}
          />
          <Button
            title={"Add new employee"}
            color={"green"}
            icon={"plus"}
            onClick={() => setAddEmployeeModal(true)}
          />
        </Grid>
        <PreviouslyAdded />
        <StyledCards>
          <Grid rows={employeesList.length} columns={2}>
            {employeesList.map((item) => (
              <Card item={item} />
            ))}
          </Grid>
        </StyledCards>
      </StyledMain>
      <AddOrEditEmployee
        active={addEmployeeModal}
        setActive={setAddEmployeeModal}
      />
    </StyledContainer>
  ) : (
    <Welcome />
  );
};

const mapStateToProps = (state) => {
  const {
    employees: { employeesList, previouslyAddedEmployee },
    user: { token },
  } = state;
  return { employeesList, previouslyAddedEmployee, token };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEmployees: () => dispatch(EmployeesController.getEmployeesList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
