import { combineReducers } from "redux";
import EmployeesReducer from "./EmployeesReducer";

export default combineReducers({
  employees: EmployeesReducer,
});
