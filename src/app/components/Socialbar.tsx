"use client"
import { Box, Button, Link } from "@mui/material";
import { SocialButton } from "../../../style";
import { socialdata } from "../data";

function SocialIcons({IconComponent, onClick}: { IconComponent: React.ComponentType; onClick: string }) {
    return (
      <SocialButton sx={{paddingLeft:"0px",paddingRight:"0px", marginRight:"10px"}}>
        <Link href={onClick} target="_blank" color="primary.light">
        <IconComponent/>
        </Link>
      </SocialButton>
    );
  }

export default function Socialbar() {
  return (
    <Box>
      {socialdata.map((element, index) => (
        <SocialIcons
          key={index}
          IconComponent={element.name}
          onClick={element.link}
        />
      ))}
    </Box>
  );
}
