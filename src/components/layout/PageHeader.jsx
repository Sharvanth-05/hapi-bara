import { CiSearch } from "react-icons/ci";
import { Changa_One } from "next/font/google";

const changaFont = Changa_One({ subsets: ["latin"], weight: ["400"] });

export default function PageHeader({ search, setSearch, title, placeholder, icon }) {
  return (
    <div className="sticky pt-5 -mt-5 top-20 z-40 bg-white">
      <div className={`${changaFont.className} flex items-center text-4xl justify-center`}>
        <h1 className="flex gap-2 text-neutral-700 pl-4 pr-4 ">
          {icon} {title}
        </h1>
      </div>
      <div className="relative w-full flex justify-center mt-5">
        <div className="relative w-[80%] md:w-1/2 pb-2">
          <input
            className="w-full p-3 pl-10 md:p-2 md:pl-10 border rounded-lg border-neutral-300 text-[1em]"
            type="search"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={placeholder}
          />
          <CiSearch className="absolute text-neutral-500 h-6 w-6 top-[50%] left-3 transform -translate-y-[70%]" />
        </div>
      </div>
    </div>
  );
}