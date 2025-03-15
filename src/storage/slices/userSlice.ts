import { createSelector, createSlice } from "@reduxjs/toolkit";

interface UserState {
  token: string;
}

const initialState: UserState = {
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const selectToken = createSelector(
  (state: any) => state.user,
  (user: UserState) => user.token
);

export const { updateToken } = userSlice.actions;
export default userSlice.reducer;
