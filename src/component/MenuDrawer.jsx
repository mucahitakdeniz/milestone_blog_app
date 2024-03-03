import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Box, Drawer, Link } from "@mui/material";
import ReorderIcon from "@mui/icons-material/Reorder";
import { bgcolor, margin } from "@mui/system";

const MenuDrawer = ({ toggleDrawer, open }) => {
  const DrawerList = (
    <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "1rem",
          bgcolor: "lightseagreen",
        }}
      >
        <img
          src="https://lms.clarusway.com/pluginfile.php/1/core_admin/logocompact/300x300/1688763931/clarusway_LOGO_tek_png.png"
          width="70rem"
          height="70rem"
          alt="logo"
        />
      </Box>

      <Divider />
      <Box sx={{ bgcolor: "lightseagreen", height: "100vh" }}>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
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
        </List>
        <Divider />
      </Box>
    </Box>
  );

  return (
    <div>
      <ReorderIcon
        sx={{
          fontSize: "3rem",
          "&:hover": { cursor: "pointer", color: "#f44336" },
        }}
        onClick={toggleDrawer(true)}
      />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
