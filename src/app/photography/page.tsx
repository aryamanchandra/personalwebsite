import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import Footer from "../components/Footer";

const itemData = [
  {
    img: "/photography/boatman-1.jpg",
    title: "Breakfast",
  },
  {
    img: "/photography/cat-1.jpg",
    title: "Breakfast",
  },
  {
    img: "/photography/cat-2.jpg",
    title: "Breakfast",
  },
  {
    img: "/photography/cat-dustbin1.jpg",
    title: "Breakfast",
  },
  {
    img: "/photography/couple-1.jpg",
    title: "Breakfast",
  },
  {
    img: "/photography/dog-looking-back1.jpg",
    title: "Breakfast",
  },
  {
    img: "/photography/dog.jpg",
    title: "Breakfast",
  },
  {
    img: "/photography/dragonfly.jpg",
    title: "Breakfast",
  },
  {
    img: "/photography/lamp.jpg",
    title: "Breakfast",
  },
  {
    img: "/photography/moon.jpg",
    title: "Breakfast",
  },
  {
    img: "/photography/nest-11.jpg",
    title: "Breakfast",
  },
  {
    img: "/photography/sad-dog-2.jpg",
    title: "Breakfast",
  },
  {
    img: "/photography/sad-dog-3.jpg",
    title: "Breakfast",
  },
  {
    img: "/photography/thinker1.jpg",
    title: "Breakfast",
  },
  {
    img: "/photography/uncle-11.jpg",
    title: "Breakfast",
  },

];

export default function Photography() {
  return (
    <Box>
      <Typography variant="h2" py={5}>
        Photography
      </Typography>
      <ImageList variant="quilted" cols={3} spacing={2}>
        {itemData.map((item) => (
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
