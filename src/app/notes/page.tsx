import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { projectdata, workdata } from "../data";
import Socialbar from "../components/Socialbar";

export default function Notes() {
  return (
    <Box>
      <Typography variant="h4" pt={15}>
        Work Experience
      </Typography>
      {workdata &&
        workdata.map((element, index) => (
          <Box mt={3} p={3} sx={{ border: "1px solid #1c1c1c" }} key={index}>
            <Typography>
              {element.title}, {element.company}
            </Typography>
            <Typography color="primary.light">{element.date}</Typography>
            <Typography color="#666666">{element.description}</Typography>
          </Box>
        ))}
        <Socialbar />
    </Box>
  );
}
