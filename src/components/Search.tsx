import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

type SearchProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export function Search({ search, setSearch }: SearchProps) {
  const navigate = useNavigate();

  return (
    <Field orientation="horizontal">
      <Input
        className="text-amber-50"
        type="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Button
        onClick={() => navigate("/AddShow")}
        className="bg-amber-50 hover:bg-amber-100 text-black"
      >
        + Add List
      </Button>
    </Field>
  );
}
