import { EmployeesTypes } from "../types";

const initialState = {
  employeesList: [],
  currentPage: [],
  selectedEmployee: {},
  previouslyAddedEmployee: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case EmployeesTypes.SAVE_EMPLOYEES_BY_PAGE:
      return { ...state, currentPage: payload };
    case EmployeesTypes.SAVE_EMPLOYEES_LIST:
      return { ...state, EmployeesList: payload };
    case EmployeesTypes.SAVE_EMPLOYEE_DETAIL:
      return { ...state, selectedEmployee: payload };
    case EmployeesTypes.SAVE_PREVIOUSLY_ADDED_EMPLOYEE:
      return { ...state, previouslyAddedEmployee: payload };
    case EmployeesTypes.CLEAR_PREVIOUSLY_ADDED_EMPLOYEE:
      return { ...state, previouslyAddedEmployee: {} };
    case EmployeesTypes.CLEAR_EMPLOYEE_DETAIL:
      return { ...state, selectedEmployee: {} };
    case EmployeesTypes.CLEAN_EMPLOYEES:
      return { ...state };
    default:
      return state;
  }
};
