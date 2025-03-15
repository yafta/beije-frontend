import axios from "axios";
import store from "storage/store";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 180000,
  timeoutErrorMessage: "Servis çağrısı zaman aşımına uğradı!",
});

apiInstance.interceptors.request.use(
  async (config) => {
    const _token = store.getState().user.token;
    if (_token) {
      config.headers.set("x-auth-token", _token);
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
      // logout action here
    }
    throw err;
  }
);

export default apiInstance;
