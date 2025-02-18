import React from "react";

const Cube = ({ position, imageUrl }) => {
  return (
    <div className={`${position}  absolute w-16 h-16 md:w-36 md:h-36 bg-white`}>
      <img
        src={imageUrl}
        alt="cube-image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Cube;
