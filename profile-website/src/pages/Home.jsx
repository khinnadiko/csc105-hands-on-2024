import React from "react";

const Home = () => {
  return (
    <div className="container py-30 min-w-screen h-full flex justify-center items-center gap-10">
      <div className="left flex flex-col lg:gap-3 w-1/3">
        <h2 className="text-sm md:text-base lg:text-lg font-bold">
          Hello, it's me
        </h2>
        <h1 className="text-base md:text-lg lg:text-3xl font-bold">
          Artist John
        </h1>
        <h2 className="text-sm md:text-base lg:text-lg font-bold">
          I'm a Artist
        </h2>
        <p className="text-xs md:text-sm lg:text-lg">
          Please hold your breath as we dive into a world full of creativity
          with designer John.
        </p>
        <div className="flex my-4 gap-2 lg:gap-4">
          <img className="w-5 lg:w-10" src=".\src\icons\facebook.png" />
          <img className="w-5 lg:w-10" src=".\src\icons\instagram.png" />
          <img className="w-5 lg:w-10" src=".\src\icons\x.png" />
        </div>
        <button className="text-white bg-emerald-900 px-3 py-1 w-32 lg:w-40 rounded-3xl text-xs md:text-sm lg:text-lg shadow-md">
          My Portfolio
        </button>
      </div>
      <img className="lg:w-80 w-40" src=".\src\image\man.jpg" />
    </div>
  );
};

export default Home;
