"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { renderStars } from "@/app/rating";

const foodItems = [
  {
    src: "/images/trending/pasta.png",
    alt: "pasta",
    title: "Creamy Pasta",
    rating: "4.7",
    category: "lunch",
  },
  {
    src: "/images/trending/pizza.png",
    alt: "pizza",
    title: "Cheese Pizza",
    rating: "4.8",
    category: "dinner",
  },
  {
    src: "/images/trending/noodles.png",
    alt: "noodles",
    title: "Veg Noodles",
    rating: "4.6",
    category: "snacks",
  },
  {
    src: "/images/trending/milkshake.png",
    alt: "milkshake",
    title: "Choco Shake",
    rating: "4.9",
    category: "sippables",
  },
  {
    src: "/images/trending/burger.png",
    alt: "burger",
    title: "Veg Burger",
    rating: "4.5",
    category: "snacks",
  },
];

export default function Trending() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollTo({
        left: el.scrollLeft + e.deltaY * 3, // faster scroll
        behavior: "smooth",
      });
    };

    el.addEventListener("wheel", handleWheel);
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 mt-5 w-full p-4 bg-white/20 backdrop-blur-2xl overflow-x-auto scrollbar-hide"
    >
      {foodItems.map((item, id) => (
        <div
          key={id}
          className="shrink-0 shadow-neutral-300/20 shadow-2xl flex flex-col w-3/5 md:w-[300px] border-2 border-neutral-400 rounded-xl min-h-[250px] bg-white"
        >
          <div className="md:w-full mask-b-from-12">
            <Image
              src={item.src}
              alt={item.alt}
              height={500}
              width={500}
              className="w-full object-fill rounded-[10px]"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex pl-3 pt-3 items-center justify-between">
              <p className="bg-amber-400 mt-2 pl-2 pr-2 md:text-[1em] text-xs text-white rounded-full">
                {item.category}
              </p>
              <div className="flex pr-2 text-yellow-500">
                {renderStars(parseFloat(item.rating))}
              </div>
            </div>
            <div className="font-bold -mt-2 p-3 flex justify-between items-center">
              <h1 className="text-sm md:text-lg">{item.title}</h1>
              <div className="flex flex-col items-end">
                <p>{item.rating}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
