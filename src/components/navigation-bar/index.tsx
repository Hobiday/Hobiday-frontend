"use client";

import { useState } from "react";
import NavigationTab from "./navigation-tab";

import AccountDefault from "@/assets/icons/account-default.svg";
import AccountPressed from "@/assets/icons/account-pressed.svg";
import FeedDefault from "@/assets/icons/feed-default.svg";
import FeedPressed from "@/assets/icons/feed-pressed.svg";
import WishlistDefault from "@/assets/icons/heart-default.svg";
import WishlistPressed from "@/assets/icons/heart-pressed.svg";
import HomeDefault from "@/assets/icons/home-default.svg";
import HomePressed from "@/assets/icons/home-pressed.svg";

const TABS = [
  {
    name: "홈",
    defaultIcon: HomeDefault,
    pressedIcon: HomePressed,
  },
  {
    name: "피드",
    defaultIcon: FeedDefault,
    pressedIcon: FeedPressed,
  },
  {
    name: "위시리스트",
    defaultIcon: WishlistDefault,
    pressedIcon: WishlistPressed,
  },
  {
    name: "마이페이지",
    defaultIcon: AccountDefault,
    pressedIcon: AccountPressed,
  },
];
export default function NavigationBar() {
  const [activeTab, setActiveTab] = useState<string>("홈");

  return (
    <div className="flex w-full h-20 justify-around items-center border-t border-gray-300">
      {TABS.map((tab) => (
        <NavigationTab
          key={tab.name}
          name={tab.name}
          defaultIcon={tab.defaultIcon}
          pressedIcon={tab.pressedIcon}
          isActive={activeTab === tab.name}
          onClick={() => setActiveTab(tab.name)}
        />
      ))}
    </div>
  );
}
