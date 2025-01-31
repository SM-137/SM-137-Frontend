import axios from "axios";
import { getJwtTokenFromCookie } from "../utils/JWT";

const PROXY = window.location.hostname === "localhost" ? "" : "/base";
const URL = `${PROXY}`;

const token = getJwtTokenFromCookie();
const apiClient = axios.create({
  baseURL: URL,
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
