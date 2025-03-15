import React from "react";
import BeijeIcon from "assets/BeijeIcon";
import { Box, Container, Grid, TextField, Button } from "@mui/material";
import { Facebook, LinkedIn, Twitter, Instagram, MusicNote } from "@mui/icons-material";

export default function Footer() {
  return (
    <div className="Footer">
      <svg
        style={{
          position: "absolute",
          top: -16,
        }}
        viewBox="0 0 1200 32"
        preserveAspectRatio="none"
        width="100%"
        height="32"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M-4.0181 1.22322C-67 1.22322 -280 16 -280 16V32H1720V16C1648 16 1553 8.10776 1521.18 8.10776C1483.81 8.10776 1465.35 13.262 1428.03 14.2676C1343.43 16.5472 1300.99 2.10187 1216 1.22322C1113.77 0.166268 1061.1 14.4129 958.79 14.2676C890.843 14.1711 854.337 8.10776 786.389 8.10776C718.44 8.10776 681.238 16.815 613.987 14.2676C560.19 12.2299 537.161 4.18261 483.99 1.22322C361.935 -5.57014 292.19 18.3333 168.384 14.2676C98.8544 11.9843 65.8948 1.22322 -4.0181 1.22322Z"
          fill="#262626"
        />
      </svg>
      <div className="Footer-content">
        <Container maxWidth="lg">
          <Grid container spacing={16}>
            <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <div>
                <BeijeIcon />
                <p className="subtitle">Arayı açmayalım!</p>
                <p className="body2">
                  beije’deki yeni ürün ve gelişmeleri sana haber verelim & aylık e-gazetemiz
                  döngü’ye abone ol!
                </p>
              </div>
              <Box sx={{ display: "flex", gap: 3 }}>
                <TextField
                  variant="outlined"
                  placeholder="E-mail Adresin"
                  sx={{
                    flexGrow: 1,
                    input: {
                      color: "#ffffff",
                    },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      color: "#ffffff70",
                      "& fieldset": {
                        borderColor: "#ffffff70",
                      },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  size="large"
                  sx={{ bgcolor: "white", color: "black", borderRadius: "64px" }}>
                  <p className="buttonFont">Gönder</p>
                </Button>
              </Box>
              <p className="body2">
                Abone olarak, <b>KVKK</b> ve <b>Gizlilik Politikası</b>'nı kabul ediyorum.
              </p>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={1}>
                <Grid item xs={4} sx={{ display: "flex", flexDirection: "column" }}>
                  <p className="footerLink">beije Ped</p>
                  <p className="footerLink">beije Günlük Ped</p>
                  <p className="footerLink">beije Tampon</p>
                </Grid>
                <Grid item xs={4} sx={{ display: "flex", flexDirection: "column" }}>
                  <p className="footerLink">Biz Kimiz?</p>
                  <p className="footerLink">Blog</p>
                  <p className="footerLink">Sıkça Sorulan Sorular</p>
                  <p className="footerLink">Ekibimize Katıl</p>
                </Grid>
                <Grid item xs={4} sx={{ display: "flex", flexDirection: "column" }}>
                  <div className="footerLinkIcon">
                    <Facebook className="icon" />
                    <p className="footerLink">Facebook</p>
                  </div>
                  <div className="footerLinkIcon">
                    <Instagram className="icon" />
                    <p className="footerLink">Instagram</p>
                  </div>
                  <div className="footerLinkIcon">
                    <Twitter className="icon" />
                    <p className="footerLink">Twitter</p>
                  </div>
                  <div className="footerLinkIcon">
                    <LinkedIn className="icon" />
                    <p className="footerLink">LinkedIn</p>
                  </div>
                  <div className="footerLinkIcon">
                    <MusicNote className="icon" />
                    <p className="footerLink">Spotify</p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box
            sx={{
              borderTop: "1px solid rgba(255,255,255,0.2)",
              mt: 4,
              pt: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <p className="buttonSmall">2022 beije. Tüm hakları saklıdır</p>
            <div className="footerLegal">
              <p className="buttonSmall">KVKK</p>
              <p className="buttonSmall">KVKK Başvuru Formu</p>
              <p className="buttonSmall">Üyelik Sözleşmesi</p>
              <p className="buttonSmall">Gizlilik Politikası</p>
              <p className="buttonSmall">Çerez Politikası</p>
              <p className="buttonSmall">Test Sonuçları</p>
            </div>
            <div className="footerLegal">
              <p className="buttonSmall">EN</p>
              <p className="buttonSmall">|</p>
              <p className="buttonSmall">
                <b>TR</b>
              </p>
            </div>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <svg
              width="48"
              height="25"
              viewBox="0 0 48 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect y="0.0864258" width="48" height="24" rx="2" fill="#F79E1B" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.8065 21.0864C34.8839 21.0864 39 17.057 39 12.0864C39 7.11586 34.8839 3.08643 29.8065 3.08643C24.729 3.08643 20.6129 7.11586 20.6129 12.0864C20.6129 17.057 24.729 21.0864 29.8065 21.0864Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.1935 21.0864C23.271 21.0864 27.3871 17.057 27.3871 12.0864C27.3871 7.11586 23.271 3.08643 18.1935 3.08643C13.1161 3.08643 9 7.11586 9 12.0864C9 17.057 13.1161 21.0864 18.1935 21.0864Z"
                fill="#EB001B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.9998 5.1084C21.9328 6.75873 20.6129 9.27168 20.6129 12.0864C20.6129 14.9012 21.9328 17.4141 23.9998 19.0644C26.0668 17.4141 27.3867 14.9012 27.3867 12.0864C27.3867 9.27168 26.0668 6.75873 23.9998 5.1084Z"
                fill="#FF5F00"
              />
            </svg>

            <svg
              width="48"
              height="25"
              viewBox="0 0 48 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect y="0.0864258" width="48" height="24" rx="2" fill="#1A1F71" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.1666 7.5344C31.5893 7.31847 30.6847 7.08643 29.5546 7.08643C26.6748 7.08643 24.6456 8.53216 24.6285 10.6028C24.6128 12.1351 26.0767 12.9882 27.1826 13.4989C28.3167 14.0203 28.6985 14.3537 28.6925 14.8199C28.6853 15.5343 27.7871 15.8605 26.9494 15.8605C25.7826 15.8605 25.1632 15.6998 24.2058 15.3019L23.8299 15.1322L23.4209 17.518C24.1024 17.8149 25.3603 18.0733 26.6676 18.0864C29.7316 18.0864 31.7209 16.6577 31.743 14.4458C31.7536 13.2334 30.9776 12.3107 29.2966 11.5509C28.2771 11.0575 27.6534 10.7279 27.6603 10.229C27.6603 9.787 28.1877 9.3123 29.3285 9.3123C30.2829 9.29746 30.9725 9.5049 31.5102 9.72125L31.7719 9.84343L32.1666 7.5344ZM18.6827 17.9282L20.505 7.27226H23.4193L21.596 17.9282H18.6827ZM37.389 7.28268H39.6413L42 17.931H39.2952C39.2952 17.931 39.0283 16.7076 38.9411 16.3347C38.7156 16.3347 37.7742 16.3335 36.8894 16.3324L36.877 16.3323C36.0973 16.3314 35.3644 16.3304 35.2082 16.3304C35.095 16.6185 34.5948 17.931 34.5948 17.931H31.5337L35.8621 8.16633C36.1694 7.47188 36.6909 7.28268 37.389 7.28268ZM36.0464 14.1508C36.2878 13.537 37.2081 11.1715 37.2081 11.1715C37.1996 11.1854 37.2563 11.0387 37.3337 10.8384L37.3337 10.8383C37.4149 10.6282 37.5188 10.3592 37.5942 10.1547L37.7909 11.0735C37.7909 11.0735 38.3494 13.6167 38.4664 14.1508H36.0464ZM13.3849 14.5465L16.2378 7.28001H19.3249L14.7369 17.9152L11.6528 17.9194L9.04419 8.59933C10.8942 9.52243 12.5497 11.3669 13.0805 13.0698L13.3849 14.5465Z"
                fill="#F0F0F0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.7374 7.27307H6.03703L6 7.49451C9.65663 8.37731 12.0762 10.5086 13.0804 13.07L12.0583 8.17242C11.8821 7.49748 11.37 7.2964 10.7374 7.27307Z"
                fill="#F9A51A"
              />
            </svg>
          </Box>
        </Container>
      </div>
    </div>
  );
}
