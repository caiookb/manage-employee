const urlPrefix =
  "https://crudcrud.com/api/dd9999fd26a44847a915a142e462c63c/emp/";

const url = (path) => {
  return urlPrefix.concat(path.join("/"));
};

export default (config) => {
  const { method, path, body } = config;

  const opt = {
    method,
    data: body,
  };

  return fetch(url(path), opt)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      throw err;
    });
};
