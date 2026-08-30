import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export function Search() {
  const navigate = useNavigate();
  return (
    <Field orientation="horizontal">
      <Input className="text-amber-50" type="search" placeholder="Search..." />
      <Button 
      onClick={() => navigate("/AddShow")}
      className={"bg-amber-50 hover:bg-amber-100 text-black"}>+ Add List</Button>
    </Field>
  );
}
