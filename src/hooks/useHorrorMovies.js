import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addHorrorMovies } from "../utils/moviesSlice";

const useHorrorMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const HorrorMovies = useSelector((store) => store.movies.HorrorMovies);

  const getHorrorMovies = async () => {
    const data = await fetch(
      // "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addHorrorMovies(json.results));
  };

  useEffect(() => {
    !HorrorMovies && getHorrorMovies();
    getHorrorMovies();
  }, []);
};

export default useHorrorMovies;
