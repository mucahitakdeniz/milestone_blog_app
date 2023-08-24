import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Dishboard from "../component/Dishboard";
import About from "../component/About";
import NewBlog from "../component/NewBlog";
import ReadMore from "../component/ReadMore";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />}>
        <Route index element={<Dishboard />} />
        <Route path="/readmore" element={<ReadMore />} />

        <Route path="/about" element={<About />} />
        <Route path="/newblog" element={<NewBlog />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
