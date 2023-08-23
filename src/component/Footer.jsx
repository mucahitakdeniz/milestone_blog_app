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
        marginTop: "auto",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          MarginY: "1rem",
        }}
      >
        Developed by FS Team
      </Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          MarginY: "1rem",
        }}
      >
        Copyright ©  <Link variant="a" href="https://clarusway.com/" sx={{color:"black", marginX:"1rem"}}>  Clarusway  </Link> 2023
      </Typography>
      
    </AppBar>
  );
};

export default Footer;
