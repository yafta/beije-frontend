import React from "react";
import loginImage from "assets/login/loginImage.png";
import LoginOrRegister from "view/components/login/LoginOrRegister";
import { Grid } from "@mui/material";

export default function Login() {
  return (
    <div>
      <Grid container>
        <Grid item md={6} sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <img alt="beije-products" src={loginImage} style={{ objectFit: "fill", width: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} className="LoginRegisterContainer">
          <LoginOrRegister />
        </Grid>
      </Grid>
    </div>
  );
}
