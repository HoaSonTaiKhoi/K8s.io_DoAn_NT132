import axios from "axios";
import { createMovieFailure, createMovieStart, createMovieSuccess, deleteMovieSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MovieActions";
import { deleteMovieFailure, deleteMovieStart } from "./MovieActions";
export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    console.log(process.env);
    const res = await axios.get(`https://api-movie-qtm.qtmdoan.vn/api/movies`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFailure());
  }
};

export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete(`https://api-movie-qtm.qtmdoan.vn/api/movies/` + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFailure());
  }
};

export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post(`https://api-movie-qtm.qtmdoan.vn/api/movies`, movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFailure());
  }
};