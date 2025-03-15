import React, { useState } from "react";
import SocialLogin from "./SocialLogin";
import { Box, Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <SocialLogin />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, paddingY: "24px" }}>
        <TextField
          placeholder="halide.edip@adivar.com"
          id="email"
          label="E-mail adresin"
          variant="outlined"
          InputProps={{
            sx: {
              borderRadius: "8px",
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
              },
            },
          }}
          InputLabelProps={{
            sx: {
              "&.Mui-focused": {
                color: "black",
              },
            },
          }}
        />
        <TextField
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                  {showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              borderRadius: "8px",
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
              },
            },
          }}
          InputLabelProps={{
            sx: {
              "&.Mui-focused": {
                color: "black",
              },
            },
          }}
          security="sad"
          placeholder="halide.edip@adivar.com"
          id="password"
          label="Şifren"
          variant="outlined"
        />
        <p style={{ textAlign: "end", marginTop: 0 }} className="darkLink">
          Şifremi Unuttum
        </p>
        <Button
          sx={{
            borderRadius: "25px",
            textTransform: "none",
            color: "white",
            background: "#343131",
            paddingY: "12px",
          }}>
          <p className="Paragraph">Giriş Yap</p>
        </Button>
      </Box>
    </div>
  );
}
