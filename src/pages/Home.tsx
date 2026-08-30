import Navbar from "../components/Navbar";
import { Search } from "@/components/Search";
import Card from "../components/Card";
import { movies } from "../Database/movies";
import { useEffect } from "react";
import { SetItemtoLocalStorage } from "@/services/MovieService";


export default function Home() {

  useEffect(()=>{
     SetItemtoLocalStorage()
  })


  return (
    <>
      <Navbar />
      <div className="flex justify-center w-screen   bg-black ">
        <div className="flex-col items-center w-230 h-auto bg-[#0B0909] mt-10 border rounded-3xl">
          <div className="flex items-center justify-between p-4">
            <div className="p-4">
              <h1 className="text-3xl text-amber-50 font-bold">Tontonan Gua</h1>
            </div>
            <div>
              <Search />
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            {movies.map((m) => (
              <Card title={m.title} type={m.type} poster={m.poster} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
