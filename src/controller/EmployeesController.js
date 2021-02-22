import { EmployeesActions, UserActions } from "../libs/redux/actions";
import { EmployeeServer } from "../server";
import Store from "../Store";

export const saveTokenOnRedux = (token) => (dispatch) => {
  const tokenOnStorage = JSON.parse(localStorage.getItem("token"));
  console.log("token on storage", tokenOnStorage);
  return EmployeeServer.fetchEmployees(tokenOnStorage)
    .then(() => {
      dispatch(UserActions.saveUserToken(tokenOnStorage));
      return { message: "Thanks, token is valid!", status: 200 };
    })
    .catch((err) => {
      localStorage.setItem("token", JSON.stringify(token));
      throw { message: err, status: 401 };
    });
};

export const filterByName = (name) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("list"));

  const filterAction = list.filter((item) => {
    if (
      name.toLowerCase() === "mobile" ||
      name.toLowerCase() === "frontend" ||
      name.toLowerCase() === "backend"
    ) {
      return item.team.toLowerCase().includes(name.toLowerCase());
    } else {
      return item.name.toLowerCase().includes(name.toLowerCase());
    }
  });

  if (name == "") {
    dispatch(EmployeesActions.saveEmployeesList(list));
  } else {
    dispatch(EmployeesActions.saveEmployeesList(filterAction));
  }
};

export const createNewEmployee = (body) => (dispatch) => {
  const token = Store.getState().user?.token;
  return EmployeeServer.createEmployee(body, token)
    .then((res) => dispatch(EmployeesActions.savePreviouslyAddedEmployee(res)))
    .then(() =>
      EmployeeServer.fetchEmployees(token).then((res) => {
        localStorage.setItem("list", JSON.stringify(res));
        dispatch(EmployeesActions.saveEmployeesList(res));
        return res;
      })
    )
    .catch((err) => {
      throw err;
    });
};

export const getEmployeesList = () => (dispatch) => {
  const token = Store.getState().user?.token;
  return EmployeeServer.fetchEmployees(token)
    .then((res) => {
      localStorage.setItem("list", JSON.stringify(res));
      dispatch(EmployeesActions.saveEmployeesList(res));
    })
    .catch((err) => {
      console.log("error", err);
      throw err;
    });
};

export const updateEmployeeById = (id, body) => (dispatch) => {
  const token = Store.getState().user?.token;
  return EmployeeServer.updateEmployeesById(id, body, token)
    .then((res) =>
      EmployeeServer.fetchEmployeesById(id, token)
        .then((res) =>
          dispatch(EmployeesActions.savePreviouslyAddedEmployee(res))
        )
        .then(() =>
          EmployeeServer.fetchEmployees(token).then((res) => {
            localStorage.setItem("list", JSON.stringify(res));
            dispatch(EmployeesActions.saveEmployeesList(res));
          })
        )
    )
    .catch((err) => {
      throw err;
    });
};

export const deleteEmployeeById = (id) => (dispatch) => {
  const token = Store.getState().user?.token;
  return EmployeeServer.deleteEmployeesById(id, token).then(() =>
    EmployeeServer.fetchEmployees(token).then((res) => {
      localStorage.setItem("list", JSON.stringify(res));
      dispatch(EmployeesActions.saveEmployeesList(res));
    })
  );
};

export const getEmployeeById = (id) => (dispatch) => {
  const token = Store.getState().user?.token;
  return EmployeeServer.fetchEmployeesById(id, token).then((res) =>
    dispatch(EmployeesActions.saveEmployeeDetail(res))
  );
};

export const clearLastAdded = () => (dispatch) =>
  dispatch(EmployeesActions.clearPreviouslyAddedEmployee());
