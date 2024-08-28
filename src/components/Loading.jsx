import React from "react";
import marvelIcon from "../assets/marvel-icon.png";

function Loading() {
  return (
    <div className="text-center h-screen flex justify-center items-center">
      <div role="status">
        <img
          src={marvelIcon}
          alt="Loading icon"
          className="inline w-16 h-16 mr-2 animate-spin"
        />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
