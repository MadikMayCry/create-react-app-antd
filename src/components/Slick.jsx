import React from "react";
import Slider from "react-slick";

function Slick({
  dots = true,
  lazyLoad = true,
  infinite = true,
  speed = 500,
  slidesToShow = 1,
  slidesToScroll = 1,
  children,
  ...rest
}) {
  const settings = {
    dots,
    infinite,
    speed,
    slidesToShow,
    slidesToScroll,
    lazyLoad,
  };
  return (
    <Slider {...settings} {...rest}>
      {children}
    </Slider>
  );
}

export default Slick;
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
