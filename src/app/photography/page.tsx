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
];

export default function Photography() {
  return (
    <Box>
      <Typography variant="h4" pt={5}>
        Photography
      </Typography>
      <ImageList variant="quilted" cols={3} spacing={2}>
        {itemData.map((item) => (
          <ImageListItem key={item.title}>
            <img
              src={item.img}
              alt={item.title}
              // width={100}
              // height={100}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Socialbar />
    </Box>
  );
}
