import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Code as CodeIcon } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#5956E9", // Material-UI primary color
        color: "white",
        padding: "20px",
        textAlign: "center",
        marginTop: "auto", // Pushes footer to the bottom
      }}
    >
      <Typography variant="body1" sx={{ marginBottom: "10px" }}>
        Connect with me:
      </Typography>

      {/* LinkedIn Link */}
      <IconButton
        color="inherit"
        href="https://www.linkedin.com/in/your-linkedin-profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon fontSize="large" />
      </IconButton>

      {/* GitHub Link */}
      <IconButton
        color="inherit"
        href="https://github.com/your-github-username"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon fontSize="large" />
      </IconButton>

      {/* Coding Profiles Link */}
      <IconButton
        color="inherit"
        href="https://leetcode.com/u/mr_cep"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CodeIcon fontSize="large" />
      </IconButton>

      <Typography variant="body2" sx={{ marginTop: "10px" }}>
        © {new Date().getFullYear()} Deep Narayan Maurya. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;