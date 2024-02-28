import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { Box, Container } from "@mui/material";

const Home = () => {
  return (
    <Box component="div">
      <Navbar />
      <Container>
        <Outlet />
      </Container>

      <Footer />
    </Box>
  );
};

export default Home;
