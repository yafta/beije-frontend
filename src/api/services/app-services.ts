import apiInstance from "api/apiInstance";

export const getPacketsAndProducts = () => {
  return apiInstance.get(`packets-and-products`);
};

export const postSignIn = (params: { email: string; password: string }) => {
  return apiInstance.post(`sign-in-request`, params);
};

export const getProfile = () => {
  return apiInstance.get(`profile`);
};

export const verifyPacketPrice = (params: {
  packet: Array<{ _id: string; count: number }>;
  totalPrice: number;
}) => {
  return apiInstance.post(`verify-packet-prive`, params);
};
