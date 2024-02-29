import { Link, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";

const Footer = () => {
  return (
    <AppBar
      position="relative"
      sx={{
        with: "100%",
        height: "5rem",
        backgroundColor: "lightseagreen",
        bottom: "0px",
        margin:"auto"
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
        Developed by Mücahit Akdeniz
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
