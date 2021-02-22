import React from "react";
import { connect } from "react-redux";
import { Button, CustomModal, Text } from "../../index";
import { StyledModal, StyledOption } from "./Styles";
import * as EmployeesController from "../../../controller/EmployeesController";

const DeleteModal = (props) => {
  const { item, active, setActive } = props;
  const { deleteEmployee, clearLastAdded } = props;

  return (
    <CustomModal active={active} setActive={setActive}>
      <StyledModal>
        <Text
          fontSize={22}
          text={`Are you sure you want to delete ${item.name}?`}
          bold
        />
        <StyledOption>
          <Button
            title={"Yes"}
            onClick={() => {
              deleteEmployee(item._id).then(() => {
                setActive(false);
                clearLastAdded();
              });
            }}
            color={"red"}
            size={"sm"}
          />
          <Button
            title={"Cancel"}
            onClick={() => {
              setActive(false);
              clearLastAdded();
            }}
            color={"gray"}
            size={"sm"}
          />
        </StyledOption>
      </StyledModal>
    </CustomModal>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEmployee: (id) =>
      dispatch(EmployeesController.deleteEmployeeById(id)),
    clearLastAdded: () => dispatch(EmployeesController.clearLastAdded()),
  };
};

export default connect(null, mapDispatchToProps)(DeleteModal);

DeleteModal.defaultProps = {
  setDisplayConfirm: () => null,
  item: null,
  active: null,
  setActive: null,
};
