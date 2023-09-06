import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { notify } from "../helper/sweetaAlert";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (user) => {
    dispatch(fetchStart());
    try {
      console.log(import.meta.env.VITE_BASE_URL);
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/auth/login/`,
        user
      );
      console.log("succses");
      dispatch(loginSuccess(data));
      notify("Login successful", "succsess");
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      notify("Login failed", "error");
    }
  };
  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/users/auth/logout/`);
      dispatch(logoutSuccess());
      notify("Logout successful", "succsess");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      notify("Logout failed", "error");
    }
  };
  const register = async (user) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `https://33438.fullstack.clarusway.com/users/register/`,
        user
      );
      dispatch(registerSuccess(data));
      notify("Register successful", "succsess");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      notify("Register failed", "error");
    }
  };
  return { login, logout, register };
};

export default useAuthCall;
