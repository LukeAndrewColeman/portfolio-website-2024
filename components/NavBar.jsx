import React from "react";

const Navbar = () => {
  return (
    <div className="z-50 h-[14vh] lg:h-[10vh] bg-luke-blue flex fixed w-full shadow-lg bg-[#fffffe]">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center">
        <p className="text-xl mt-3 md:mt-6 lg:mt-0 font-thin tracking-tight">
          <span className="font-bold text-luke-dark-blue">LUKE</span> A COLEMAN
        </p>
        <nav className="mt-2 md:mt-4 lg:mt-0">
          <ul className="flex gap-5 lg:gap-10">
            <li className="hover:text-luke-green duration-300 font-semibold">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-luke-green duration-300 font-semibold">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-luke-green duration-300 font-semibold">
              <a href="#work">Work</a>
            </li>
          </ul>
        </nav>
        <a href="mailto:lukecoleman123@gmail.com">
          <button className="py-2 px-6 bg-luke-green hover:bg-luke-hover rounded-3xl hidden lg:block font-bold shadow text-white transition-all duration-300">
            Contact Me
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
