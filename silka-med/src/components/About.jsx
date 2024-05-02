import React from "react";
import img from "../assets/img/about.jpg"

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className="w-full lg:w-3/4 space-y-4">
        <h1 className="text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, eum
          magni reprehenderit laudantium reiciendis ducimus aperiam debitis
          fugit unde possimus labore eveniet minus nihil explicabo voluptatum
          rerum exercitationem sequi. Rerum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, eum
          magni reprehenderit laudantium reiciendis ducimus aperiam debitis
          fugit unde possimus labore eveniet minus nihil explicabo voluptatum
          rerum exercitationem sequi. Rerum!
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, eum
          magni reprehenderit laudantium reiciendis ducimus aperiam debitis
          fugit unde possimus labore eveniet minus nihil explicabo voluptatum
          rerum exercitationem sequi. Rerum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, eum
          magni reprehenderit laudantium reiciendis ducimus aperiam debitis
          fugit unde possimus labore eveniet minus nihil explicabo voluptatum
          rerum exercitationem sequi. Rerum!
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, eum
          magni reprehenderit laudantium reiciendis ducimus aperiam debitis
          fugit unde possimus labore eveniet minus nihil explicabo voluptatum
          rerum exercitationem sequi. Rerum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, eum
          magni reprehenderit laudantium reiciendis ducimus aperiam debitis
          fugit unde possimus labore eveniet minus nihil explicabo voluptatum
          rerum exercitationem sequi. Rerum!
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <img src={img} alt="img" className="rounded-lg" /> 
      </div>
    </div>
  );
};

export default About;
