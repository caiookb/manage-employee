import EmployeesReducer from "../EmployeesReducer";

describe("Employees Reducer", () => {
  it("Has a default state", () => {
    expect(EmployeesReducer(undefined, { type: undefined })).toEqual({
      employeesList: [],
      previouslyAddedEmployee: {},
      selectedEmployee: {},
    });
  });

  it("can handle SAVE_EMPLOYEES_LIST", () => {
    expect(
      EmployeesReducer(undefined, {
        type: "SAVE_EMPLOYEES_LIST",
        payload: [{ name: "Caio", email: "caiookb@gmail.com" }],
      })
    ).toEqual({
      employeesList: [{ name: "Caio", email: "caiookb@gmail.com" }],
      previouslyAddedEmployee: {},
      selectedEmployee: {},
    });
  });

  it("can handle SAVE_EMPLOYEE_DETAIL", () => {
    expect(
      EmployeesReducer(undefined, {
        type: "SAVE_EMPLOYEE_DETAIL",
        payload: { name: "Caio", email: "caiookb@gmail.com" },
      })
    ).toEqual({
      employeesList: [],
      previouslyAddedEmployee: {},
      selectedEmployee: { name: "Caio", email: "caiookb@gmail.com" },
    });
  });

  it("can handle SAVE_PREVIOUSLY_ADDED_EMPLOYEE", () => {
    expect(
      EmployeesReducer(undefined, {
        type: "SAVE_PREVIOUSLY_ADDED_EMPLOYEE",
        payload: { name: "Caio", email: "caiookb@gmail.com" },
      })
    ).toEqual({
      employeesList: [],
      previouslyAddedEmployee: { name: "Caio", email: "caiookb@gmail.com" },
      selectedEmployee: {},
    });
  });

  it("can handle CLEAR_EMPLOYEE_DETAIL", () => {
    expect(
      EmployeesReducer(undefined, {
        type: "CLEAR_EMPLOYEE_DETAIL",
        payload: {},
      })
    ).toEqual({
      employeesList: [],
      previouslyAddedEmployee: {},
      selectedEmployee: {},
    });
  });

  it("can handle CLEAR_PREVIOUSLY_ADDED_EMPLOYEE", () => {
    expect(
      EmployeesReducer(undefined, {
        type: "CLEAR_PREVIOUSLY_ADDED_EMPLOYEE",
        payload: {},
      })
    ).toEqual({
      employeesList: [],
      previouslyAddedEmployee: {},
      selectedEmployee: {},
    });
  });
});
