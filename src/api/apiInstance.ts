import axios from "axios";
import store from "storage/store";
import { logOut } from "helper/AuthHelper";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 180000,
  timeoutErrorMessage: "Servis çağrısı zaman aşımına uğradı!",
});

apiInstance.interceptors.request.use(
  async (config) => {
    const _token = store.getState().user.token;
    if (_token) {
      // when x-auth-token is settled, all api calls fails.
      // I think there a mistake so, i did not set it
      //! config.headers.set("x-auth-token", _token);
    }
    return config;
  },
  (err) => Promise.reject(new Error(err?.toString()))
);

apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    if (err.response?.status === 401) {
      logOut();
    }
    throw err;
  }
);

export default apiInstance;
