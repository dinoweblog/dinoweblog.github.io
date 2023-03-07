import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import IconButton from "../footer/IconButton";
import { useRef } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "../../app/index";
import ProjectCard from "./ProjectCard";
import { Box } from "@mui/material";

const SliderDiv = styled(Slider)`
  margin: auto;
  width: 100%;
  margin-top: 20px;
  .skills_card {
    width: 450px;
  }
  @media (max-width: 798px) {
    .skills_card {
      width: 220px;
    }
  }
  @media (max-width: 520px) {
    .skills_card {
      width: 180px;
    }
  }

  img {
    width: 100%;
  }

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

export const ProjectSlider = () => {
  const sliderRef = useRef();

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleAllProjects = () => {
    console.log("all");
  };

  const settings = {
    infinite: false,
    speed: 500,
    lazyLoad: true,
    slidesToScroll: 1,
    dots: false,
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
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Box>
      <SliderDiv ref={(slider) => (sliderRef.current = slider)} {...settings}>
        {[1, 2, 3, 4].map(() => (
          <ProjectCard />
        ))}
      </SliderDiv>

      <Box
        sx={{
          display: "flex",
          gap: 4,
          position: "absolute",
          top: { xs: 250, sm: 250, md: 150 },
          right: 0,
        }}
      >
        <IconButton onClick={handleAllProjects}>All</IconButton>
        <IconButton
          icon={<MdKeyboardDoubleArrowLeft />}
          onClick={handlePrevious}
        />
        <IconButton
          icon={<MdKeyboardDoubleArrowRight />}
          onClick={handleNext}
        />
      </Box>
    </Box>
  );
};
export default ProjectSlider;
