import { ConstartVar as ConstantVar } from "@/utils/constant_var";
import * as Outline from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Card({ result }: any) {
  console.log(result);
  console.log(typeof result);

  return (
    <div className="p-3 cursor-pointer hover:text-white active:to-blue-400 xl:hover:scale-105 transition-transform duration-300">
      <Image
        src={`${ConstantVar.image}/${result.backdrop_path}`}
        alt={`${result.title}`}
        width={200}
        height={100}
        layout="responsive"
      />
      <div className="p-2">
        <p className="truncate text-lg">{result.overview}</p>
        <h2 className="text-lg font-bold">{result.title || result.name}</h2>
        <p className="flex items-center">
          {result.release_date || result.first_air_date}
          <Outline.HandThumbUpIcon className="h-5 ml-3 mr-1" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}
