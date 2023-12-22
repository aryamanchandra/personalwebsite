import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Box, ThemeProvider, Typography } from "@mui/material";
import {theme} from "../../style";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
