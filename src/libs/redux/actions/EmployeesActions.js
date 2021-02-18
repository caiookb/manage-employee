import { EmployeesTypes } from "../types";

export const saveEmployeesList = (employees) => ({
  type: EmployeesTypes.SAVE_EMPLOYEES_LIST,
  payload: employees,
});

export const saveEmployeeDetail = (employee) => ({
  type: EmployeesTypes.SAVE_EMPLOYEE_DETAIL,
  payload: employee,
});

export const clearEmployeeDetail = () => ({
  type: EmployeesTypes.CLEAR_EMPLOYEE_DETAIL,
  payload: {},
});

export const saveEmployeeByPage = (list) => ({
  type: EmployeesTypes.SAVE_EMPLOYEES_BY_PAGE,
  payload: list,
});

export const cleanEmployees = () => ({
  type: EmployeesTypes.CLEAN_EMPLOYEES,
  payload: [],
});
