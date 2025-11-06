"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const categories = [
  { heading: "Breakfast", img: "/images/categories/breakfast.png" },
  { heading: "Lunch", img: "/images/categories/lunch.png" },
  { heading: "Dinner", img: "/images/categories/dinner.png" },
  { heading: "Snacks", img: "/images/categories/snacks.png" },
  { heading: "Sippables", img: "/images/categories/sippables.png" },
];

export default function CategoryCards() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollTo({
        left: el.scrollLeft + e.deltaY * 6,
        behavior: "smooth",
      });
    };

    el.addEventListener("wheel", handleWheel);
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="overflow-x-auto w-full mt-10 scrollbar-hide"
    >
      <div className="flex gap-6 px-4 pb-4 w-max">
        {categories.map((item, index) => (
          <div
            key={index}
            className=" border-3 border-white shadow-[0_2px_7px_rgba(186,186,186,0.300)] rounded-2xl flex flex-col w-[300px] md:w-[400px] max-w-[450px]"
          >
            <div className="relative">
              <Image
                src={item.img}
                alt={item.heading}
                width={500}
                height={500}
                className="w-full rounded-xl object-cover aspect-video brightness-[0.85]"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="border border-white absolute inset-x-0 bottom-1 text-center px-4 bg-white-900/20 backdrop-blur-xs">
                <h1 className="text-white p-2 font-bold text-2xl md:text-3xl drop-shadow-lg">
                  {item.heading}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}