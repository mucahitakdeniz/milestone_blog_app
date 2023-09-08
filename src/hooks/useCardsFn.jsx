import { fetchFail, fetchStart, readCards } from "../features/cardsSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

const useCardsFn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const readMore = async (id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/blogs/${id}/`
      );
      dispatch(readCards(data));
      console.log(data);
      navigate("/ReadMore");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  return{readMore}
};
export default useCardsFn;