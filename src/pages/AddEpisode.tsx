import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InfoIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { useParams } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { getEpisode, addEpisode } from "@/services/EpisodeService";

export default function Addepisode() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [idepisode, setIdepisode] = useState(Number);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState(false);

      useEffect(() => {
        const dataEpisode = getEpisode();
        setIdepisode(Number(dataEpisode.length + 1));
      }, []);

  const handleSubmit = () => {
    if (!id || !title || !link) {
      alert("semua wajib di isi");
      return;
    }

    const newEpisode = {
      id: idepisode,
      idMovie: Number(id),
      title: title,
      link: link,
      Notes: notes,
      status: status,
    };

    console.log(newEpisode);

    addEpisode(newEpisode);

    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#020b16] text-white p-6 ">
        <div className="mx-auto max-w-5xl  gap-2 flex flex-col justify-center ">
          <div className="mb-8 flex items-center gap-4 border-b p-4">
            <button
              onClick={() => navigate(-1)}
              className="text-3xl text-gray-300 transition hover:text-white"
            >
              ←
            </button>
            <h1 className="text-2xl font-semibold">Add Episode</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 border rounded-2xl p-4">
            <div className="flex flex-row w-200 gap-4 mt-2">
              <Field>
                <FieldLabel htmlFor="input-required">
                  Episode Title <span className="text-destructive">*</span>
                </FieldLabel>
                <Input
                  id="input-required"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g Demon Slayer"
                  required
                />
                <FieldDescription>Title Episode wajib diisi!!</FieldDescription>
              </Field>
            </div>

            <Field className="w-200">
              <FieldLabel htmlFor="input-group-url">
                Link URL ( Youtube/ Netflix/ Other )
              </FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id="input-group-url"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="www.youtube.com........"
                />
                <InputGroupAddon>
                  <InputGroupText>https://</InputGroupText>
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">
                  <InfoIcon />
                </InputGroupAddon>
              </InputGroup>
            </Field>

            <Field className="w-200">
              <FieldLabel htmlFor="textarea-message">
                Notes (Optional)
              </FieldLabel>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                id="textarea-message"
                placeholder="Masukkan Catatan Anda!"
              />
            </Field>

            <div className="flex flex-col w-200 ">
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
                  onClick={handleSubmit}
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
