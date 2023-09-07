import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "auth",
  initialState: 
  {
  "id": 0,
  "title": "string",
  "content": "string",
  "image": "http://example.com",
  "category": 0,
  "publish_date": "2019-08-24T14:15:22Z",
  "author": "string",
  "status": "d",
  "slug": "string",
  "comments": [],
  "category_name": "string",
  "likes": "string",
  "post_views": "string",
  "comment_count": "string",
  "likes_n": "string"
  },
  
  
});

export const {

} = cardsSlice.actions;
export default cardsSlice.reducer;
