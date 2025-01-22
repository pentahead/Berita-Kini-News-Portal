import React from "react";
import Navbar from "../Navbar/Navbar";
import notfound from "../../assets/404.svg";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20 flex flex-col justify-center items-center h-screen text-center">
        <img
          src={notfound}
          alt="404 Illustration"
          className="w-64 h-auto mb-4"
        />
        <h1 className="font-bold text-3xl">404 - Oops... page not found.</h1>
        <p className="text-blue-400">
          Sorry, we don't know how you ended up here, but you should go away
          now.
        </p>
      </div>
    </>
  );
};

export default NotFound;
