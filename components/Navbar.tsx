import { useRouter } from "next/router";
import request from "../utils/requests";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="flex justify-center bg-gray-500 text-gray-200 select-none text-xl lg:text-2xl">
      {Object.entries(request).map(([key, { title, url }]: any, i: number) => (
        <h2
          onClick={() => router.push(`?genre=${key}`)}
          className="m-6 cursor-pointer hover:text-white active:text-blue-400"
          key={i}
        >
          {title}
        </h2>
      ))}
    </div>
  );
}
