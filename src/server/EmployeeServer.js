import fetchServer from "./Server";

export const fetchEmployees = () => {
  return fetchServer({
    method: "GET",
    path: ["employee"],
  });
};

export const fetchEmployeesById = (id) => {
  return fetchServer({
    method: "GET",
    path: ["employee", id],
  });
};

export const updateEmployeesById = (body, id) => {
  return fetchServer({
    method: "PUT",
    path: ["employee", id],
    body,
  });
};

export const deleteEmployeesById = (id) => {
  return fetchServer({
    method: "PUT",
    path: ["employee", id],
  });
};

export const createEmployee = (body) => {
  return fetchServer({
    method: "POST",
    path: ["employee"],
    body,
  });
};
