import axios from "axios";
import { getJwtTokenFromCookie } from "../utils/JWT";

const token = getJwtTokenFromCookie();
const apiClient = axios.create({
  baseURL: "/base",
  headers: {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  },
  withCredentials: true,
});

const updateApiClientToken = (token: string | null) => {
  apiClient.defaults.headers.Authorization = token ? `Bearer ${token}` : "";
};

export { updateApiClientToken };
export default apiClient;
