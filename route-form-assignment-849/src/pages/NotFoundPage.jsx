import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container flex flex-col min-w-screen min-h-screen justify-center items-center text-center bg-gray-100">
      <div className="flex flex-col justify-center items-center gap-4 shadow-lg w-1/5 min-h-1/5 p-6 text-black bg-white rounded-lg">
        <h2 className="text-red-600 text-2xl font-bold">
          404 - Page Not Found
        </h2>
        <p>Oops! The page you're looking for doesn't exist</p>
        <Link className="bg-blue-500 rounded-sm text-white w-1/2 p-1" to="/">
          Go to home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
