export type ProductType = "Other" | "Menstrual";

export type SubProduct = {
  _id: string;
  name: string;
  price: number;
};

export type Product = {
  _id: string;
  title: string;
  type: ProductType;
  image: string;
  subProducts: Array<SubProduct>;
};

export type Packet = {
  _id: string;
  image: string;
  title: string;
};

export type CustomProduct = {
  _id: string;
  parentId: string;
  parentName: string;
  count: number;
  price: number;
  name: string;
};
