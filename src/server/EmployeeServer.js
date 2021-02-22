import fetchServer from "./Server";

export const fetchEmployees = (token) => {
  return fetchServer({
    method: "GET",
    path: [token, "nutemployee"],
  });
};

export const fetchEmployeesById = (id, token) => {
  return fetchServer({
    method: "GET",
    path: [token, "nutemployee", id],
  });
};

export const updateEmployeesById = (id, body, token) => {
  return fetchServer({
    method: "PUT",
    path: [token, "nutemployee", id],
    body,
  });
};

export const deleteEmployeesById = (id, token) => {
  return fetchServer({
    method: "DELETE",
    path: [token, "nutemployee", id],
  });
};

export const createEmployee = (body, token) => {
  return fetchServer({
    method: "POST",
    path: [token, "nutemployee"],
    body,
  });
};
