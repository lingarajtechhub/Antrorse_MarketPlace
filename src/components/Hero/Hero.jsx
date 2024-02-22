import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/images/main-banner.png";
import Image2 from "../../assets/images/main-banner-2.png";
import Image3 from "../../assets/images/main-banner-3.png";
import Image4 from "../../assets/images/main-banner-5.png";
import Image5 from "../../assets/images/main-banner-4.jpg";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Special Sale",
    description: "From Rs.1999 or Rs.3999.",
    description2: "From Rs.1999 or Rs.3999.",
  },
  {
    id: 2,
    img: Image2,
    title: "Special Sale",
    description: "From 1999 or 3999.",
    description2: "From Rs.1999 or Rs.3999.",
  },
  {
    id: 3,
    img: Image3,
    title: "Special Sale",
    description: "From 1999 or 3999.",
    description2: "From Rs.1999 or Rs.3999.",
  },
  {
    id: 4,
    img: Image4,
    title: "Special Sale",
    description: "From 1999 or 3999.",
    description2: "From Rs.1999 or Rs.3999.",
  },
  {
    id: 5,
    img: Image5,
    title: "Special Sale",
    description: "From 1999 or 3999.",
    description2: "From Rs.1999 or Rs.3999.",
  },
];

const Hero = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="max-w-[1380px] m-auto grid  lg:grid-cols-4 gap-4 mb-5 mt-4 p-2">
      <div className="row-span-2 col-span-2  rounded-lg overflow-hidden ">
        <Slider {...settings} className="">
          {ImageList.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden flex items-center justify-center   relative"
            >
              <img src={item.img} alt="" className="rounded-lg h-[100%]" />
              <div className="flex absolute top-8 sm:top-20 sm:left-10 left-8 md:top-16 md:left-16 lg:left-8 flex-col">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold my-2">
                  {item.title}
                </h2>
                <p className="text-[12px] sm:text-sm font-medium">
                  {item.description}
                </p>
                <p className="text-[12px] sm:text-sm font-medium">
                  {item.description2}
                </p>
                <button className="bg-gradient-to-r from-red-400 to-red-600 hover:scale-105 duration-200 text-white py-2 my-4 sm:my-10 w-20 sm:w-40 rounded-full text-[12px] sm:text-sm">
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="col-span-2  bg-cover bg-center bg-no-repeat rounded-lg p-10 side-image ">
        <p className="text-sm md:text-sm font-bold font-sans">
          Sale of the month
        </p>
        <h3 className="text-xl md:text-3xl font-semibold pb-1 ">
          Fashion for Men
        </h3>
        <p className="text-sm font-sans">From Rs.29999</p>
      </div>
      <div className="side-image1 bg-cover bg-center bg-no-repeat rounded-lg min-h-40 sm:p-10 hidden sm:block">
        <h3 className="text-lg lg:text-xl font-semibold">Smart Watch 7</h3>
        <p className="text-sm font-sans">From Rs.29999</p>
      </div>
      <div className="side-image2 bg-cover bg-center bg-no-repeat rounded-lg min-h-40 sm:p-10 hidden sm:block">
        <h3 className="text-lg lg:text-xl font-semibold ">AirPods Max</h3>
        <p className="text-sm font-sans">From Rs.29999</p>
      </div>
    </div>
  );
};

export default Hero;
