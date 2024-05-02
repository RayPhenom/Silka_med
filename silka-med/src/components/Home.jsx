import React from "react";
import  Button  from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.jpg')] bg-no-repeat bg-cover opacity-90">
      <div className="w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Empowering Health and Wellness Choices and Offers Vibrant Life Support
          You Trust...
        </h1>
        <p>
          We associate health with positive things such as fitness, and
          satisfaction. Wisdom and sayings on the subject of health and
          well-being are intended to show you how important these are and that
          you should take care of them every day.
        </p>
        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;
