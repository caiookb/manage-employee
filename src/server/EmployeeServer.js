import fetchServer from "./Server";

export const fetchEmployees = (token) => {
  return fetchServer({
    method: "GET",
    path: [token, "emp"],
  });
};

export const fetchEmployeesById = (id, token) => {
  return fetchServer({
    method: "GET",
    path: [token, "emp", id],
  });
};

export const updateEmployeesById = (id, body, token) => {
  return fetchServer({
    method: "PUT",
    path: [token, "emp", id],
    body,
  });
};

export const deleteEmployeesById = (id, token) => {
  return fetchServer({
    method: "DELETE",
    path: [token, "emp", id],
  });
};

export const createEmployee = (body, token) => {
  return fetchServer({
    method: "POST",
    path: [token, "emp"],
    body,
  });
};
