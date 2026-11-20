import Navbar from "../components/Navbar";
import { Search } from "@/components/Search";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { getMovies } from "@/services/MovieService";
import type { Movie } from "@/types/Movie";
import type { episodes } from "@/types/Episode";
import { getEpisode } from "@/services/EpisodeService";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [episodes, setEpisodes] = useState<episodes[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setMovies(getMovies());
    setEpisodes(getEpisode());
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase()),
  );
  return (

    <>
      <Navbar />

      <div className="flex justify-center w-screen bg-black">
        <div className="flex-col items-center w-230 h-auto bg-[#0B0909] mt-10 border rounded-3xl">
          <div className="flex items-center justify-between p-4">
            <div className="p-4">
              <h1 className="text-3xl text-amber-50 font-bold">Tontonan Gua</h1>
            </div>

            <div>
              <Search search={search} setSearch={setSearch} />
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            {filteredMovies.map((m) => {
              const episodeCount = episodes.filter((ep) => ep.idMovie === m.id).length;
              return (
                <Card
                  key={m.id}
                  id={m.id}
                  title={m.title}
                  type={m.type}
                  poster={m.poster}
                  episodeCount={episodeCount}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
