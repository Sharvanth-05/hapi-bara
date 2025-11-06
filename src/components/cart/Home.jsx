"use client";

import { useState } from "react";
import CartGrid from "./CartGrid";
import CartHeader from "./CartHeader";

export default function MarketPage() {
  //search logic
  const [search, setSearch] = useState("");

  // const filteredItems = search
  //   ? allItems.filter((item) =>
  //       item.name.toLowerCase().includes(search.toLowerCase())
  //     )
  //   : allItems;
  return (
    <div className="flex flex-col w-full mt-5">
      <CartHeader search={search} setSearch={setSearch} />
      <CartGrid items={filteredItems} />
    </div>
  );
  
}
