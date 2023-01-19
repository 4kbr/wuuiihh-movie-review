import { ConstartVar as ConstantVar } from "@/utils/constant_var";
import * as Outline from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Card({ result }: any) {
  console.log(result);
  console.log(typeof result);

  return (
    <div>
      <Image
        src={`${ConstantVar.image}/${result.backdrop_path}`}
        alt={`${result.title}`}
        width={200}
        height={100}
        layout="responsive"
      />
      <div className="">
        <p className="truncate">{result.overview}</p>
        <h2>{result.title || result.name}</h2>
        <p>
          {result.release_date || result.first_air_date}
          <Outline.HandThumbUpIcon className="h-5" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}
