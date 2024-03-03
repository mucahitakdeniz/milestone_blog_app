import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import { Avatar, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuthCall from "../hooks/useAuthCall";
import { deepOrange } from "@mui/material/colors";
import { useEffect } from "react";

import MenuDrawer from "./MenuDrawer";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const { logout } = useAuthCall();

  const { currentUser, image } = useSelector((state) => state.auth);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleLogOut = () => {
    navigate("/");
    logout();
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Box>
      <AppBar
        position="static"
        component="nav"
        sx={{
          width: "100%",
          height: "6rem",
          backgroundColor: "lightseagreen",
          margin: "auto",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          {windowWidth <= 600 ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <MenuDrawer open={open} toggleDrawer={toggleDrawer} />
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center" }}>
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
                sx={{ "&:hover": { color: "lightpink" } }}
              >
                Ana Sayfa
              </Link>
              <Link
                color="#01020c"
                variant="button"
                underline="none"
                marginX={1}
                href="/newblog"
                sx={{ "&:hover": { color: "lightpink" } }}
              >
                Yeni Blog
              </Link>
              <Link
                color="#01020c"
                variant="button"
                underline="none"
                marginX={1}
                href="/about"
                sx={{ "&:hover": { color: "lightpink" } }}
              >
                Hakkında
              </Link>
            </Box>
          )}
          <Box>
            {currentUser ? (
              <div>
                {image ? (
                  <Avatar
                    src={image}
                    sx={{
                      width: "4.5rem",
                      height: "4.5rem",
                      "&:hover": { cursor: "pointer" },
                    }}
                    onClick={handleMenu}
                  />
                ) : (
                  <Avatar
                    sx={{
                      bgcolor: deepOrange[500],
                      width: "5rem",
                      height: "5rem",
                      marginTop: "1rem",
                      "&:hover": { cursor: "pointer" },
                    }}
                    onClick={handleMenu}
                  >
                    {currentUser.slice(0, 4).toLocaleUpperCase()}
                  </Avatar>
                )}
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
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      navigate("myblog");
                    }}
                  >
                    Bloglarım
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      navigate("/profile");
                    }}
                  >
                    Profil
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleLogOut();
                    }}
                  >
                    Çıkış
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <Button
                sx={{
                  bgcolor: deepOrange[600],
                  color: "white",
                  "&:hover": { cursor: "pointer", bgcolor: deepOrange[900] },
                }}
                onClick={() => navigate("/login")}
              >
                Giriş yap
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
