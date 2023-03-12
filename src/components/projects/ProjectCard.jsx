import { Box, Typography } from "@mui/material";
import { CustomButton } from "../button";
import IconHoverWithName from "./IconHoverWithName";
import {
  primary,
  secondary,
  IoLogoGithub,
  TbExternalLink,
} from "../../app/index";

const ProjectCard = ({ data, sx }) => {
  return (
    <Box sx={{ mb: { xs: 10, sm: 15, md: 0 }, ...sx }}>
      <Box
        sx={{
          width: "100%",
          height: { xs: 350, sm: 350, md: 500, lg: 550 },
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
            width: "80%",
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
            p: { xs: 4, sm: 8, md: 8, lg: 13 },
            zIndex: 20,
            width: "100%",
            position: "absolute",
          }}
        >
          <Box
            component="img"
            alt={data.title}
            src={data.image}
            sx={{
              width: "100%",
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
          {data.techStack?.map((icon) => (
            <IconHoverWithName icon={icon} />
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
                  bgcolor: "#fff",
                  color: primary,
                },
                height: "45px",
                bgcolor: secondary,
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
                bgcolor: "#fff",
                color: primary,
              },
              height: "45px",
              bgcolor: secondary,
            }}
            endIcon={<TbExternalLink />}
            href={data.url}
          >
            View
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
