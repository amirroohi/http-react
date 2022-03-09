import axios from "axios";
// This module will use for a multi baseURL
const instance = axios.create({
  baseURL: "http://localhost:3001",
});

export default instance;