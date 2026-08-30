import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import t3 from "./../assets/menu.png";

interface movies {
  title: string;
  type: string;
  poster: string;
}
export default function Card({ title, type, poster }: movies) {
  const navigate = useNavigate();
  
  return (
    <>
      <div  className="w-[45%] flex h-25 bg-[] m-4 rounded-3xl border p-4 ">
        <div className="w-16 h-[90%] border mt-1 rounded-2xl ">
          <img
            className="w-full h-full rounded-2xl"
            src={poster}
            alt=""
          />
        </div>
        <div className="flex flex-col ml-4">
          <div className="flex mt-1 gap-3 ">
            <h1 className="text-amber-50 font-bold text-sm">{title}</h1>
            <Badge variant="secondary">{type}</Badge>
          </div>
          <div className="text-amber-50 text-xs mt-1">
            <h1>
              1 Season •<span> 0 Episode</span>
            </h1>
          </div>
          <div className="w-[210%] h-1 bg-amber-50 mt-2 rounded-2xl">
            <div className="w-[50%] h-full bg-amber-300 rounded-2xl"></div>
          </div>
        </div>
        <div className=" w-[45%] flex justify-end">
          <div className=" ">
            <img src={t3} alt="" className="w-6 h-6 " />
            <h1 className="text-amber-500 text-xs font-bold mt-5.5">50%</h1>
          </div>
        </div>
      </div>
    </>
  );
}
