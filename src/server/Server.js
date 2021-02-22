import axios from "axios";

const urlPrefix = "https://crudcrud.com/api/";

const url = (path) => {
  return urlPrefix.concat(path.join("/"));
};

export default (config) => {
  const { method, path, body } = config;

  const opt = {
    method,
    data: body,

    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS",
  };

  return axios(url(path), opt)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
