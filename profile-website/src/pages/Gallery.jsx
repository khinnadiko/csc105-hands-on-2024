import React from "react";

const Gallery = () => {
  return (
    <div className="container border-box py-30 min-w-screen h-full flex-col flex justify-center items-center gap-10">
      <h1 className="text-base md:text-lg lg:text-3xl font-bold">Gallery</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-center. items-center">
        <img
          className="h-50 w-80 shadow-lg shadow-gray-400 rounded-4xl"
          src=".\src\image\img1.png"
        />
        <img
          className="h-50 w-80 shadow-lg shadow-gray-400  rounded-4xl"
          src=".\src\image\img2.jpg"
        />
        <img
          className="h-50 w-80 shadow-lg shadow-gray-400  rounded-4xl"
          src=".\src\image\img3.jpg"
        />
        <img
          className="h-50 w-80 shadow-lg shadow-gray-400  rounded-4xl"
          src=".\src\image\img4.jpg"
        />
        <img
          className="h-50 w-80 shadow-lg shadow-gray-400  rounded-4xl"
          src=".\src\image\img5.png"
        />
        <img
          className="h-50 w-80 shadow-lg shadow-gray-400  rounded-4xl"
          src=".\src\image\img6.png"
        />
      </div>
    </div>
  );
};

export default Gallery;
