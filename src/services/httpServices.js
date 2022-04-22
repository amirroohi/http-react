import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.headers.common["Authorization"] = "AUTH_TOKEN"; // for all requests

axios.interceptors.request.use(
  (request) => {
    // console.log(request);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject();
  }
);

axios.interceptors.response.use(
  (response) => {
    // console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject();
  }
);

const http = {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
};

export default http;
