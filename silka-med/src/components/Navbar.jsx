import React from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    
 

    return (
        <div className="fixed w-full z-10 text-white">
            <div>
                <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                    <div className="flex flex-row items-center cursor-pointer">
                        <Link to="home" spy={true} smooth={true} duration={500}>
                            <h1 className="text-2xl font-semibold">SilkaMedical.</h1>
                        </Link>
                    </div>
                    <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-10">
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-hoverColor transition-all cursor-pointer"
                        >
                            Home
                        </Link>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-hoverColor transition-all cursor-pointer"
                        >
                            About Us
                        </Link>
                        <Link
                            to="services"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-hoverColor transition-all cursor-pointer"
                        >
                            Services
                        </Link>
                        <Link
                            to="doctors"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-hoverColor transition-all cursor-pointer"
                        >
                            Doctors
                        </Link>
                        <Link
                            to="blog"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-hoverColor transition-all cursor-pointer"
                        >
                            Blog
                        </Link>
                    </nav>
                    <div className="hidden lg:flex">
                        <button className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out">
                            Contact Us
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
