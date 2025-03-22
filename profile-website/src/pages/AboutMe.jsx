import React from "react";

export const AboutMe = () => {
  return (
    <div className="container py- 15 lg:py-30 min-w-screen h-full sm: flex-col lg:flex-row flex justify-center items-center gap-10">
      <img className="lg:w-80 w-40" src=".\src\image\man.jpg" />
      <div className="right flex flex-col gap-3 w-2/3 lg:w-1/3">
        <h1 className="text-base md:text-lg lg:text-3xl font-bold">About Me</h1>
        <h2 className="text-sm md:text-base lg:text-lg font-bold">
          Artist & Designer
        </h2>
        <p className="text-xs md:text-sm lg:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A fuga
          quidem consectetur ullam architecto quis dolorum, non aliquid vero
          repellendus! Quae dolorem rerum nesciunt nulla tempore praesentium
          distinctio minus tempora?
        </p>
        <button className="text-white bg-emerald-900 text-xs md:text-sm lg:text-lg px-3 py-1 w-32 lg:w-40 rounded-3xl shadow-md">
          Read More
        </button>
      </div>
    </div>
  );
};
