import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Task from "../Components/Task";
import { smallTasks } from "../data/data";

const ProjectSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col px-5 py-5 gap-5">
      <h1 className="text-4xl border-b-4 mb-5 w-[200px] font-bold">Small Tasks</h1>
      <Slider {...settings}>
        {smallTasks[0].tasks.map((project, index) => (
          <div key={index} className="px-2">
            <Task {...project} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
