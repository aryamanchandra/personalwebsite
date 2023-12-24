import type { Metadata } from "next";
import "./globals.css";
import { Box, ThemeProvider, Typography } from "@mui/material";
import { theme } from "../../style";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";

const SFText = localFont({
  src: "../../public/fonts/SF-Pro-Text-Regular.otf",
  variable: "--font-sftext-bold",
});

export const metadata: Metadata = {
  title: "Aryaman Chandra",
  description:
    "I am Aryaman Chandra. I am an experienced full stack developer with love for design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Aryaman Chandra</title>
        <meta name="description" content="Aryaman Chandra's personal website" />
        <link rel="icon" href="../../public/ac-icon.png" sizes="any" />
      </head>
      <body className={SFText.className}>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              width: "100%",
              maxWidth: "50rem",
              marginX: "auto",
              padding: "30px",
              '@media (max-width: 600px)': {
                maxWidth: "100%", 
              },
            }}
          >
            <Navbar />
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
