import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbarTracker.css'

import {
  ChartPieIcon,
  Bars3Icon,
  Squares2X2Icon,
  FolderIcon,
  Square3Stack3DIcon,
  ArrowTrendingUpIcon,
  GlobeAltIcon,
  ChatBubbleLeftIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";

const NavbarTracker = () => {
  const [activeButton, setActiveButton] = useState(null);

  const products = [
    { id: 1, href: "/Tracker1", icon: ChartPieIcon },
    { id: 2, href: "/Tracker2", icon: Bars3Icon },
    { id: 3, href: "/Tracker3", icon: Squares2X2Icon },
    { id: 4, href: "/Tracker4", icon: FolderIcon },
    { id: 5, href: "/Tracker5", icon: Square3Stack3DIcon },
    { id: 6, href: "/Tracker6", icon: ArrowTrendingUpIcon },
    { id: 7, href: "/Tracker7", icon: GlobeAltIcon },
    { id: 8, href: "/Tracker8", icon: ChatBubbleLeftIcon },
    { id: 9, href: "/", icon: EllipsisHorizontalCircleIcon },
  ];

  const handleButtonClick = (id) => {
    setActiveButton(id);
  };

  const isButtonActive = (id) => activeButton === id;

  return (
    <>
      <div className="navbarCustom">
        <img className="rotate" src="/src/images/coronavirus.png" alt="" />
        <div className="">
          {products.map((item) => (
            <div
              key={item.id}
              onClick={() => handleButtonClick(item.id)}
              className={`group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-8 ${
                isButtonActive(item.id)
                  ? "text-white "
                  : "group-hover:bg-indigo-800 transition-all duration-400 ease-in-out "
              }`}
            >
              <Link to={item.href}> {}
                <div
                  className={`flex h-12 w-12 flex-none items-center justify-center rounded-lg filter hover:brightness-125 ${
                    activeButton === item.id
                      ? "bg-indigo-800 text-white"
                      : "bg-gray-50 group-hover:bg-indigo-800 transition-all duration-400 ease-in-out"
                  }`}
                >
                  <item.icon
                    className={`h-6 w-6 transition-all duration-400 ease-in-out ${
                      activeButton === item.id
                        ? "text-white"
                        : "text-indigo-800 group-hover:text-white"
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </Link>

              <div className="flex-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavbarTracker;
