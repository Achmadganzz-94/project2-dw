import { useNavigate, useParams } from "react-router-dom";
import { BsTrashFill } from "react-icons/bs";
import Navbar from "@/components/Navbar";
import { BsPencil } from "react-icons/bs";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import type { Movie } from "@/types/Movie";
import { getMovies } from "@/services/MovieService";
import { Link } from "react-router-dom";
import { ShowEpisode } from "@/components/ShowEpisode";
import { getEpisode } from "@/services/EpisodeService";
import type { episodes } from "@/types/Episode";

export default function detail() {
  const { id } = useParams();
  const [title, setTitle] = useState("");

  const [episode, setEpisode] = useState<episodes[]>([]);
  const navigate = useNavigate();

  const [movie, Setmovie] = useState<Movie | null>(null);
  useEffect(() => {
    const nonton = getMovies();
    const film = nonton.find((video) => video.id === Number(id));
    if (!film) {
      return console.log("masih kosong");
    }
    setTitle(film.title);
    Setmovie(film ?? null);
    const dataEpisode = getEpisode();
    const findEpisode = dataEpisode.filter((ep) => ep.idMovie === Number(id));
    setEpisode(findEpisode);
  }, [id]);

  const handleDelete = (): void => {
    const konfirmasi = window.confirm(
      `Apakah Anda yakin ingin menghapus film "${movie?.title}"?`,
    );

    if (konfirmasi) {
      const savedMovies = localStorage.getItem("movies");

      if (savedMovies) {
        const currentMovies: Movie[] = JSON.parse(savedMovies);

        // 2. Filter data untuk membuang film dengan ID yang sedang dibuka
        const updatedMovies = currentMovies.filter(
          (video) => video.id !== Number(id),
        );

        // 3. Simpan kembali array yang sudah diperbarui ke localStorage
        localStorage.setItem("movies", JSON.stringify(updatedMovies));
        alert("Film berhasil dihapus!");
        navigate("/");
      }
    }
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#020b16] text-white p-6 ">
        <div className="mx-auto max-w-5xl  gap-2 flex flex-col justify-center border rounded-2xl p-4">
          <div className="mb-8 flex items-center gap-4 border-b p-4">
            <button
              onClick={() => navigate(-1)}
              className="text-3xl text-gray-300 transition hover:text-white"
            >
              ←
            </button>
            <h1 className="text-2xl font-semibold">Movie {id}</h1>
            <div className="flex ml-auto gap-3">
              <button
                onClick={() => navigate(`/EditShow/${id}`)}
                className=" flex items-center gap-2 justify-center  text-blue-600  rounded-lg border border-blue-600 px-6 py-3 font-medium transition hover:bg-amber-100 "
              >
                <BsPencil />
                Edit
              </button>

              <button
                onClick={handleDelete}
                className=" text-red-500 rounded-lg border border-red-700 px-6 py-3 font-medium transition hover:bg-amber-100"
              >
                <BsTrashFill />
              </button>
            </div>
          </div>

          <div className="flex ">
            <div className="w-30 h-50 p-4 border rounded-3xl ml-4">
              <img
                src={movie?.poster}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col px-6 py-3 ">
              <h1 className="mb-3 font-bold">{movie?.title}</h1>
              <div className="flex items-center gap-5">
                <Badge className="text-sm bg-blue-600">{movie?.type}</Badge>
              </div>
              <h1 className="mb-3 font-bold mt-2">Description :</h1>
              <div>{movie?.description}</div>
            </div>
          </div>
          <div className="flex justify-between p-4 border-b">
            <h1 className="font-bold">Episode</h1>
            <Link
              to={`/AddEpisode/${id}`}
              className={
                "bg-violet-700 hover:bg-violet-300 text-amber-50 p-2 rounded-2xl "
              }
            >
              + Add Episode
            </Link>
          </div>
          <div>
            {episode.map((ep, index) => (
              <ShowEpisode
                dataepisode={ep}
                key={ep.id}
                nomor={index + 1}
                idEpisode={String(ep.id)}
                idMovie={String(ep.idMovie)}
                title={ep.title}
                poster={movie?.poster}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
