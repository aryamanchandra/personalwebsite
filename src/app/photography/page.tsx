"use client"
import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  Link,
  Typography,
  styled,
} from "@mui/material";
import Footer from "../components/Footer";
import { photographyimage } from "../data";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const BehanceButton = styled(Button)({
  border: "1px solid white",
  borderRadius: "20px",
  marginTop: "10px",
  paddingX: "15px",
  fontFamily: "__SFTEXT_CAA964",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#1c1c1c !important",
  },
});

export default function Photography() {
  return (
    <Box>
      <Typography variant="h2" pt={5} sx={{fontSize: { xs: "3rem", md: "4rem" }}}>
        Photography
      </Typography>
      <Typography color="#666666" variant="h6" pb={5}>Friendly Neighbourhood Photographer</Typography>
      <ImageList cols={2}>
        {photographyimage.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.img} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
      <Box pt={4} sx={{ textAlign: "center" }}>
        <Link href="https://www.behance.net/aryamanchandra" target="_blank">
          <BehanceButton endIcon={<ArrowOutwardIcon />}>
            More on Behance
          </BehanceButton>
        </Link>
      </Box>
      <Footer />
    </Box>
  );
}
