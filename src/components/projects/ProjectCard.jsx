import { Box, Typography } from "@mui/material";
import { CustomButton } from "../button";
import IconHoverWithName from "./IconHoverWithName";
import {
  primary,
  secondary,
  IoLogoGithub,
  TbExternalLink,
  secondaryText,
} from "../../app/index";
import AnimatedSection from "../animation";

const ProjectCard = ({ data, sx }) => {
  return (
    <AnimatedSection className="animate-scale-in-on-scroll">
      <Box
        sx={{
          mb: { xs: 10, sm: 15, md: 0 },
          pb: 2,
          ...sx,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: { xs: 300, sm: 350, md: 400, lg: 550 },
            maxHeight: { xs: 300, sm: 350, md: 400 },
            position: "relative",
            overflow: "hidden",
            bgcolor: primary,
          }}
        >
          <Box
            component="img"
            alt={data.title}
            src={data.image}
            sx={{
              transform: "translate(-50%,-50%) rotate(-45deg)",
              position: "absolute",
              top: "50%",
              left: "50%",
              width: { xs: "95%", md: "85%", lg: "80%" },
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              background: "rgba(37,39,52,.95)",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              zIndex: 10,
            }}
          />

          <Box
            sx={{
              p: { xs: 4, sm: 6, md: 6, lg: 10 },
              zIndex: 20,
              width: "100%",
              position: "absolute",
              overflow: "hidden",
              "&:hover": {
                p: { xs: 2, sm: 3, md: 4 },
                top: { xs: "16px", sm: "24px", md: "32px" },
                img: {
                  transform: "scale(1.1)", // Zoom effect
                  transition: "transform 0.8s ease-in-out",
                  animation: "scrollImage 8s linear infinite",
                },
              },
            }}
          >
            <Box
              component="img"
              alt={data.title}
              src={data.image}
              sx={{
                width: "100%",
                height: "auto",
                minHeight: "100%",
                objectFit: "cover",
                cursor: "pointer",
                transition: "transform 0.8s ease-in-out",
              }}
            />
          </Box>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h2" mb={2}>
            {data.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: (theme) => theme.palette.secondary.main,
            }}
          >
            {data.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              mt: 3,
              gap: 1,
            }}
          >
            <Typography variant="body2">Tech Stack :</Typography>
            {data.techStack?.map((icon, index) => (
              <IconHoverWithName key={index} icon={icon} />
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              justifyContent: "start",
              mt: 3,
            }}
          >
            {data.githubUrl ? (
              <CustomButton
                style={{
                  "&:hover": {
                    bgcolor: secondaryText,
                    borderColor: secondaryText,
                  },
                  height: "45px",
                  bgcolor: secondary,
                  borderColor: "#ffffff40",
                  color: "#fff",
                  borderRadius: 2,
                }}
                startIcon={<IoLogoGithub />}
                href={data.githubUrl}
              >
                Code
              </CustomButton>
            ) : null}

            <CustomButton
              style={{
                "&:hover": {
                  bgcolor: secondaryText,
                  borderColor: secondaryText,
                },
                height: "45px",
                bgcolor: secondary,
                borderColor: "#ffffff40",
                color: "#fff",
                borderRadius: 2,
              }}
              endIcon={<TbExternalLink />}
              href={data.url}
            >
              View
            </CustomButton>
          </Box>
        </Box>
      </Box>

      <style>
        {`
          @keyframes scrollImage {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }
        `}
      </style>
    </AnimatedSection>
  );
};

export default ProjectCard;
