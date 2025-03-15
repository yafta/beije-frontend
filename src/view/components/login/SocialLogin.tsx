import { Box, Button, Stack } from "@mui/material";

export default function SocialLogin() {
  return (
    <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider", paddingBottom: "24px" }}>
      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          startIcon={
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.5 11.8683C21.501 11.2772 21.448 10.6871 21.3418 10.1045H12.6823V13.4435H17.6409C17.5394 13.9764 17.3247 14.4844 17.0096 14.9369C16.6946 15.3893 16.2858 15.7768 15.8079 16.076V18.249H18.7679C20.501 16.7401 21.5 14.5077 21.5 11.8683Z"
                fill="#4285F4"
              />
              <path
                d="M12.6824 20.3432C15.158 20.3432 17.2476 19.5742 18.768 18.2492L15.808 16.0804C14.9835 16.6104 13.9238 16.9098 12.6824 16.9098C10.2881 16.9098 8.25465 15.3856 7.52784 13.3313H4.47913V15.5658C5.24305 17.0019 6.41475 18.2093 7.86336 19.0529C9.31196 19.8966 10.9804 20.3433 12.6824 20.3432Z"
                fill="#34A853"
              />
              <path
                d="M7.52773 13.3312C7.14337 12.2547 7.14337 11.0889 7.52773 10.0123V7.77734H4.47902C3.83532 8.98593 3.50006 10.32 3.50006 11.6728C3.50006 13.0257 3.83532 14.3597 4.47902 15.5683L7.52773 13.3312Z"
                fill="#FBBC04"
              />
              <path
                d="M12.6824 6.43387C13.9913 6.41364 15.2561 6.88043 16.2036 7.73342L18.8264 5.25939C17.164 3.78558 14.9624 2.97614 12.6824 3.00054C10.9806 3.00086 9.31238 3.4477 7.86387 4.29119C6.41537 5.13468 5.24353 6.34165 4.47913 7.77741L7.52784 10.0124C8.25466 7.95814 10.2881 6.43387 12.6824 6.43387Z"
                fill="#EA4335"
              />
            </svg>
          }
          sx={{
            borderRadius: "25px",
            textTransform: "none",
            color: "black",
            borderColor: "#343131",
            width: 210,
            "&:hover": { borderColor: "black" },
          }}>
          Google ile Giriş Yap
        </Button>
        <Button
          variant="outlined"
          startIcon={
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.9994 6.00026L13.9996 6.00043C13.4473 6.00047 12.9996 6.44819 12.9997 7.00043L12.9998 10.0003L16.9996 10C17.1133 9.99751 17.2212 10.0504 17.2888 10.1419C17.3564 10.2334 17.3754 10.352 17.3396 10.46L16.5998 12.6599C16.5316 12.8618 16.3429 12.9983 16.1298 12.9999L13 13.0001L13.0004 20.4997C13.0005 20.7757 12.7766 20.9996 12.5005 20.9997L10.0006 20.9998C9.72452 20.9998 9.50066 20.7759 9.50064 20.4999L9.50021 13.0003L8.0003 13.0004C7.72417 13.0004 7.50031 12.7765 7.5003 12.5004L7.50018 10.5005C7.50017 10.2245 7.724 10.0006 8.00013 10.0005L9.50004 10.0005L9.49987 7.00063C9.49974 4.79162 11.2904 3.00076 13.4994 3.00063L16.9992 3.00043C17.2753 3.00042 17.4992 3.22425 17.4992 3.50038L17.4993 5.50026C17.4993 5.77639 17.2755 6.00025 16.9994 6.00026Z"
                fill="#3975EA"
              />
            </svg>
          }
          sx={{
            borderRadius: "25px",
            textTransform: "none",
            color: "black",
            borderColor: "#343131",
            width: 210,
            "&:hover": { borderColor: "black" },
          }}>
          Facebook ile Giriş Yap
        </Button>
      </Stack>
    </Box>
  );
}
