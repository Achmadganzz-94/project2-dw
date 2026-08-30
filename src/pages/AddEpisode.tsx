import { useNavigate } from "react-router-dom";
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";





export default function Addepisode() {
  const navigate = useNavigate()
    return (
      <>
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
                    Episode Number <span className="text-destructive">*</span>
                  </FieldLabel>
                  <Input id="input-required" placeholder="e.g 1" required />
                  <FieldDescription>
                    Nomor Episode wajib diisi!!
                  </FieldDescription>
                </Field>

                <Field>
                  <FieldLabel htmlFor="input-required">
                    Episode Title <span className="text-destructive">*</span>
                  </FieldLabel>
                  <Input
                    id="input-required"
                    placeholder="e.g Demon Slayer"
                    required
                  />
                  <FieldDescription>
                    Title Episode wajib diisi!!
                  </FieldDescription>
                </Field>
              </div>

              <Field className="w-200">
                <FieldLabel htmlFor="input-group-url">
                  Link URL ( Youtube/ Netflix/ Other )
                </FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="input-group-url"
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
                  id="textarea-message"
                  placeholder="Masukkan Catatan Anda!"
                />
              </Field>

              <div className="flex flex-col w-200 ">
                <h1>Status</h1>
                <div className="p-2">
                  <RadioGroup defaultValue="comfortable" className="w-fit flex gap-4">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="default" id="r1" />
                      <Label htmlFor="r1">Belum Ditonton</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="comfortable" id="r2" />
                      <Label htmlFor="r2">Sudah Ditonton</Label>
                    </div>
                  </RadioGroup>
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