import { Add, Remove } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToPacket, removeFromCart, selectCart } from "storage/slices/cartSlice";
import { CustomProduct, Product, SubProduct } from "types/ProductAndPacketTypes";

type SubProductCardProps = {
  subProduct: SubProduct;
  product: Product;
  productIndex: number;
  subProductIndex: number;
};

const subProductColors = [
  ["#EF4E25", "#B52129", "#610D00"],
  ["#F68C1E", "#CE7328"],
  ["#A2557C", "#693566", "#3C223C"],
];

export default function SubProductCard(props: SubProductCardProps) {
  const { subProduct, product, productIndex, subProductIndex } = props;
  const [amount, setAmount] = useState(0);
  const _cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const newCustomProduct: CustomProduct = {
    _id: subProduct?._id,
    name: subProduct?.name,
    count: 1,
    parentId: product._id,
    parentName: product.title,
    price: subProduct.price,
  };

  useEffect(() => {
    setAmount(
      _cart.packet?.find((customProduct) => customProduct._id === subProduct._id)?.count || 0
    );
  }, [_cart, subProduct._id]);

  const handleAddToCart = () => {
    dispatch(addToPacket(newCustomProduct));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(newCustomProduct));
  };

  return (
    <Box
      marginY={4}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      key={subProduct._id}>
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Box
          sx={{
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
            bgcolor: subProductColors[productIndex % 3][subProductIndex % 3],
            paddingLeft: "30px",
            paddingRight: "4px",
          }}>
          <svg
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.470215 6.13316C0.470215 6.82103 0.611835 8.36671 1.55867 9.04649C2.5055 9.72626 4.65003 9.34996 5.46334 9.25285C6.27664 9.15574 6.18358 9.95285 6.29687 10.5315C6.41017 11.1101 6.93214 11.2962 7.18706 11.2962H8.49805C8.49805 11.2962 9.55414 11.2962 9.80905 11.2962C10.064 11.2962 10.5859 11.1141 10.6992 10.5315C10.8125 9.94881 10.7195 9.15169 11.5328 9.25285C12.3461 9.354 14.4866 9.72626 15.4374 9.04649C16.3883 8.36671 16.5259 6.82103 16.5259 6.13316C16.5259 5.44529 16.3843 3.89961 15.4374 3.21983C14.4906 2.54005 12.3461 2.91636 11.5328 3.01347C10.7195 3.11058 10.8125 2.31346 10.6992 1.73484C10.5859 1.15622 10.064 0.970093 9.80905 0.970093H8.49805C8.49805 0.970093 7.44197 0.970093 7.18706 0.970093C6.93214 0.970093 6.41017 1.15218 6.29687 1.73484C6.18358 2.31751 6.27664 3.11463 5.46334 3.01347C4.65003 2.91231 2.50954 2.54005 1.55867 3.21983C0.607789 3.89961 0.470215 5.44529 0.470215 6.13316Z"
              stroke="white"
              stroke-width="0.833333"
              stroke-miterlimit="10"
            />
            <path
              d="M11.2331 4.75342H5.76659C5.06937 4.75342 4.50415 5.31863 4.50415 6.01586V6.2465C4.50415 6.94373 5.06937 7.50894 5.76659 7.50894H11.2331C11.9304 7.50894 12.4956 6.94373 12.4956 6.2465V6.01586C12.4956 5.31863 11.9304 4.75342 11.2331 4.75342Z"
              stroke="white"
              stroke-width="0.833333"
              stroke-miterlimit="10"
            />
          </svg>
        </Box>
        <p className="subtitle-dark">{subProduct.name}</p>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "50px",
          border: "1px solid #ddd",
          minWidth: "120px",
          padding: 1,
          marginRight: 2,
        }}>
        <IconButton onClick={handleRemoveFromCart} size="small">
          <Remove />
        </IconButton>
        <p className="noMargin">{amount}</p>
        <IconButton onClick={handleAddToCart} size="small">
          <Add />
        </IconButton>
      </Box>
    </Box>
  );
}
