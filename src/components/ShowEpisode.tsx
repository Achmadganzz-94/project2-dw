import { BsLink45Deg, BsTrashFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import type { episodes } from "@/types/Episode";

export function ShowEpisode({
  idEpisode,
  idMovie,
  title,
  poster,
  nomor,
  dataepisode,
}: any) {
  const { id } = useParams();


  console.log("data episode di ShowEpisode:", dataepisode);

  const handleDelete = (): void => {
    const konfirmasi = window.confirm(
      `Apakah Anda yakin ingin menghapus episode "${title}"?`,
    );

    if (konfirmasi) {
      const savedEpisode = localStorage.getItem("episodes");

      if (savedEpisode) {
        const currentEpisode: episodes[] = JSON.parse(savedEpisode);

        const updatedEpisode = currentEpisode.filter(
          (ep) => ep.id !== Number(idEpisode) || ep.idMovie !== Number(idMovie),
        );

        localStorage.setItem("episodes", JSON.stringify(updatedEpisode));

        alert("Episode berhasil dihapus!");

        window.location.reload();
      }
    }
  };

  return (
    <>
      <Link to={`/EditEpisode/${idMovie}/${idEpisode}`}>
        <div className="flex h-20 border-t border-b items-center p-4 gap-4 justify-around">
          <h1 className="font-bold">{nomor}</h1>
          <div className="w-14 h-16 border rounded-2xl overflow-hidden">
            <img
              src={poster}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-bold text-violet-700">{title}</p>
          <div className="text-3xl">
            <BsLink45Deg />
          </div>
          <p className="font-bold text-blue-600">Youtube</p>
          <button
            className=" text-red-500 rounded-lg border border-red-700 px-6 py-3 font-medium transition hover:bg-red-500"
            onClick={(e) => {
              e.preventDefault();
              handleDelete();
            }}
          >
            <BsTrashFill />
          </button>
        </div>
      </Link>
    </>
  );
}
