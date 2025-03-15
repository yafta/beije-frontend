import store from "storage/store";
import { apiCaller } from "./useApiCall";
import { postSignIn } from "api/services/app-services";
import { removeToken, updateToken } from "storage/slices/userSlice";

export const LogIn = async (loginCredentials: { email: string; password: string }) => {
  await apiCaller({
    service: postSignIn,
    params: loginCredentials,
    onSuccess: (response) => store.dispatch(updateToken(response?.token)),
    showToastOnError: true,
    errorMessage: "Üyelik bilgilerin hatalıdır.",
  });
};

export const logOut = async () => {
  store.dispatch(removeToken());
  window.location.href = "/login";
};
