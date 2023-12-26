"use client";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { notesdata } from "../data";
import Socialbar from "../components/Socialbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useData } from '../components/context';

export default function Notes() {
  const { setData } = useData();
  const router = useRouter();
  const handleReadMoreClick = (slug: string, element: any) => {
    setData(element);
    router.push(`/notes/${slug}`);
  };

  return (
    <Box>
      <Typography
        variant="h2"
        py={5}
        sx={{ fontSize: { xs: "3rem", md: "4rem" } }}
      >
        Notes
      </Typography>
      {notesdata &&
        notesdata.map((element, index) => (
          <Box mt={3} p={3} sx={{ border: "1px solid #1c1c1c" }} key={index}>
            <Typography variant="h6">{element.title}</Typography>
            <Typography color="primary.light">{element.date}</Typography>
            <Typography color="#666666" pb={2}>
              {element.description}
            </Typography>
            <Button
              sx={{ fontFamily: "__SFTEXT_CAA964", background: "#111111" }}
              onClick={() => handleReadMoreClick(element.title, element)}
            >
              {/* <Link
                href={{
                  pathname: `notes/${element.title}`,
                  query: { title: 'john', age: '30' }
                }}
              > */}
              Read More
              {/* </Link> */}
            </Button>
          </Box>
        ))}
      {/* <Typography variant="h5" color="#666666">No notes as of now :D</Typography> */}
      <Footer />
    </Box>
  );
}
