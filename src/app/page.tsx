import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import Socialbar from "./components/Socialbar";
import localFont from "next/font/local";

const SFDisplay = localFont({
  src: "../../public/fonts/SF-Pro-Display-Bold.otf",
  variable: "--font-sfdisplay-bold",
});
const SFText = localFont({
  src: "../../public/fonts/SF-Pro-Text-Regular.woff",
  variable: "--font-sftext-bold",
});

const data = [
  {
    title: "Hello world",
    description:
      "Polychain Monsters offers animated  NFTs through digital booster packs, each with unique animations and rarity. With over 2.7 million packs opened, a hit among collectors and gamers in Web3.",
  },
  {
    title: "Hello world",
    description:
      "Polychain Monsters offers animated  NFTs through digital booster packs, each with unique animations and rarity. With over 2.7 million packs opened, a hit among collectors and gamers in Web3.",
  },
  {
    title: "Hello world",
    description:
      "Polychain Monsters offers animated  NFTs through digital booster packs, each with unique animations and rarity. With over 2.7 million packs opened, a hit among collectors and gamers in Web3.",
  },
  {
    title: "Hello world",
    description:
      "Polychain Monsters offers animated  NFTs through digital booster packs, each with unique animations and rarity. With over 2.7 million packs opened, a hit among collectors and gamers in Web3.",
  },
];

const data2 = [
  {
    title: "Full Stack Developer",
    company: "Kommit Techno Legal",
    date: "October 2023 - Present",
    description:
      "Co-Founder of Polychain Monsters with focus on Product, Design and Community Development in the Web3 space, utilizing transparency, user involvement and a user-centric approach to drive successful product development.",
  },
  {
    title: "Full Stack Developer",
    company: "Kommit Techno Legal",
    date: "October 2023 - Present",
    description:
      "Co-Founder of Polychain Monsters with focus on Product, Design and Community Development in the Web3 space, utilizing transparency, user involvement and a user-centric approach to drive successful product development.",
  },
  {
    title: "Full Stack Developer",
    company: "Kommit Techno Legal",
    date: "October 2023 - Present",
    description:
      "Co-Founder of Polychain Monsters with focus on Product, Design and Community Development in the Web3 space, utilizing transparency, user involvement and a user-centric approach to drive successful product development.",
  },
  {
    title: "Full Stack Developer",
    company: "Kommit Techno Legal",
    date: "October 2023 - Present",
    description:
      "Co-Founder of Polychain Monsters with focus on Product, Design and Community Development in the Web3 space, utilizing transparency, user involvement and a user-centric approach to drive successful product development.",
  },
];
export default function Home() {
  return (
    <Box sx={{ width: "40%", marginX: "auto" }}>
      <Navbar />
      <Box py={20} sx={{ textAlign: "center" }}>
        <Typography variant="h2" className="SFDisplay.className">
          Hi! I'm Aryaman
        </Typography>
        <Typography
          variant="h6"
          color="primary.light"
          pb={3}
          className="SFText.className"
        >
          Full Stack Developer, UI/UX Designer & App Developer
        </Typography>
        <Socialbar />
      </Box>
      <Box pt={5}>
        <Typography variant="h4">Selected Projects</Typography>
        <Stack direction="row" flexWrap="wrap">
          {data.map((element, index) => (
            <Box key={index} pb={5} sx={{ width: "45%" }}>
              {/* <Typography>Image will come here</Typography> */}
              <Typography variant="h6">{element.title}</Typography>
              <Typography color="#666666" py={1}>
                {element.description}
              </Typography>
              <Button
                sx={{ fontFamily: "__SFTEXT_CAA964", background: "#1c1c1c" }}
              >
                Case Study
              </Button>
            </Box>
          ))}
        </Stack>
      </Box>
      <Box>
        <Typography variant="h4" pt={15}>
          Work Experience
        </Typography>
        {data2.map((element, index) => (
          <Box mt={3} p={3} sx={{ border: "1px solid #1c1c1c" }} key={index}>
            <Typography>
              {element.title}, {element.company}
            </Typography>
            <Typography color="primary.light">{element.date}</Typography>
            <Typography color="#666666">{element.description}</Typography>
          </Box>
        ))}
      </Box>
      <Box py={15}>
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
