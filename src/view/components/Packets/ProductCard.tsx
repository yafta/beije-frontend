import React from "react";
import { Product } from "types/ProductAndPacketTypes";
import { Box, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore, Favorite } from "@mui/icons-material";
import SubProductCard from "./SubProductCard";

type ProductCardProps = {
  product: Product;
  productIndex: number;
  isExpanded: boolean;
  onExpand: Function;
};

export default function ProductCard({
  product,
  productIndex,
  isExpanded,
  onExpand,
}: ProductCardProps) {
  return (
    <Box marginY={"24px"} bgcolor={"white"} borderRadius={"16px"} gap={"20px"}>
      <Box
        onClick={() => onExpand(product)}
        display={"flex"}
        paddingY={"16px"}
        paddingX={"24px"}
        alignItems={"center"}
        justifyContent={"space-between"}>
        <p className="subHeader noMargin">{product.title}</p>
        {isExpanded ? (
          <ExpandLess sx={{ fontSize: "32px" }} />
        ) : (
          <ExpandMore sx={{ fontSize: "32px" }} />
        )}
      </Box>
      <Collapse in={isExpanded}>
        <Box
          bgcolor={"#ECF1CF"}
          borderRadius={"8px"}
          paddingY={"20px"}
          paddingX={"16px"}
          marginX={"18px"}
          display={"flex"}>
          <Favorite sx={{ fontSize: "32px", color: "#B9D54D", marginRight: 2 }} />
          <p className="body1 noMargin">
            Döngüleri yoğun geçen kullanıcıların X’i günde 3 adet standart ped tercih ediyor.
          </p>
        </Box>
        {product.subProducts.map((subProduct, subProductIndex) => (
          <SubProductCard
            key={subProduct._id}
            product={product}
            productIndex={productIndex}
            subProduct={subProduct}
            subProductIndex={subProductIndex}
          />
        ))}
      </Collapse>
    </Box>
  );
}
