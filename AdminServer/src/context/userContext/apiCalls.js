import axios from "axios";
import { createUserFailure, createUserStart, createUserSuccess, deleteUserSuccess, getUsersFailure, getUsersStart, getUsersSuccess } from "./UserActions";
import { deleteUserFailure, deleteUserStart } from "./UserActions";
export const getUsers = async (dispatch) => {
  
  try {
    const res = await axios.get(`https://api-movie-qtm.qtmdoan.vn/api/users`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailure());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete(`https://api-movie-qtm.qtmdoan.vn/api/users/` + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};

export const createUser = async (user, dispatch) => {
  dispatch(createUserStart());
  try {
    const res = await axios.post(`https://api-movie-qtm.qtmdoan.vn/api/users`, user, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createUserSuccess(res.data));
  } catch (err) {
    dispatch(createUserFailure());
  }
};