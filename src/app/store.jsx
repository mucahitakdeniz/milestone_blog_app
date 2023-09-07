import cardsReducer from "../features/cardsSlice";
import authReducer from "../features/authSlice";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    auth: authReducer,
    card: cardsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
