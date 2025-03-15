import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { TabContext } from "@mui/lab";
import { useSelector } from "react-redux";
import { Box, Tab, Tabs } from "@mui/material";
import { selectProducts } from "storage/slices/appSlice";
import { Product, ProductType } from "types/ProductAndPacketTypes";

export default function PacketEditor() {
  const _products = useSelector(selectProducts);
  const [selectedTab, setSelectedTab] = useState<ProductType>("Menstrual");
  const [expandedProductId, setExpandedProductId] = useState<string>(_products?.[0]?._id);

  const handleExpandProduct = (product: Product) =>
    setExpandedProductId((prev) => (prev === product._id ? "" : product?._id));

  return (
    <Box marginTop={6}>
      <TabContext value={selectedTab}>
        <Tabs
          variant="fullWidth"
          value={selectedTab}
          onChange={(_, newValue) => setSelectedTab(newValue)}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "black",
            },
            "& .MuiTab-root": {
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 500,
              color: "gray",
            },
            "& .Mui-selected": {
              color: "#000",
            },
          }}>
          <Tab value={"Menstrual"} sx={{ width: 220 }} label="Menstrual Ürünler" />
          <Tab value={"Other"} sx={{ width: 220 }} label="Destekleyici Ürünler" />
        </Tabs>
        <Box>
          {_products
            .filter((_p) => _p.type === selectedTab)
            ?.map((product, productIndex) => (
              <ProductCard
                product={product}
                productIndex={productIndex}
                isExpanded={expandedProductId === product._id}
                onExpand={handleExpandProduct}
              />
            ))}
        </Box>
      </TabContext>
    </Box>
  );
}
