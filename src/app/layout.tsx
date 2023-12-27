import type { Metadata } from "next";
import "./globals.css";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "../../style";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import { DataProvider } from "./components/context";

const SFText = localFont({
  src: "../../public/fonts/SF-Pro-Text-Regular.otf",
  variable: "--font-sftext-bold",
});

export const metadata: Metadata = {
  title: "Aryaman Chandra",
  description:
    "Aryaman Chandra is an experienced Full Stack Developer & UI/UX Designer.",
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
        <link rel="canonical" href="https://aryamanchandra.com/" />
        <meta name="author" content="Aryaman Chandra" />
        <meta itemProp="name" content="Aryaman Chandra" />
        <meta itemProp="url" content="https://aryamanchandra.com/" />
        <meta
          itemProp="description"
          content="Aryaman Chandra is a full stack developer and ui/ux designer."
        />
        <meta property="og:title" content="Aryaman Chandra" />
        <meta property="og:url" content="https://aryamanchandra.com/" />
        <meta property="og:site_name" content="Aryaman Chandra" />
        <meta
          property="og:image"
          content="https://aryamanchandra.com/_next/image?url=%2Fprofile.webp&w=640&q=75"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Aryaman Chandra is a Full Stack developer and UI/UX designer."
        />
      </head>
      <body className={SFText.className}>
        <DataProvider>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                width: "100%",
                maxWidth: "50rem",
                marginX: "auto",
                padding: "30px",
                "@media (max-width: 600px)": {
                  maxWidth: "100%",
                },
              }}
            >
              <Navbar />
              {children}
            </Box>
          </ThemeProvider>
        </DataProvider>
      </body>
    </html>
  );
}
