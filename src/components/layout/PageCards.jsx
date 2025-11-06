"use client";

import Image from "next/image";

export default function PageCard({
  name,
  quantity,
  category,
  src,
  icon,
  onIconClick,
}) {
  const label = quantity || category;


  return (
    <div className="shadow-neutral-300/30 shadow-2xl flex flex-col items-center justify-between min-h-[200px] w-[45%] md:w-[15%] min-w-[120px] max-w-[180px] border-2 border-neutral-100 rounded-xl bg-white p-2">
      <div className="relative">
        <Image
          src={src || "/images/placeholder.png"}
          alt={name}
          height={500}
          width={500}
          className="w-full rounded-lg object-cover brightness-[0.85] mask-b-from-16"
        />
      </div>
      <div className="flex justify-between items-center w-full mt-2">
        <div className="flex flex-col text-left mt-2">
          <h2 className="text-[14px] md:text-[1em] font-semibold text-neutral-700">{name}</h2>
          {label === quantity && (
            <p className="text-xs text-neutral-500">{label}</p>
          )}
          <div className="flex">
            {label === category && (
              <p className="bg-neutral-200/50 mt-1 text-neutral-500 md:text-neutral-400 text-[9px] md:text-xs rounded-sm text-center p-1 px-2">
                {label}
              </p>
            )}
          </div>
        </div>
        {/*cart logic to be added & the title will be shared to the market search, and the recipes of that item should be listed */}
        <button
          onClick={onIconClick}
          className="border h-10 hover:cursor-pointer shadow-amber-500/50 shadow-2xl text-amber-400 text-xs px-2 rounded-lg flex items-center gap-1 mt-2 hover:text-white hover:bg-amber-400 transition-all duration-500"
        >
          {icon}
        </button>
      </div>
    </div>
  );
}
