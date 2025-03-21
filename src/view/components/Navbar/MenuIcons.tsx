import React from "react";
import { Box } from "@mui/material";
import { selectCart } from "storage/slices/cartSlice";
import { useSelector } from "react-redux";
import { MenuOutlined } from "@mui/icons-material";

export default function MenuIcons({ isMobile }: { isMobile: boolean }) {
  const _cart = useSelector(selectCart);
  const cartItemCount = _cart?.cart?.length;
  return (
    <div className="Navbar-button">
      <Box position={"relative"}>
        {cartItemCount && (
          <Box
            display={"flex"}
            right={-2}
            top={-2}
            alignItems={"center"}
            justifyContent={"center"}
            position={"absolute"}
            width={"18px"}
            height={"18px"}
            borderRadius={"50%"}
            bgcolor={"#343131"}>
            <p className="badgeCount noMargin">{cartItemCount}</p>
          </Box>
        )}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 6H7.30616C7.55218 6 7.67519 6 7.77418 6.04524C7.86142 6.08511 7.93535 6.14922 7.98715 6.22995C8.04593 6.32154 8.06333 6.44332 8.09812 6.68686L8.57143 10M8.57143 10L9.62332 17.7314C9.75681 18.7125 9.82355 19.2031 10.0581 19.5723C10.2648 19.8977 10.5611 20.1564 10.9114 20.3174C11.3089 20.5 11.8039 20.5 12.7941 20.5H21.352C22.2945 20.5 22.7658 20.5 23.151 20.3304C23.4905 20.1809 23.7818 19.9398 23.9923 19.6342C24.2309 19.2876 24.3191 18.8247 24.4955 17.8988L25.8191 10.9497C25.8812 10.6238 25.9122 10.4609 25.8672 10.3335C25.8278 10.2218 25.7499 10.1277 25.6475 10.068C25.5308 10 25.365 10 25.0332 10H8.57143ZM14 25C14 25.5523 13.5523 26 13 26C12.4477 26 12 25.5523 12 25C12 24.4477 12.4477 24 13 24C13.5523 24 14 24.4477 14 25ZM22 25C22 25.5523 21.5523 26 21 26C20.4477 26 20 25.5523 20 25C20 24.4477 20.4477 24 21 24C21.5523 24 22 24.4477 22 25Z"
            stroke="#343131"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Box>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 25C24 23.6044 24 22.9067 23.8278 22.3389C23.44 21.0605 22.4395 20.06 21.1611 19.6722C20.5933 19.5 19.8956 19.5 18.5 19.5H13.5C12.1044 19.5 11.4067 19.5 10.8389 19.6722C9.56045 20.06 8.56004 21.0605 8.17224 22.3389C8 22.9067 8 23.6044 8 25M20.5 11.5C20.5 13.9853 18.4853 16 16 16C13.5147 16 11.5 13.9853 11.5 11.5C11.5 9.01472 13.5147 7 16 7C18.4853 7 20.5 9.01472 20.5 11.5Z"
          stroke="#343131"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {isMobile && <MenuOutlined width={"32px"} />}
    </div>
  );
}
