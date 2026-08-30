import { movies } from "@/Database/movies";

export const SetItemtoLocalStorage = ()  => {
  const data = localStorage.setItem("movies", JSON.stringify(movies));

  return data;
};
