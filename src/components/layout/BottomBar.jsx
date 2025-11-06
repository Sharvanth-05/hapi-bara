'use client';

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import {
  UserIcon as UserOutline,
  HomeIcon as HomeOutline,
} from "@heroicons/react/24/outline";

import { IoFastFoodOutline as Recipe} from "react-icons/io5";
import { IoFastFoodSharp as RecipeFill } from "react-icons/io5";
import { FaShop as MarketFill } from "react-icons/fa6";
import { BsShop as MarketOutline } from "react-icons/bs";
import { GiShoppingBag as BagFill } from "react-icons/gi";
import { LiaShoppingBagSolid as BagOutline } from "react-icons/lia";

import {
  UserIcon as UserSolid,
  HomeIcon as HomeSolid,
} from "@heroicons/react/24/solid";

export default function BottomBar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: HomeOutline, activeIcon: HomeSolid },
    { href: "/market", icon: MarketOutline, activeIcon: MarketFill },
    { href: "/recipes", icon: Recipe, activeIcon: RecipeFill },
    { href: "/cart", icon: BagOutline, activeIcon: BagFill },
    { href: "/profile", icon: UserOutline, activeIcon: UserSolid },
  ];

  return (
    <nav className="transition-all bg-white/90 backdrop-blur-xs h-15 fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-between gap-5 border border-neutral-200 rounded-xl px-6 z-50">
      {navItems.map(({ href, icon: Icon, activeIcon: ActiveIcon }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className={`transition-all hover:text-yellow-400 hover:border-amber-400 duration-100 hover:scale-120 ${
              isActive ? "text-neutral-700 border-b-2 border-neutral-700 pb-1" : "text-neutral-400"
            }`}
          >
            {isActive ? <ActiveIcon className="w-7 h-7" /> : <Icon className="w-7 h-7" />}
          </Link>
        );
      })}
    </nav>
  );
}