"use client";
import { Box, Typography } from "@mui/material";
import { useData } from "../../components/context";
import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function Post() {
  const { data } = useData();
  const [querydata, setData] = useState(data);

  useEffect(() => {
    if (typeof window !== "undefined") {
      require("prismjs/components/prism-javascript");
      require("prismjs/components/prism-jsx");
      Prism.highlightAll();
    }
  }, []);

  useEffect(() => {
    if (data) {
      localStorage.setItem("data", JSON.stringify(data));
      setData(data);
    }
  }, [data]);

  useEffect(() => {
    const fromLocalStorage = localStorage.getItem("data");
    if (fromLocalStorage) {
      console.log(JSON.parse(fromLocalStorage));
      setData(JSON.parse(fromLocalStorage));
    } else {
      console.log("No data as of now");
    }
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [querydata]);
  
  return (
    <Box>
      {querydata ? (
        <>
          <Typography variant="h4" pt={10}>
            {querydata.title}
          </Typography>
          <Typography color="primary.light">{querydata.date}</Typography>
          <Typography color="#666666" py={3}>{querydata.hero}</Typography>
          <Box p={2} sx={{ background: "#1c1c1c" }}>
            <pre className="language-javascript">
              <code>{querydata.code}</code>
            </pre>
          </Box>
          <Typography color="#666666" py={3}>{querydata.subtext}</Typography>
          <Box p={2} sx={{ background: "#1c1c1c" }}>
            <pre className="language-javascript">
              <code>{querydata.code2}</code>
            </pre>
          </Box>
        </>
      ) : (
        ""
      )}
    </Box>
  );
}
