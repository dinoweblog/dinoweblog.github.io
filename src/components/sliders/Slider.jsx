import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { Box } from "@mui/material";

const SliderDiv = styled(Slider)`
  margin: auto;
  width: 100%;
  height: 100%;

  .slick-list {
    margin: 0 -0px;
    padding: 0 20% 0 0 !important;
  }
  .slick-slide {
    padding: 0 10px;
  }
  .slick-list {
    padding: 0 20% 0 0;
  }

  .slick-dots button:before {
    color: #fff;
    opacity: 1;
    font-size: 16px;
    margin-top: 10px;
  }
  .slick-list {
    padding: 0 20% 0 0 !important;
  }
`;

export const ReactSlider = ({ children, sliderSettings }) => {
  const settings = {
    infinite: false,
    speed: 500,
    lazyLoad: true,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1924,
        settings: {
          slidesToShow: sliderSettings.bigView,
        },
      },
    ],
  };

  return (
    <Box>
      <SliderDiv {...settings}>{children}</SliderDiv>
    </Box>
  );
};
