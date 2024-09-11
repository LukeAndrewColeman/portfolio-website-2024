import React from 'react';

const Navbar = () => {
    return (
        <div className="z-50 h-[17vh] lg:h-[10vh] bg-luke-blue flex fixed w-full shadow-lg bg-white">
            <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center">
                <p className="text-pink text-xl mt-6 lg:mt-0 font-thin tracking-wider"><span className="font-bold">LUKE</span> COLEMAN</p>
                <nav className='mt-4 lg:mt-0'>
                    <ul className="flex gap-5 lg:gap-10">
                        <li className="hover:text-[#3A51ED] hover:scale-110 hover:font-semibold">
                            <a href="#home">Home</a>
                        </li>
                        <li className="hover:text-[#3A51ED] hover:scale-110 hover:font-semibold">
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="hover:text-[#3A51ED] hover:scale-110 hover:font-semibold">
                            <a href="#work">Work</a>
                        </li>
                    </ul>
                </nav>
                <a href='mailto:lukecoleman123@gmail.com'>
                    <button className="py-2 px-6 bg-[#FF6B6B] hover:bg-[#ff8c8c] rounded-3xl hidden lg:block hover:scale-105 font-bold shadow text-white transition-all duration-300">Contact Me</button>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
