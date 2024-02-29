import { Link, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";

const Footer = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        with: "100%",
        height: "5rem",
        backgroundColor: "lightseagreen",
        bottom: "1rem",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        Developed by Mücahit Akdenix
      </Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        2023
      </Typography>
    </AppBar>
  );
};

export default Footer;
