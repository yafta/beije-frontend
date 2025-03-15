import React, { useEffect, useState } from "react";
import useApiCall from "helper/useApiCall";
import { Box } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { CustomProduct } from "types/ProductAndPacketTypes";
import { verifyPacketPrice } from "api/services/app-services";
import { Button, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addPacketToCart, removeWithParentId, selectCart } from "storage/slices/cartSlice";

type productGroup = {
  _id: string;
  name: string;
  products: Array<CustomProduct>;
};

export default function CustomPacketPreview({ customPacket }: { customPacket: any }) {
  const { apiCall, serviceLoad } = useApiCall();
  const _cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const [groupedProducts, setGroupedProducts] = useState<Array<productGroup>>([]);

  useEffect(() => {
    const newGroupedProducts: { [key: string]: productGroup } = {};
    _cart.packet.forEach((product) => {
      newGroupedProducts[product.parentId] = {
        _id: product.parentId,
        name: product.parentName,
        products: [...(newGroupedProducts?.[product.parentId]?.products || []), product],
      };
    });
    setGroupedProducts(Object.values(newGroupedProducts));
  }, [_cart]);

  const handleAddToCart = async () => {
    const params = {
      packet: _cart.packet.map((product) => ({
        _id: product._id,
        count: product.count,
      })),
      totalPrice: _cart.totalPrice,
    };

    apiCall({
      service: verifyPacketPrice,
      params: params,
      showToastOnError: true,
      errorMessage: "Paket tutarı onaylanamadı",
      onSuccess: () => dispatch(addPacketToCart()),
    });
  };

  return (
    <Box display={"flex"} justifyContent={"flex-end"}>
      <Box width={"70%"} bgcolor={"white"} borderRadius={"16px"} padding={"32px"}>
        <Box
          marginBottom={"40px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}>
          <p className="SubHeading noMargin">Paketin</p>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#D2E7E0",
              borderRadius: "8px",
              paddingX: "12px",
              paddingY: "4px",
            }}>
            <Box
              sx={{
                width: "8px",
                height: "8px",
                backgroundColor: "#0EB9B3",
                borderRadius: "50%",
                marginRight: "8px",
              }}
            />
            <p className="subtitle2 noMargin">2 Ayda bir gönderim</p>
          </Box>
        </Box>
        <p className="Paragraph muted">
          Kişisel ihtiyacına yönelik istediğin miktarda ped, günlük ped, tampon veya destekleyici
          ürünler ekleyerek kendine özel paket oluşturabilirsin.
        </p>
        <Box>
          {groupedProducts.map((productGroup) => (
            <Box
              key={productGroup._id}
              sx={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid #3429291F",
                borderRadius: "8px",
                padding: "16px",
                marginY: "20px",
              }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p className="Medium-18 noMargin">{`${productGroup.name} Paketi`}</p>
                <IconButton
                  onClick={() => dispatch(removeWithParentId(productGroup._id))}
                  size="small">
                  <DeleteOutline sx={{ color: "#9E9E9E" }} />
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 3 }}>
                {productGroup.products.map((product) => (
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <p className="subProduct noMargin">{`${product.count} ${product.name}`}</p>
                    <p className="subProductPrice noMargin">{`${
                      product.count * product.price
                    }₺`}</p>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
        <Button
          disabled={serviceLoad || _cart.totalPrice <= 0}
          onClick={handleAddToCart}
          sx={{
            marginTop: "40px",
            borderRadius: "25px",
            textTransform: "none",
            color: "white",
            background: "#343131",
            paddingY: "12px",
            width: "100%",
            "&.Mui-disabled": {
              backgroundColor: "#0000001F",
              color: "#00000050",
            },
          }}>
          <p className="Paragraph noMargin">{`Sepete Ekle (${_cart.totalPrice}₺)`}</p>
        </Button>
      </Box>
    </Box>
  );
}
