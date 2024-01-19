import React, { useState } from "react";

const FooterBanner = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isMouseOverTwo, setIsMouseOverTwo] = useState(false);
  const [animation, setAnimation] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };

  const handleMouseOverTwo = () => {
    setIsMouseOverTwo(true);
  };

  const handleMouseOutTwo = () => {
    setIsMouseOverTwo(false);
  };

  const addAnimation = () => {
    setAnimation(true);
  };
  const removeAnimation = () => {
    setAnimation(false);
  };

  const imageStyle = {
    transform: isMouseOver ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.3s ease",
  };
  const imageStyleTwo = {
    transform: isMouseOverTwo ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.3s ease",
  };
  const textAnimation = {
    color: animation ? "black" : "transparent",
    "WebkitTextStroke": "2px black",
    opacity: "10",
    transition: "ease 0.4s",
  };
  return (
    <div className="flex p-8 h-[80vh]  ">
      <div
        className="bg-[#EAE9E4] w-2/4  h-full p-4  rounded-l-lg relative "
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="overflow-hidden h-full">
          <img
            className="h-[100%] z-10"
            src="https://img.freepik.com/premium-photo/gorgeous-female-brunette-model-white-clothes_149155-2130.jpg"
            alt=""
            style={imageStyle}
          />
        </div>
        <div className="absolute text-2xl top-0 left-[80%] font-normal opacity-[.2]">
          NEW YEAR
        </div>
        <div className="absolute text-[160px] font-extrabold  top-20  left-[70%] opacity-5">
          20
        </div>
        <button className="text-xl p-4 bg-black text-white rounded-lg py-5  px-6 shadow-lg absolute top-[80%] left-[60%] hover:bg-white hover:text-black">
          #WOMEN EXCLUSIVE
        </button>
      </div>

      <div
        className="bg-[#E5E7EB] w-2/4 rounded-r-lg h-full p-4 relative secondImageContainer"
        onMouseOver={handleMouseOverTwo}
        onMouseOut={handleMouseOutTwo}
      >
        <div className="overflow-hidden h-full">
          <img
            className="h-[100%] z-10"
            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fexclusive%2Fmen.png&w=1200&q=75"
            alt=""
            style={imageStyleTwo}
          />
        </div>
        <div className="absolute top-0 left-4 text-2xl opacity-[.2] ">
          EXCLUSIVE
        </div>
        <div
          className="absolute text-[160px] font-extrabold left-4 top-20 z-0 "
          onMouseOver={addAnimation}
          onMouseOut={removeAnimation}
          style={textAnimation}
        >
          24
        </div>
        <button className="text-xl py-5  px-6 shadow-lg bg-black text-white rounded-lg absolute top-[80%] left-10 hover:bg-white hover:text-black">
          #MEN EXCLUSIVE
        </button>
      </div>
    </div>
  );
};

export default FooterBanner;
