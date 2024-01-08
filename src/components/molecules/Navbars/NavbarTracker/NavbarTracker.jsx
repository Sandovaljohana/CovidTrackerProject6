import React from "react";
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
} from "@heroicons/react/24/outline";

const NavbarTracker = () => {
  const products = [
    { href: "#", icon: ChartPieIcon },
    { href: "#", icon: Bars3Icon },
    { href: "#", icon: Squares2X2Icon },
    { href: "#", icon: FolderIcon },
    { href: "#", icon: Square3Stack3DIcon },
    { href: "#", icon: ArrowTrendingUpIcon },
    { href: "#", icon: GlobeAltIcon },
    { href: "#", icon: ChatBubbleLeftIcon },
  ];

  return (
    <>
      <div className="navbarCustom">
        <div className="">
          {products.map((item) => (
            <div
              key={item.name}
              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <item.icon
                  className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
              </div>
              <div className="flex-auto">
                <a
                  href={item.href}
                  className="block font-semibold text-gray-900"
                >
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavbarTracker;
