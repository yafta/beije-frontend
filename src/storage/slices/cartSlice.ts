import { CustomProduct } from "types/ProductAndPacketTypes";
import { createSelector, createSlice } from "@reduxjs/toolkit";

interface cartState {
  packet: Array<CustomProduct>;
  cart: Array<Array<CustomProduct>>;
  totalPrice: number;
  cartTotalPrice: number;
}

const initialState: cartState = {
  packet: [],
  totalPrice: 0,
  cart: [],
  cartTotalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToPacket: (state, action) => {
      const newProduct: CustomProduct = action.payload;
      let isExits = false;
      const newPacket = state.packet.map((product) => {
        if (product._id === newProduct._id) {
          isExits = true;
          return {
            ...product,
            count: product.count + 1,
          };
        }
        return product;
      });
      if (!isExits) {
        newPacket.push(newProduct);
      }
      state.packet = newPacket;
      state.totalPrice += newProduct.price;
    },
    removeFromCart: (state, action) => {
      const newProduct: CustomProduct = action.payload;
      let remainingCount = 0;
      const newPacket = state.packet.map((product) => {
        if (product._id === newProduct._id) {
          remainingCount = product.count - 1;
          return {
            ...product,
            count: remainingCount,
          };
        }
        return product;
      });
      state.packet = newPacket.filter((product) => product.count > 0);
      state.totalPrice -= newProduct.price;
    },
    removeWithParentId: (state, action) => {
      let willBeDecreasedAmount = 0;
      const newPacket: Array<CustomProduct> = [];
      state.packet.forEach((product) => {
        if (product.parentId === action.payload) {
          willBeDecreasedAmount = product.count * product.price;
        } else {
          newPacket.push(product);
        }
      });
      state.packet = newPacket;
      state.totalPrice = state.totalPrice - willBeDecreasedAmount;
    },
    addPacketToCart: (state) => {
      state.cart.push(state.packet);
      state.packet = [];
      state.cartTotalPrice += state.totalPrice;
      state.totalPrice = 0;
    },
  },
});

export const selectCart = createSelector(
  (state: any) => state.cart,
  (cart: cartState) => cart
);

export const { addToPacket, removeFromCart, removeWithParentId, addPacketToCart } =
  cartSlice.actions;
export default cartSlice.reducer;
