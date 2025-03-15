import React, { useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import PacketEditor from "view/components/Packets/PacketEditor";
import CustomPacketPreview from "view/components/Packets/CustomPacketPreview";

export default function Packets() {
  const [customPacket, setCustomPacket] = useState(null);

  return (
    <Container sx={{ paddingBottom: 12 }} maxWidth="lg">
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <p className="SubHeading">Kendi Paketini Oluştur</p>
            <p className="Paragraph link">Nasıl Çalışır?</p>
          </Box>
          <p className="Paragraph muted">
            Döngünün uzunluğuna, kanamanın yoğunluğuna ve kullanmak istediğin ürünlere göre tamamen
            kendine özel bir paket oluştur!
          </p>
          <PacketEditor />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomPacketPreview customPacket={customPacket} />
        </Grid>
      </Grid>
    </Container>
  );
}
