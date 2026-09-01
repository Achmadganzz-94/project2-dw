import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";

interface MovieCardProps {
  id: number;
  title: string;
  type: string;
  poster: string;
  episodeCount: number;
}

export default function Card({
  id,
  title,
  type,
  poster,
  episodeCount,
}: MovieCardProps) {
  return (
    <Link className="w-[45%]" to={`detail/${id}`}>
      <div className="flex bg-[] m-4 rounded-3xl border p-4">
        <div className="w-18 h-20 border mt-1 rounded-2xl overflow-hidden">
          <img
            className="w-full h-full rounded-2xl object-cover"
            src={poster}
            alt={title}
          />
        </div>

        <div className="flex flex-col ml-4 w-[80%]">
          <div className="flex mt-1 gap-3">
            <h1 className="text-amber-50 font-bold text-sm">{title}</h1>

            <Badge variant="secondary">{type}</Badge>
          </div>

          <div className="text-amber-50 text-xs mt-1">
            <h1>
              Jumlah Episode : <span>{episodeCount} Episode</span>
            </h1>
          </div>

          <div className="flex mt-3 gap-3">
            <Badge variant="secondary" className="bg-blue-500 text-amber-100">
              View Detail
            </Badge>
          </div>
        </div>
      </div>
    </Link>
  );
}
