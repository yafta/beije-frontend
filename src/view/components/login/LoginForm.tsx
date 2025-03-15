import React, { useState } from "react";
import SocialLogin from "./SocialLogin";
import { Box, Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import useApiCall from "helper/useApiCall";
import { getProfile, postSignIn } from "api/services/app-services";
import { useDispatch } from "react-redux";
import { initUser, updateToken } from "storage/slices/userSlice";

export default function LoginForm() {
  const { serviceLoad, apiCall } = useApiCall();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({ email: false, password: false });
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    if (Boolean(loginCredentials.email) && Boolean(loginCredentials.password)) {
      await apiCall({
        service: postSignIn,
        params: loginCredentials,
        onSuccess: async (loginResponse) => {
          dispatch(updateToken(loginResponse?.token));
          await apiCall({
            service: getProfile,
            params: loginResponse?.token,
            onSuccess: (userResponse) => dispatch(initUser(userResponse)),
            showToastOnError: true,
            errorMessage: "Kullanıcı bilgileri bulunamadı.",
          });
        },
        showToastOnError: true,
        errorMessage: "Üyelik bilgilerin hatalıdır.",
      });
    } else {
      setFormErrors({
        email: !Boolean(loginCredentials.email),
        password: !Boolean(loginCredentials.password),
      });
    }
  };

  return (
    <div>
      <SocialLogin />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, paddingY: "24px" }}>
        <TextField
          onBlur={() =>
            setFormErrors((prev) => ({ ...prev, email: !Boolean(loginCredentials.email) }))
          }
          error={formErrors.email}
          disabled={serviceLoad}
          value={loginCredentials.email}
          onChange={(event) =>
            setLoginCredentials((prev) => ({
              ...prev,
              email: event.target.value,
            }))
          }
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
          onBlur={() =>
            setFormErrors((prev) => ({ ...prev, password: !Boolean(loginCredentials.password) }))
          }
          disabled={serviceLoad}
          error={formErrors.password}
          value={loginCredentials.password}
          onChange={(event) =>
            setLoginCredentials((prev) => ({
              ...prev,
              password: event.target.value,
            }))
          }
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
          disabled={serviceLoad}
          onClick={handleLogin}
          sx={{
            borderRadius: "25px",
            textTransform: "none",
            color: "white",
            background: "#343131",
            paddingY: "12px",
          }}>
          <p className="Paragraph noMargin">Giriş Yap</p>
        </Button>
      </Box>
    </div>
  );
}
