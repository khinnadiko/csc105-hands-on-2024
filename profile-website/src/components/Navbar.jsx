import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container box-border min-w-screen flex justify-between items-center p-2 lg:p-4 font-semibold">
        <h1 className="text-base md:text-lg lg:text-3xl font-bold px-1">
          Artist John
        </h1>
        <ul className="flex gap-2 md:gap-4 lg:gap-6 text-xs md:text-sm lg:text-lg">
          <li>Home</li>
          <li>About me</li>
          <li>Gallery</li>
        </ul>
        <button className="text-white bg-emerald-900 px-3 py-1 rounded-3xl text-xs md:text-sm lg:text-lg shadow-md">
          Contact
        </button>
      </div>
    </>
  );
};

export default Navbar;
