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
      </head>
      <body className={SFText.className}>
        <ThemeProvider theme={theme}>
          <Box sx={{ width: "40%", marginX: "auto", padding:"10px" }}>
            <Navbar />
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
