import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InfoIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import { getEpisode, updateEpisode } from "@/services/EpisodeService";
import type { episodes } from "@/types/Episode";

export default function EditEpisode() {
  const { idMovie, idEpisode } = useParams();
  const navigate = useNavigate();

  const [episode, setEpisode] = useState<episodes | null>(null);

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const dataEpisode = getEpisode();

    const findEpisode = dataEpisode.find(
      (ep) => ep.id === Number(idEpisode) && ep.idMovie === Number(idMovie),
    );

    if (!findEpisode) {
      console.log("Episode tidak ditemukan");
      return;
    }

    console.log("Episode ditemukan:", findEpisode);

    setEpisode(findEpisode);

    setTitle(findEpisode.title);
    setUrl(findEpisode.link);
    setNotes(findEpisode.Notes);
  }, [idMovie, idEpisode]);

  const handleUpdate = () => {
    if (!episode) return;

    if (!title.trim()) {
      alert("Judul episode wajib diisi!");
      return;
    }
    const updatedEpisode: episodes = {
      ...episode,
      title: title,
      link: url,
      Notes: notes,
    };

    updateEpisode(updatedEpisode);

    navigate(-1);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#020b16] text-white p-6">
        <div className="mx-auto max-w-5xl gap-2 flex flex-col justify-center">
          {/* HEADER */}
          <div className="mb-8 flex items-center gap-4 border-b p-4">
            <button
              onClick={() => navigate(-1)}
              className="text-3xl text-gray-300 transition hover:text-white"
            >
              ←
            </button>

            <h1 className="text-2xl font-semibold">Edit Episode</h1>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 border rounded-2xl p-4">
            {/* TITLE */}
            <div className="flex flex-row w-200 gap-4 mt-2">
              <Field>
                <FieldLabel htmlFor="episode-title">
                  Episode Title <span className="text-destructive">*</span>
                </FieldLabel>

                <Input
                  id="episode-title"
                  placeholder="e.g Demon Slayer"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />

                <FieldDescription>Title Episode wajib diisi!!</FieldDescription>
              </Field>
            </div>

            {/* URL */}
            <Field className="w-200">
              <FieldLabel htmlFor="episode-url">
                Link URL ( Youtube/ Netflix/ Other )
              </FieldLabel>

              <InputGroup>
                <InputGroupInput
                  id="episode-url"
                  placeholder="www.youtube.com........"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />

                <InputGroupAddon>
                  <InputGroupText>https://</InputGroupText>
                </InputGroupAddon>

                <InputGroupAddon align="inline-end">
                  <InfoIcon />
                </InputGroupAddon>
              </InputGroup>
            </Field>

            {/* NOTES */}
            <Field className="w-200">
              <FieldLabel htmlFor="episode-notes">Notes (Optional)</FieldLabel>

              <Textarea
                id="episode-notes"
                placeholder="Masukkan Catatan Anda!"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </Field>

            {/* BUTTON */}
            <div className="flex flex-col w-200">
              <div className="flex justify-end items-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="rounded-lg border border-gray-700 px-6 py-3 font-medium transition hover:bg-gray-800"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleUpdate}
                  className="rounded-lg bg-purple-600 px-8 py-3 font-medium transition hover:bg-purple-800"
                >
                  Simpan Perubahan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
