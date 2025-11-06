"use client";

import { useState } from "react";
import RecipeHeader from "./RecipeHeader";
import RecipeGrid from "./RecipeGrid";

const allItems = [
  { name: "Burger", category: "Fast Food", src: "/images/trending/burger.png" },
  { name: "Pizza", category: "Italian", src: "/images/trending/pizza.png" },
  { name: "Dal Rice", category: "Indian", src: "/images/items/dal.png" },
  { name: "Pasta", category: "Italian", src: "/images/trending/pasta.png" },
  { name: "Chocolate Milkshake", category: "Beverage", src: "/images/trending/milkshake.png" },
  { name: "Sandwich", category: "Snack", src: "/images/items/sandwich.png" },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredItems = search
    ? allItems.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : allItems;

  return (
    <div className="flex flex-col w-full mt-5">
      <RecipeHeader search={search} setSearch={setSearch} />
      <RecipeGrid items={filteredItems} />
    </div>
  );
}