import { EmployeesActions, UserActions } from "../libs/redux/actions";
import { EmployeeServer } from "../server";
import Store from "../Store";

const token = JSON.stringify(localStorage.getItem("token"));

export const saveTokenOnRedux = () => (dispatch) => {
  return EmployeeServer.fetchEmployees(token)
    .then((res) => {
      dispatch(UserActions.saveUserToken(token));
      return res;
    })
    .catch((err) => {
      throw err;
    });
};

export const createNewEmployee = (body) => (dispatch) => {
  console.log(Store.getState());

  return EmployeeServer.createEmployee(body, token)
    .then((res) => dispatch(EmployeesActions.savePreviouslyAddedEmployee(res)))
    .then(() =>
      EmployeeServer.fetchEmployees(token).then((res) => {
        dispatch(EmployeesActions.saveEmployeesList(res));
        return res;
      })
    )
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const getEmployeesList = () => (dispatch) => {
  return EmployeeServer.fetchEmployees(token)
    .then((res) => {
      console.log("response", res);
      dispatch(EmployeesActions.saveEmployeesList(res));
    })
    .catch((err) => {
      console.log("error", err);
      throw err;
    });
};

export const updateEmployeeById = (id, body) => (dispatch) =>
  EmployeeServer.updateEmployeesById(id, body, token)
    .then((res) =>
      EmployeeServer.fetchEmployeesById(id, token)
        .then((res) =>
          dispatch(EmployeesActions.savePreviouslyAddedEmployee(res))
        )
        .then(() =>
          EmployeeServer.fetchEmployees(token).then((res) =>
            dispatch(EmployeesActions.saveEmployeesList(res))
          )
        )
    )
    .catch((err) => {
      throw err;
    });

export const deleteEmployeeById = (id, token) => (dispatch) =>
  EmployeeServer.deleteEmployeesById(id, token).then(() =>
    EmployeeServer.fetchEmployees(token).then((res) => {
      dispatch(EmployeesActions.saveEmployeesList(res));
    })
  );

export const getEmployeeById = (id, token) => (dispatch) =>
  EmployeeServer.fetchEmployeesById(id, token).then((res) =>
    dispatch(EmployeesActions.saveEmployeeDetail(res))
  );

export const clearLastAdded = () => (dispatch) =>
  dispatch(EmployeesActions.clearPreviouslyAddedEmployee());
