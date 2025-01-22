import React from "react";
import logogif from "../../assets/untitled@1x-1.0s-200px-200px.gif"

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img
        src={logogif}
        alt="Loading..."
        className="w-46 h-67"
      />
    </div>
  );
};

export default LoadingScreen;
