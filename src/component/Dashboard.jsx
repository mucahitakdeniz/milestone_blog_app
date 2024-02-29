import { useEffect, useState } from "react";
import Cards from "./Cards";
import useBloggsFn from "../hooks/useBlogsFn";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import SearchField from "./SearchField";

const Dashboard = () => {
  const { blogsData } = useSelector((state) => state.blogs);
  const { getBlogs } = useBloggsFn();
  const [search, setSearch] = useState();

  const filterBlogs = blogsData.filter(
    (blog) =>
      blog.content.toLowerCase().includes(search?.toLowerCase() || "") &&
      blog.status === "p"
  );

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <Box>
      <SearchField setSearch={setSearch} search={search} />
      {blogsData.lenght > 0 ? (
        <Cards blogsData={filterBlogs} />
      ) : (
        <img
          src="https://serpstat.com/img/blog/how-to-create-a-5xx-error-page/1564678552pPwxC6P.png"
          width="100%"
          height="100%"
          sx
        />
      )}
    </Box>
  );
};

export default Dashboard;
