import React, { ReactNode, useState } from "react";
import BeijeIcon from "assets/BeijeIcon";
import MenuIcons from "./MenuIcons";
import AllProducts from "./AllProducts";
import NavbarButton from "../NavbarButton";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "helper/useIsMobile";
import { NavbarMenuItem } from "types/NavbarTypes";
import { AppBar, Container, Paper, Slide } from "@mui/material";

const navMenu: Array<NavbarMenuItem> = [
  {
    id: "products",
    name: "Tüm Ürünler",
    content: <AllProducts />,
  },
  {
    id: "whoAreWe",
    name: "Biz Kimiz?",
  },
  {
    id: "donationCulture",
    name: "Bağış Kültürü",
  },
  {
    id: "periodTest",
    name: "Regl Testi!",
  },
  {
    id: "createOwnPacket",
    name: "Kendi Paketini Oluştur",
    to: "/packets",
  },
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<ReactNode>(null);
  const [showAnchor, setShowAnchor] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <Container maxWidth="lg">
      <AppBar
        position="sticky"
        sx={{ background: "#F7F6F5", boxShadow: "none", zIndex: 100, paddingY: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <div className="Navbar-button" onClick={() => navigate("/login")}>
            <BeijeIcon color="#CE7328" />
          </div>
          {!isMobile && (
            <Box sx={{ display: "flex", gap: "32px" }}>
              {navMenu.map((menu) => (
                <NavbarButton
                  {...menu}
                  updateAnchorVisibility={setShowAnchor}
                  updateAnchorEl={setAnchorEl}
                />
              ))}
            </Box>
          )}
          <MenuIcons isMobile={isMobile} />
        </Box>
      </AppBar>
      <div onMouseLeave={() => setShowAnchor(false)} onMouseEnter={() => setShowAnchor(true)}>
        <Slide direction="down" in={showAnchor} timeout={200} mountOnEnter unmountOnExit>
          <Paper
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              paddingY: 12,
              width: "100%",
              background: "#f7f6f5",
              borderRadius: 0,
              boxShadow: showAnchor ? 4 : 0,
              zIndex: 99,
            }}>
            {anchorEl}
          </Paper>
        </Slide>
      </div>
    </Container>
  );
}
