import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as EmployeesController from "../../controller/EmployeesController";
import { AddOrEditEmployee, DeleteModal } from "../CustomModal";
import { Icon, Grid } from "../";
import { StyledPrevious, StyledLine } from "./Styles";
const PreviouslyAdded = (props) => {
  const { previouslyAddedEmployee, clearLastAdded } = props;

  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [displayConfirm, setDisplayConfirm] = useState(false);

  useEffect(() => {
    if (previouslyAddedEmployee.name) {
      setDisplayConfirm(true);
    } else {
      setDisplayConfirm(false);
    }
  }, [previouslyAddedEmployee, editModal, deleteModal]);

  const name = previouslyAddedEmployee?.name?.split(" ")[0];

  return displayConfirm ? (
    <StyledPrevious>
      <Grid rows={1} columns={3} customColumns={[1.25, 1, 1]}>
        <Icon
          icon={"employee"}
          fontSize={20}
          size={"md"}
          title={`${name} was added`}
        />
        <Icon
          icon={"edit"}
          size={"md"}
          fontSize={20}
          title={`Edit ${name}'s profile`}
          onClick={() => setEditModal(true)}
        />
        <Icon
          icon={"trash"}
          size={"md"}
          fontSize={20}
          title={`Delete ${name}`}
          onClick={() => setDeleteModal(true)}
        ></Icon>
      </Grid>
      <StyledLine></StyledLine>
      <DeleteModal
        active={deleteModal}
        setActive={setDeleteModal}
        item={previouslyAddedEmployee}
      />
      <AddOrEditEmployee
        active={editModal}
        setActive={setEditModal}
        editing={true}
        item={previouslyAddedEmployee}
        setDeleteModal={setDeleteModal}
      />
    </StyledPrevious>
  ) : null;
};

const mapStateToProps = (state) => {
  const {
    employees: { previouslyAddedEmployee },
  } = state;
  return { previouslyAddedEmployee };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearLastAdded: () => dispatch(EmployeesController.clearLastAdded()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviouslyAdded);
