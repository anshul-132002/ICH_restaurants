import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from "@mui/icons-material/GitHub";
import CoffeeSharpIcon from '@mui/icons-material/CoffeeSharp';
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}>
        <Box
          sx={{
            my: 3,
            "& a": {
              fontSize: "1rem", // Adjust the font size here
              cursor: "pointer",
              mr: 3,
              color: "white",
              textDecoration: "none",
            },
            "& a:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <a href="https://www.instagram.com/anshul_shrivas____13/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/in/anshul-shrivas-63a087247/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/anshul-132002" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a href="https://www.buymeacoffee.com/anshulcOdes" target="_blank" rel="noopener noreferrer">
            <CoffeeSharpIcon />
          </a>
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1rem", // Default font size
            "@media (max-width:600px)": {
              fontSize: "0.8rem", // Adjust font size for smaller screens
            },
          }}
        >
          All Rights Reserved &copy; Anshul Shrivas
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
