import React from "react";
import { Box, Typography, Skeleton } from "@mui/material";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { secondaryText } from "../app/index";
import ResumeBtn from "../components/button/ResumeBtn";
import { jobTitle } from "../constant";

const Info = ({ aboutData, isLoading }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 5, sm: 3 },
        mt: { xs: 5, sm: 10, md: 0 },
        ml: { xs: "5%", sm: "5%", md: 0 },
        p: { xs: 1, sm: 0, md: 0 },
      }}
    >
      <Box
        sx={{
          background: `linear-gradient(to bottom, #ffffff 0%, ${secondaryText} 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
        }}
      >
        {isLoading ? (
          <>
            <Skeleton
              variant="text"
              width="60%"
              sx={{ bgcolor: "grey.800", height: { xs: 50, md: 80 } }}
            />
            <Skeleton
              variant="text"
              width="85%"
              sx={{ bgcolor: "grey.800", height: { xs: 60, md: 90 } }}
            />
          </>
        ) : (
          <>
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "2rem !important",
                  sm: "3rem !important",
                  md: "4rem !important",
                },
                fontWeight: 500,
              }}
            >
              Hello! I’m
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "2.5rem !important",
                  sm: "4rem !important",
                  md: "5rem !important",
                },
              }}
            >
              {`${aboutData?.name || "Dinesh Sharma"}`}
            </Typography>
          </>
        )}
      </Box>

      {isLoading ? (
        <Skeleton
          variant="text"
          width="70%"
          sx={{ bgcolor: "grey.800", height: { xs: 40, md: 70 } }}
        />
      ) : (
        <Typography
          variant="body1"
          sx={{ color: (theme) => theme.palette.secondary.main }}
        >
          {aboutData?.jobTitle || jobTitle}
        </Typography>
      )}

      {isLoading ? (
        <Skeleton
          variant="rectangular"
          width="60%"
          sx={{
            borderRadius: "4px",
            bgcolor: "grey.800",
            height: { xs: 50, md: 60 },
          }}
        />
      ) : (
        <ResumeBtn
          endIcon={<KeyboardDoubleArrowRight />}
          style={{ mt: 4 }}
          href={aboutData?.resumeDriverLink}
        >
          Get Resume
        </ResumeBtn>
      )}
    </Box>
  );
};

export default Info;
