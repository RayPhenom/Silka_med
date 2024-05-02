import React from "react";
import img from "../assets/img/about.jpg"

const About = () => {
  return (
    <div className="">
      <div>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, eum
          magni reprehenderit laudantium reiciendis ducimus aperiam debitis
          fugit unde possimus labore eveniet minus nihil explicabo voluptatum
          rerum exercitationem sequi. Rerum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, eum
          magni reprehenderit laudantium reiciendis ducimus aperiam debitis
          fugit unde possimus labore eveniet minus nihil explicabo voluptatum
          rerum exercitationem sequi. Rerum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, eum
          magni reprehenderit laudantium reiciendis ducimus aperiam debitis
          fugit unde possimus labore eveniet minus nihil explicabo voluptatum
          rerum exercitationem sequi. Rerum!
        </p>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default About;
