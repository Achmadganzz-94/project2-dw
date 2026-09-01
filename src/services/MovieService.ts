import { movies } from "@/Database/movies";
import type { Movie } from "@/types/Movie";

export const getMovies = (): Movie[] => {
  const data = localStorage.getItem("movies");

  if (!data) {
    localStorage.setItem("movies", JSON.stringify(movies));
    return movies;
  }

  return JSON.parse(data);
};

export const addMovie = (movie: any): void => {
  const dataLama = getMovies();

  const dataBaru = [...dataLama, movie];

  localStorage.setItem("movies", JSON.stringify(dataBaru));
};

export const updateMovie = (updateMovie : Movie): void => {
  const dataLama = getMovies();
  const dataBaru = dataLama.map((movies) => {
    if(movies.id === updateMovie.id) {
      return updateMovie;
    }

    return movies;
  })
 localStorage.setItem("movies", JSON.stringify(dataBaru));
};
