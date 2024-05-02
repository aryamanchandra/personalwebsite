import { Box, Stack, Typography } from "@mui/material";
import Socialbar from "./components/Socialbar";
import { projectdata, workdata } from "./data";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Box>
      <Box py={20} sx={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          className="SFDisplay.className"
          sx={{ fontSize: { xs: "3rem", md: "4rem" } }}
        >
          Hi! I&apos;m Aryaman
        </Typography>
        <Typography
          variant="h6"
          color="primary.light"
          pb={3}
          className="SFText.className"
        >
          Full Stack Developer & UI/UX Designer
        </Typography>
        <Socialbar />
      </Box>
      <Box>
        <Typography variant="h4" pt={5}>
          Work Experience
        </Typography>
        {workdata &&
          workdata.map((element, index) => (
            <Box mt={3} p={3} sx={{ border: "2px solid #1c1c1c" }} key={index}>
              <Typography>
                {element.title}, {element.company}
              </Typography>
              <Typography color="primary.light">{element.date}</Typography>
              <Typography color="#666666">{element.description}</Typography>
            </Box>
          ))}
      </Box>
      <Box pt={15}>
        <Typography variant="h4" pb={2}>
          Selected Projects
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={2}>
          {projectdata &&
            projectdata.map((element, index) => (
              <Box key={index} pb={5} sx={{ width: { xs: "100%", sm: "48%" } }}>
                {/* <Typography>Image will come here</Typography> */}
                <Typography variant="h6">{element.title}</Typography>
                <Typography color="primary.light">{element.stack}</Typography>
                <Typography color="#666666" py={1}>
                  {element.description}
                </Typography>
                {/* <Button
                sx={{ fontFamily: "__SFTEXT_CAA964", background: "#1c1c1c" }}
              >
                Case Study
              </Button> */}
              </Box>
            ))}
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
}
