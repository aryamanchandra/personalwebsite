import {
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import { projectdata, workdata } from "../data";
import Socialbar from "../components/Socialbar";
import Image from "next/image";

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
      <Box py={10}>
        <Typography variant="h4">
          Get in touch
        </Typography>
        <Typography color="#666666" pb={2}>
          Got a question or a project idea that could boost your business? I'm
          here to help. Reach out, and let's discuss how we can drive value
          together.
        </Typography>
        <Socialbar />
      </Box>
    </Box>
  );
}
