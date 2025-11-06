import { Changa_One } from "next/font/google";
import { CiSearch } from "react-icons/ci";

const changaFont = Changa_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Header() {
  return (
    <nav className="fixed top-0 z-100 flex items-center bg-white justify-between pl-4 pr-4 md:pl-10 md:pr-10 w-full h-20">
      <div>
        <h1 className={`${changaFont.className} text-3xl bg-amber-400 pb-0.5 md:text-4xl text-white pl-2 pr-2 rounded-sm shadow-2xl shadow-black/30`}>HAPI-AP</h1>
      </div>
      <div className="relative">
        {/* Mobile input */}
        <input
          className="block md:hidden p-3 pl-10 border rounded-lg border-neutral-300 w-40 text-[10px]"
          type="search"
          name="search"
          placeholder="Search for recipes..."
        />
        {/* Desktop/Tablet input */}
        <input
          className="hidden md:block md:p-2 md:pl-10 border rounded-lg border-neutral-300 md:w-75 text-[1em]"
          type="search"
          name="search"
          placeholder="Search your fav recipes.."
        />
        <CiSearch className="absolute text-neutral-500 h-5 w-5 top-1/2 left-3 transform -translate-y-1/2" />
      </div>
    </nav>
  );
}
