import storage from "redux-persist/lib/storage";
import appReducer from "./slices/appSlice";
import userReducer from "./slices/userSlice";
import cartReducer from "./slices/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
  cart: cartReducer,
});

// Configure persist settings
const persistConfig = {
  key: "root",
  storage, // Uses localStorage by default for web
  whitelist: ["user"], // Only persist 'user' state (optional)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }),
});

export const persistor = persistStore(store);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
