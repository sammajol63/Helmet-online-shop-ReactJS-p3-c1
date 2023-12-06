import React from "react";
import Search from "./Search";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header
      aria-label="Site Header"
      className=" header sticky bg-gray-900 border-b border-gray-900  top-0 z-[50] w-full"
    >
      <div className="gap-44 flex h-16  items-center justify-evenly sm:px-6 lg:px-8 ">
        
        <div className="flex items-center">
          <a href="#" className="w-28">
            <img
              src="https://1.bp.blogspot.com/-wiOFZ_Q8wIw/XW_FQXBKp2I/AAAAAAAABJ0/8GMXlTCBAPkVwMIaNVwXY86ApYsqBFhMQCEwYBhgL/s1600/kyt-helmets-vector-logo-idngrafis.png"
              width={180}
            />
          </a>
        </div>

        <div className="flex flex-1 items-center ">
          <nav
            aria-label="Site Nav"
            className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-100"
          >
            <a className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
              <NavLink to="/">Home</NavLink>
            </a>

            <a className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
              <NavLink to="/catalog">Product</NavLink>
            </a>

            <a
              href="/products"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
            >
              Company
            </a>

            <a
              href="/contact"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
            >
              Gallery
            </a>
            <a
              href="/contact"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
            >
              News
            </a>
            <a
              href="/contact"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
            >
              Support
            </a>
          </nav>
        </div>
        <div>
        <input type="text" className="h-9 my-4 " />
        </div>

      </div>
    </header>
  );
};

export default Navbar;
