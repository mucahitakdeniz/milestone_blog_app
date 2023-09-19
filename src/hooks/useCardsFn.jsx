import { fetchFail, fetchStart, readCards,createBlogSuccess } from "../features/cardsSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { notify } from "../helper/sweetaAlert";

const useCardsFn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const readMore = async (id) => {
    dispatch(fetchStart());
    try {
      console.log(token);

      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/blogs/${id}/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      dispatch(readCards(data));
      console.log(data);
      navigate("/ReadMore");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  const createBlog = async (blog) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/blogs/`,
        blog,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      dispatch(createBlogSuccess(data));

      console.log(data);

      notify("Creating a new blog is successful", "success");

      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      notify("Creating a new blog is not successful", "error");
    }
  };
  return { readMore, createBlog };
};
export default useCardsFn;
