import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

const Loading = () => {
  const { loading: authLoading } = useSelector((state) => state.auth);
  const { loading: blogsLoading } = useSelector((state) => state.blogs);

  const isLoading = authLoading || blogsLoading 
  return (
    <>
      {isLoading && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="fixed"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bgcolor="rgba(255, 255, 255, 0.7)"
          zIndex={9999}
        >
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTVxcG00Nzd0dHRnZTducnF4cHB1NXVjeW5waW5wazNsc29zcW93dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZO9b1ntYVJmjZlsWlm/giphy.gif"
            width="100px"
            height="100px"
            alt="loading"
          />
        </Box>
      )}
    </>
  );
};

export default Loading;
