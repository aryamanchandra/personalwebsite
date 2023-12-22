import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import Footer from "../components/Footer";
import { photographyimage } from "../data";

export default function Photography() {
  return (
    <Box>
      <Typography variant="h2" py={5}>
        Photography
      </Typography>
      <ImageList cols={3}>
        {photographyimage.map((item) => (
          <ImageListItem key={item.title}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Footer />
    </Box>
  );
}
