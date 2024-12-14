import axios from "axios";

export const api = axios.create({
  baseURL: "http://26.123.63.36:3333",
  timeout: 700,
});
