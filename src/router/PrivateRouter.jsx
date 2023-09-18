import {Navigate} from "react-router-dom";
import NewBlog from "../pages/NewBlog";
import { useSelector } from "react-redux";
import { notify } from "../helper/sweetaAlert";

const PrivateRouter = () => {
  const { currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    notify("You must be logged in to use this feature", "error");
    return <Navigate to="/login" />;
}


    return <NewBlog />
}
  

export default PrivateRouter;
