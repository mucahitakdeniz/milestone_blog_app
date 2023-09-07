import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "card",
  initialState: {
    loading: false,
    error: false,
    id: null,
    title: null,
    content: null,
    image: null,
    category: null,
    publish_date: null,
    author: null,
    status: null,
    slug: null,
    comments: null,
    category_name: null,
    likes: null,
    post_views: null,
    comment_count: null,
    likes_n: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    readCards: (state, { payload }) => {
      state.loading = false;
      state.id = payload?.id;
      title = payload?.title;
      content = payload?.content;
      image = payload?.image;
      category = payload?.categoty;
      publish_date = payload?.publish_date;
      author = payload?.author;
      status = payload?.status;
      slug = payload?.slug;
      comments = payload?.comments;
      category_name = payload?.category_name;
      likes = payload?.likes;
      post_views = payload?.post_views;
      comment_count = payload?.comment_count;
      likes_n = payload?.likes_n;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, readCards, fetchFail } = cardsSlice.actions;
export default cardsSlice.reducer;
