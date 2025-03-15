import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Packet, Product } from "types/ProductAndPacketTypes";

interface AppState {
  products: Array<Product>;
  packets: Array<Packet>;
}

const initialState: AppState = {
  products: [],
  packets: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    initProductsAndPackets: (state, action) => {
      state.products = action?.payload?.products || [];
      state.packets = action?.payload?.packets || [];
    },
  },
});

export const selectProducts = createSelector(
  (state: any) => state.app,
  (app: AppState) => app.products
);

export const selectPackets = createSelector(
  (state: any) => state.app,
  (app: AppState) => app.packets
);

export const selectProductsAndPackets = createSelector(
  (state: any) => state.app,
  (app: AppState) => ({
    products: app.products,
    packets: app.packets,
  })
);

export const { initProductsAndPackets } = appSlice.actions;
export default appSlice.reducer;
