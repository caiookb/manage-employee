import { combineReducers } from "redux";
import EmployeesReducer from "./EmployeesReducer";
import UserReducer from "./UserReducer";

export default combineReducers({
  employees: EmployeesReducer,
  user: UserReducer,
});
