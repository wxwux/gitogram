import axios from "axios";

const token = localStorage.getItem("token");

const baseURL = "https://api.github.com";

if (token) {
  axios.defaults.headers.Authorization = `token ${token}`;
}

export const makeRequest = ({
  url, method = "get", data = {}, withBaseUrl = true,
  headers = {}
}) => axios({
  url,
  method,
  data,
  baseURL: withBaseUrl ? baseURL : "",
  headers: { ...headers }
});
