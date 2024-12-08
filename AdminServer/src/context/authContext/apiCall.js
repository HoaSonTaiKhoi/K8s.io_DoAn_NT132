import axios from "axios";

import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async(user, dispatch) => {
  dispatch(loginStart());
  try {
    console.log(process.env);
    const res = await axios.post(`https://api-movie-qtm.qtmdoan.vn/api/auth/login`, user);
    dispatch(loginSuccess(res.data));
  } catch(err) {
    console.log(err);
    dispatch(loginFailure());
  }
}