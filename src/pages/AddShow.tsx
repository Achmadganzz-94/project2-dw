import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { addMovie, getMovies } from "@/services/MovieService";

export default function AddShow() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pilihan, setPilihan] = useState<string>("");

  // Menyimpan file asli
  const [gambarFile, setGambarFile] = useState<File | null>(null);

  // Menyimpan Base64 untuk preview + localStorage
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPilihan(event.target.value);
  };

  const tombolGambarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setGambarFile(file);

    const reader = new FileReader();

    reader.onload = () => {
      setPreviewUrl(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!title || !pilihan || !previewUrl) {
      alert("Title, Type, dan Poster wajib diisi");
      return;
    }

    const data = getMovies();

    const newData = {
      id: data.length + 1,
      title: title,
      type: pilihan,
      poster: previewUrl,
      is_watched: false,
      description: description,
    };


    addMovie(newData);

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

            <h1 className="text-2xl font-semibold">Add New Show / Movie</h1>
          </div>

          <div className="grid gap-8 md:grid-cols-[220px_1fr]">
            {/* Poster */}
            <div>
              <label
                htmlFor="poster"
                className="relative flex h-107.5 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg border border-dashed border-gray-600 bg-[#071321] transition hover:border-purple-500"
              >
                {previewUrl ? (
                  <img
                    src={previewUrl}
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
                onChange={tombolGambarChange}
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
                  className="w-full rounded-lg border border-gray-700 bg-[#071321] px-4 py-3 text-white outline-none focus:border-purple-500"
                  name="select"
                  value={pilihan}
                  onChange={handleChange}
                >
                  <option value="">Select type</option>

                  <option value="Movie">Movie</option>

                  <option value="Series">Series</option>

                  <option value="Anime">Anime</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Description
                  <span className="ml-1 text-gray-500">(Optional)</span>
                </label>

                <textarea
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Short description about this show or movie..."
                  rows={7}
                  className="w-full resize-none rounded-lg border border-gray-700 bg-[#071321] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="rounded-lg border border-gray-700 px-6 py-3 font-medium transition hover:bg-gray-800"
                >
                  Cancel
                </button>

                <button
                  onClick={handleSubmit}
                  type="button"
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
