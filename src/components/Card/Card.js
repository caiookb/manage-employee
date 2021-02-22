import React, { useState } from "react";
import { Icon, Text } from "..";
import { connect } from "react-redux";
import {
  StyledAction,
  StyledCard,
  StyledInfo,
  StyledOptions,
  StyledTag,
} from "./Styles";
import { AddOrEditEmployee, DeleteModal } from "../CustomModal/";
import * as EmployeesController from "../../controller/EmployeesController";
import moment from "moment";

const Card = (props) => {
  const { item } = props;
  const { deleteEmployee } = props;

  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const splitName = item.name?.split(" ");

  const name = splitName[0];
  const lastName = splitName.length > 1 ? splitName[1] : "";
  return (
    <StyledCard data-testid="card">
      <StyledTag team={item.team}>
        <Icon size={"lg"} icon={item?.team?.toLowerCase()} />
      </StyledTag>

      <StyledInfo>
        <Text fontSize={20} capitalize text={`${name} ${lastName}`} />
        <Text
          fontSize={16}
          text={`${item.team} | Employee since ${moment(item.start_date).format(
            "MMM/YYYY"
          )}`}
          styling={"italic"}
        />

        <StyledAction>
          <Icon size={"sm"} fontSize={17} icon={"email"} title={item.email} />
          <StyledOptions>
            <Icon
              size={"sm"}
              icon={"edit"}
              onClick={() => setEditModal(true)}
            />
            <Icon
              size={"sm"}
              icon={"trash"}
              onClick={() => setDeleteModal(true)}
            />
          </StyledOptions>
        </StyledAction>
      </StyledInfo>
      <DeleteModal
        active={deleteModal}
        setActive={setDeleteModal}
        item={item}
        onClick={deleteEmployee}
      />
      <AddOrEditEmployee
        active={editModal}
        setActive={setEditModal}
        editing={true}
        item={item}
        setDeleteModal={setDeleteModal}
      />
    </StyledCard>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEmployee: (id) =>
      dispatch(EmployeesController.deleteEmployeeById(id)),
  };
};

export default connect(null, mapDispatchToProps)(Card);
