import axios from "axios";

const apiClient = axios.create({
  baseURL: "/base",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
