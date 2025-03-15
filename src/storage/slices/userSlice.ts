import { createSelector, createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

type UserProfileInfo = {
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  passwordHash: string;
};

type UserCycleStatus = {
  isRegistrationComplete: boolean;
  inOnboardingCompleted: boolean;
};
interface UserState {
  token: string;
  _id: string;
  profileInfo: UserProfileInfo;
  cycleStatus: UserCycleStatus;
}

const initialState: UserState = {
  token: "",
  _id: "",
  cycleStatus: {
    isRegistrationComplete: false,
    inOnboardingCompleted: false,
  },
  profileInfo: {
    birthDate: "",
    email: "",
    firstName: "",
    lastName: "",
    passwordHash: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = "";
      storage.removeItem("persist:root");
    },
    initUser: (state, action) => {
      state._id = action.payload?._id;
      state.profileInfo = action?.payload?.profileInfo;
      state.cycleStatus = action.payload.cycleStatus;
    },
  },
});

export const selectToken = createSelector(
  (state: any) => state.user,
  (user: UserState) => user.token
);

export const selectUserId = createSelector(
  (state: any) => state.user,
  (user: UserState) => user._id
);

export const selectProfileInfo = createSelector(
  (state: any) => state.user,
  (user: UserState) => user.profileInfo
);

export const { updateToken, removeToken, initUser } = userSlice.actions;
export default userSlice.reducer;
