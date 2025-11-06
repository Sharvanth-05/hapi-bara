"use client";

import { useState } from "react";
import MarketHeader from "./MarketHeader";
import MarketGrid from "./MarketGrid";

const allItems = [
  { name: "Tomato", quantity: "2 medium", src: "/images/items/tomato.png" },
  { name: "Onion", quantity: "1 large", src: "/images/items/onion.png" },
  { name: "Cheese", quantity: "100g", src: "/images/items/cheese.png" },
  { name: "Pasta", quantity: "200g", src: "/images/trending/pasta.png" },
  { name: "Milk", quantity: "1 cup", src: "/images/items/milk.png" },
  { name: "Bread", quantity: "2 slices", src: "/images/items/bread.png" },
];

export default function MarketPage() {
  //search logic
  const [search, setSearch] = useState("");

  //cart logic
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const updatedCart = [...prev, item];
      console.log("🛒 Cart updated:", updatedCart);
      return updatedCart;
    });
  };


  const filteredItems = search
    ? allItems.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : allItems;
  return (
    <div className="flex flex-col w-full mt-5">
      <MarketHeader search={search} setSearch={setSearch} />
      <MarketGrid items={filteredItems} addToCart={addToCart} />
    </div>
  );
  
}
