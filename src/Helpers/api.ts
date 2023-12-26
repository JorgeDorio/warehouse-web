import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5121/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
