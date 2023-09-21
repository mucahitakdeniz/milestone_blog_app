import { useEffect } from "react";
import Cards from "../component/Cards";
import useAxios from "../hooks/useAxios";
import { useSelector } from "react-redux";

const MyBlog = () => {
  const { blogsData } = useSelector((state) => state.blogs);
  const user = useSelector((state) => state.auth);
  const { axiosFn } = useAxios();
  useEffect(() => {
    axiosFn();
  }, []);
console.log(user);
  return <Cards cardsData={blogsData} userId={user} />;
};

export default MyBlog;