import React, { useState } from "react";
import BeijeIcon from "assets/BeijeIcon";
import NavbarButton from "./NavbarButton";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "helper/useIsMobile";
import { AppBar, Paper, Slide } from "@mui/material";

export default function Navbar() {
  const [showAnchor, setShowAnchor] = useState<Boolean>(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <div>
      <AppBar position="sticky" sx={{ background: "#F7F6F5", paddingX: "10%", boxShadow: "none" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <div className="Navbar-button" onClick={() => navigate("/login")}>
            <BeijeIcon color="#CE7328" />
          </div>
          {!isMobile && (
            <Box sx={{ display: "flex", gap: "32px" }}>
              <NavbarButton name={"Tüm Ürünler"} updateAnchorVisibility={setShowAnchor} />
              <NavbarButton name={"Biz Kimiz?"} />
              <NavbarButton name={"Bağış Kültürü"} />
              <NavbarButton name={"Regl Testi!"} />
              <NavbarButton name={"Kendi Paketini Oluştur"} to={"/packets"} />
            </Box>
          )}
          <div className="Navbar-button">
            <p>icons</p>
            {isMobile && <p>mobile menu icon</p>}
          </div>
        </Box>
      </AppBar>
      <Slide direction="down" in={Boolean(showAnchor)} timeout={200} mountOnEnter unmountOnExit>
        <Paper
          sx={{
            position: "absolute",
            width: "100%",
            background: "#f7f6f5",
            borderRadius: 0,
            boxShadow: 4,
            zIndex: 99,
          }}>
          <p>Content</p>
        </Paper>
      </Slide>
    </div>
  );
}
