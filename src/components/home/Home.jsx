import { Edu_NSW_ACT_Cursive, Changa_One } from "next/font/google";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import CategoryCards from "./CategoryCards";
import Trending from "./Trending";

const changaFont = Changa_One({
  subsets: ["latin"],
  weight: ["400"],
});

const cursiveFont = Edu_NSW_ACT_Cursive({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col items-center p-2 pl-4 pr-4 gap-3">
        <h1
          className={`${changaFont.className} text-5xl md:text-6xl font-bold mt-10 text-white pl-4 pr-4 pb-1 rounded-lg bg-amber-400`}
        >
          HAPI-AP
        </h1>
        <h1 className="text-3xl text-center md:text-4xl font-bold">
          Align your Food, Nourish Your Soul
        </h1>
        <p
          className={`${cursiveFont.className} text-neutral-500 text-[11px] md:text-lg md:font-light font-bold`}
        >
          Cook with kindness, eat with purpose, and feel the difference.
        </p>
      </div>
      <CategoryCards />
      <div className="flex w-[90%] mt-10 items-center justify-between font-bold">
        <div className="font-bold border-b p-1 pl-2 pr-2">
          <h1 className="flex items-center gap-1 md:text-[1em] text-sm">
            <FaFire />
            Trending this week
          </h1>
        </div>
        <div className="flex shadow-amber-400">
          <Link
            className="flex items-center gap-1 text-sm pl-2 pr-2 p-1 rounded-sm text-white bg-amber-400"
            href=""
          >
            More <IoAdd size={20} />
          </Link>
        </div>
      </div>
      <Trending />
    </div>
  );
}
