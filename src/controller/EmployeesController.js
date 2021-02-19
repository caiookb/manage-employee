import { EmployeesActions } from "../libs/redux/actions";
import { EmployeeServer } from "../server";

export const createNewEmployee = (body) => (dispatch) => {
  return EmployeeServer.createEmployee(body)
    .then((res) => {
      localStorage.setItem("previouslySavedEmployee", JSON.stringify(res));

      const employeesList =
        JSON.parse(localStorage.getItem("employeesList")) || [];

      const list = [...employeesList];

      localStorage.setItem("employeeList", JSON.stringify([res].concat(list)));

      dispatch(EmployeesActions.savePreviouslyAddedEmployee(res));
      dispatch(EmployeesActions.saveEmployeesList([res].concat(list)));
    })
    .catch((err) => {
      throw err;
    });
};

export const updateEmployeeById = (body) => (dispatch) => {
  return EmployeeServer.updateEmployeesById(body, body.id)
    .then((res) => {
      return EmployeeServer.fetchEmployeesById(body.id)
        .then((res) => {
          localStorage.setItem("previouslySavedEmployee", JSON.stringify(res));
          dispatch(EmployeesActions.savePreviouslyAddedEmployee(res));
        })
        .then(() => {
          return EmployeeServer.fetchEmployees().then((res) => {
            const employeesList =
              JSON.parse(localStorage.getItem("employeesList")) || [];

            const list = [...employeesList];

            localStorage.setItem(
              "employeeList",
              JSON.stringify([res].concat(list))
            );

            dispatch(EmployeesActions.saveEmployeesList([res].concat(list)));
          });
        });
    })
    .catch((err) => {
      throw err;
    });
};
