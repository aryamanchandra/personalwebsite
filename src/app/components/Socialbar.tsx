"use client"
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Button } from "@mui/material";
import { SocialButton } from "../../../style";

function SocialIcons({IconComponent, onClick}: { IconComponent: React.ComponentType; onClick: () => void }) {
    return (
      <SocialButton onClick={onClick} sx={{paddingLeft:"0px",paddingRight:"0px", marginRight:"10px"}}>
        <IconComponent/>
      </SocialButton>
    );
  }

export default function Socialbar() {
  const socialicons = [GitHubIcon,LinkedInIcon, YouTubeIcon];
  return (
    <Box>
      {socialicons.map((Element, index) => (
        <SocialIcons
          key={index}
          IconComponent={Element}
          onClick={() => console.log('Button clicked')}
        />
      ))}
    </Box>
  );
}
