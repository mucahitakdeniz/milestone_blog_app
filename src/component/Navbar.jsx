import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import { Link } from "@mui/material";

const Navbar = () => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ with: "100%" }}>
      <AppBar
        position="static"
        sx={{ with: "100%", height: "5rem", backgroundColor: "lightseagreen" }}
      >
        <Toolbar sx={{display:"flex",   justifyContent:"space-between"}}>
          <Box>
            <img
              src="https://lms.clarusway.com/pluginfile.php/1/core_admin/logocompact/300x300/1688763931/clarusway_LOGO_tek_png.png"
              width="50rem"
              height="50rem"
              alt="logo"
            />
            <Link
              color="#01020c"
              variant="button"
              underline="none"
              marginX={1}
              href="/"
            >
              Dashboard
            </Link>
            <Link
              color="#01020c"
              variant="button"
              underline="none"
              marginX={1}
              href="/register"
            >
              New Blog
            </Link>
            <Link
              color="#01020c"
              variant="button"
              underline="none"
              marginX={1}
              href="/login"
            >
              About
            </Link>
          </Box>
          <Box>
            {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
