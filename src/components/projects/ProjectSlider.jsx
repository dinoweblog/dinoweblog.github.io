import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import IconButton from "../footer/IconButton";
import { useRef } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  secondaryText,
} from "../../app/index";
import ProjectCard from "./ProjectCard";
import {
  Box,
  IconButton as IconButtonMui,
  List,
  ListItem,
  Skeleton,
} from "@mui/material";
import { Link } from "react-router-dom";
import AnimatedSection from "../animation";
import { useFirestoreCollection } from "../../app/apis/useFirestore";

const SliderDiv = styled(Slider)`
  margin: auto;
  width: 100%;
  margin-top: 20px;
  padding-bottom: 50px;
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
    padding: 0 20px;
    @media (max-width: 767px) {
      padding: 0 !important;
    }
  }
  .slick-list {
    padding: 0 20% 0 0;
  }

  .slick-dots {
    display: flex;
    align-items: center;
    justify-content: center;
    a.custom-button {
      border: none;
      padding: 5px;
      margin-left: 20px;
      cursor: pointer;
      margin-top: 10px !important;
    }
  }

  .slick-dots button:before {
    color: #858792;
    opacity: 1;
    font-size: 16px;
    transition: all 0.3s ease-in-out !important;
  }

  .slick-dots .slick-active button:before {
    color: ${secondaryText} !important;
    border-radius: 50%;
    transform: scale(1.4);
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

  const settings = {
    infinite: false,
    speed: 500,
    lazyLoad: true,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    appendDots: (dots) => (
      <Box
        style={{
          display: { xs: "block", sm: "flex", md: "flex", lg: "flex" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <List
          style={{
            display: { xs: "block", sm: "flex", md: "flex", lg: "flex" },
            alignItems: "center",
            margin: 0,
            padding: 0,
          }}
        >
          {dots.map((dot, index) => (
            <ListItem
              key={index}
              style={{ display: "inline-flex", padding: 0 }}
            >
              {dot}
            </ListItem>
          ))}
        </List>
        <Link to="/projects" style={{ marginLeft: "20px" }}>
          <IconButtonMui
            className="custom-button"
            sx={{
              color: "#EEEEEE",
              mt: "8px",
            }}
          >
            <MdKeyboardDoubleArrowRight />
          </IconButtonMui>
        </Link>
      </Box>
    ),
    responsive: [
      {
        breakpoint: 1000,
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

  const {
    data: projectsData,
    loading,
    error,
  } = useFirestoreCollection(["projects", "projects"], ["createdAt", "desc"]);

  return (
    <Box>
      <SliderDiv ref={(slider) => (sliderRef.current = slider)} {...settings}>
        {loading
          ? [1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton
                key={i}
                variant="rectangular"
                sx={{
                  width: "100%",
                  height: { xs: 300, sm: 350, md: 400, lg: 550 },
                  maxHeight: { xs: 300, sm: 350, md: 400, lg: 550 },
                }}
              />
            ))
          : projectsData.map((project) => (
              <ProjectCard key={project.title} data={project} />
            ))}
      </SliderDiv>

      <Box
        sx={{
          position: "absolute",
          top: { xs: 160, sm: 160, md: 100 },
          right: 0,
        }}
      >
        <AnimatedSection animation="slide-right">
          <Box
            sx={{
              display: "flex",
              gap: 4,
            }}
          >
            <IconButton
              to={"/projects"}
              btnsx={{ bgcolor: "transparent", color: "#ffffff" }}
              sx={{
                "&:hover": {
                  "& .MuiButton-root": {
                    bgcolor: secondaryText,
                    color: "#ffffff",
                  },
                },
              }}
            >
              All
            </IconButton>
            <IconButton
              icon={<MdKeyboardDoubleArrowLeft />}
              onClick={handlePrevious}
            />
            <IconButton
              icon={<MdKeyboardDoubleArrowRight />}
              onClick={handleNext}
            />
          </Box>
        </AnimatedSection>
      </Box>
    </Box>
  );
};
export default ProjectSlider;
