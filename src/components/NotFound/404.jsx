import React from "react";
import { ThemeProvider } from "../../context/ThemeContext";
import Navbar from "../Navbar/Navbar";
import notfound from "../../assets/404.svg";

const NotFoundContent = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <div className="mt-20 flex flex-col justify-center items-center h-screen text-center">
        <img
          src={notfound}
          alt="404 Illustration"
          className="w-64 h-auto mb-4"
        />
        <h1 className="font-bold text-3xl text-gray-900 dark:text-white">
          404 - Oops... page not found.
        </h1>
        <p className="text-blue-500 dark:text-blue-400">
          Sorry, we don't know how you ended up here, but you should go away
          now.
        </p>
      </div>
    </div>
  );
};

const NotFound = () => {
  return (
    <ThemeProvider>
      <NotFoundContent />
    </ThemeProvider>
  );
};

export default NotFound;
