import React from "react";
import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { ArrowRight, ChevronRight } from "@mui/icons-material";
import { selectProductsAndPackets } from "storage/slices/appSlice";

export default function AllProducts() {
  const { packets, products } = useSelector(selectProductsAndPackets);

  return (
    <Box sx={{ paddingX: "10%" }}>
      <Box marginBottom={"48px"}>
        <p className="subHeader">Ürünler</p>
        <Grid container>
          {products.map((product) => (
            <Grid key={product._id} xs={12} md={2}>
              <Box sx={{ paddingRight: 2 }}>
                <img
                  alt={product.title}
                  src={product.image}
                  style={{ maxHeight: 135, objectFit: "cover", width: "100%", background: "blue" }}
                />
                <Box
                  color={"#343131"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}>
                  <p className="Paragraph link">{product.title}</p>
                  <ChevronRight />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
        <p className="subHeader">Paketler</p>
        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
          <p className="subHeader">Tüm Paketler</p>
          <ArrowRight />
        </Box>
      </Box>
      <Grid container>
        {packets.map((packet) => (
          <Grid key={packet._id} xs={12} md={3}>
            <Box sx={{ paddingRight: 2 }}>
              <img
                alt={packet.title}
                src={packet.image}
                style={{ maxHeight: 135, objectFit: "cover", width: "100%", background: "blue" }}
              />
              <Box
                color={"#343131"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}>
                <p className="Paragraph link">{packet.title}</p>
                <ChevronRight />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
