import { useNavigate, useParams } from "react-router-dom";
import { BsTrash3Fill } from "react-icons/bs";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { getMovies, updateMovie } from "@/services/MovieService";
import type { Movie } from "@/types/Movie";

export default function EditShow() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [previewUrl, setPreviewUrl] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setMovie((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const okChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setMovie((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    const getAllMovie = getMovies();

    const filmSesuai = getAllMovie.find((movie) => movie.id == Number(id));

    if (!filmSesuai) {
      return console.log("film tidak di temukan");
    }
    setMovie(filmSesuai);
    setPreviewUrl(filmSesuai?.poster);
  }, []);

  const updateSave = () => {
    if (!movie) return;

    updateMovie(movie);

    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#020b16] text-white p-6">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-8 flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="text-3xl text-gray-300 transition hover:text-white"
            >
              ←
            </button>

            <h1 className="text-2xl font-semibold">Edit Show / Movie</h1>
          </div>

          <div className="grid gap-8 md:grid-cols-[220px_1fr] items-start ">
            <div className="mt-9 rounded-2xl">
              <label
                htmlFor="poster"
                className="flex h-80 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-gray-600 bg-[#071321] transition hover:border-purple-500"
              >
                {previewUrl ? (
                  <img
                    src={movie?.poster}
                    alt="Preview Poster"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <>
                    <div className="mb-4 text-5xl">🖼️</div>

                    <h2 className="text-lg font-semibold">Upload Poster</h2>

                    <p className="mt-2 text-sm text-gray-400">
                      JPG, PNG (Max. 2MB)
                    </p>
                  </>
                )}
              </label>

              <input
                id="poster"
                type="file"
                accept="image/jpeg,image/png"
                className="hidden"
              />
            </div>

            {/* Fields */}
            <div className="space-y-6">
              {/* Title */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Title <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="title"
                  value={movie?.title ?? ""}
                  onChange={handleChange}
                  placeholder="e.g. Attack on Titan"
                  className="w-full rounded-lg border border-gray-700 bg-[#071321] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500"
                />
              </div>

              {/* Type */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Type <span className="text-red-500">*</span>
                </label>

                <select
                  name="type"
                  value={movie?.type ?? ""}
                  onChange={okChange}
                  className="w-full rounded-lg border border-gray-700 bg-[#071321] px-4 py-3 text-white outline-none focus:border-purple-500"
                >
                  <option value="">Select type</option>
                  <option value="Movie">Movie</option>
                  <option value="Series">Series</option>
                  <option value="Anime">Anime</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Description
                  <span className="ml-1 text-gray-500">(Optional)</span>
                </label>

                <textarea
                  name="description"
                  value={movie?.description ?? ""}
                  onChange={handleChange}
                  placeholder="Short description about this show or movie..."
                  rows={7}
                  className="w-full resize-none rounded-lg border border-gray-700 bg-[#071321] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="rounded-lg border border-gray-700 px-6 py-3 font-medium transition hover:bg-gray-800"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={updateSave}
                  className="rounded-lg bg-purple-600 px-8 py-3 font-medium transition hover:bg-purple-800"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
