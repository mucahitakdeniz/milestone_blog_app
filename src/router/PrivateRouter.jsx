import {useNavigate } from "react-router-dom";
import NewBlog from "../pages/NewBlog";
import { useSelector } from "react-redux";

const PrivateRouter = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const navigate =  useNavigate() 

  if (currentUser) {
    return <NewBlog />;
  } else {
    notify("You must be logged in to use this feature", "error");
    navigate("/login");
  }
};

export default PrivateRouter;
