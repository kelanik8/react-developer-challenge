import axios from "axios";

const API = axios.create({
  baseURL: `https://capcards-api.herokuapp.com/v1.0/api`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default API;
