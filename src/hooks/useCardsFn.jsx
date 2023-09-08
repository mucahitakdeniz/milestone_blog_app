import { fetchFail, fetchStart, readCards } from "../features/cardsSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const useCardsFn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const readMore = async (id) => {
    dispatch(fetchStart());
    try {
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
    finally{
      console.log(token);
    }
  };
  return { readMore };
};
export default useCardsFn;
