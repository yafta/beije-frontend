import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Tab, Tabs } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { useSelector } from "react-redux";
import { selectToken } from "storage/slices/userSlice";
import { logOut } from "helper/AuthHelper";

export default function LoginOrRegister() {
  const [value, setValue] = React.useState(0);
  const _token = useSelector(selectToken);

  return (
    <div className="LoginRegisterContainer">
      <div>
        <p className="Heading">Merhaba</p>
        <p className="Paragraph center">beije'e hoş geldin!</p>
      </div>
      {_token ? (
        <div>
          <p className="center">Oturum açıldı</p>
          <p onClick={logOut} className="link center">
            OTURUMU KAPAT
          </p>
        </div>
      ) : (
        <TabContext value={value}>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={(_, newValue) => setValue(newValue)}
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
            <Tab sx={{ width: 220 }} label="Giriş Yap" />
            <Tab sx={{ width: 220 }} label="Üye Ol" />
          </Tabs>
          <TabPanel
            sx={{
              padding: 0,
            }}
            value={0}>
            <LoginForm />
          </TabPanel>
          <TabPanel
            sx={{
              padding: 0,
            }}
            value={1}>
            <RegisterForm />
          </TabPanel>
        </TabContext>
      )}
    </div>
  );
}
