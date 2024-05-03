import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Doctors = () => {
    const data = [
        {
            img: "/src/assets/img/berryl.jpg",
            name: "Dr. Beryl Lumumba",
            specialties: "CardioVascular",
        },
        {
            img: "/src/assets/img/isha.jpg",
            name: "Dr. Loisha Awuor",
            specialties: "Orthopedic",
        },
        {
            img: "/src/assets/img/giddy.jpg",
            name: "Dr. Giddings Muok",
            specialties: "Pedeatrician",
        },
        {
            img: "/src/assets/img/onix.jpg",
            name: "Dr. Onix Lumumba",
            specialties: "Surgeon",
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
            <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
                <div>
                    <h1 className="text-4xl font-semibold text-center lg:text-start">Our Doctors</h1>
                    <p className="mt-2 text-center lg:text-start">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="flex gap-5 mt-4 lg:mt-0">
                    <button className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]">
                        <FaArrowLeft size={25} />
                    </button>
                    <button className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]">
                        <FaArrowRight size={25} />
                    </button>
                </div>
            </div>
            <div className="mt-5">
                <Slider {...settings}>
                    {data.map((e, index) => (
                        <div className="h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
                            key={index}>
                            <div>
                                <img src={e.img} alt="img" className="h-56 rounded-t-xl w-full" />
                            </div>

                            <div className="flex flex-col justify-center items-center ">
                                <h1 className="font-semibold text-xl pt-4">{e.name}</h1>
                                <h3 className="pt-2">{e.specialties}</h3>
                            </div>
                        </div>
                    ))}

                </Slider>
            </div>
        </div>
    );
};

export default Doctors;
