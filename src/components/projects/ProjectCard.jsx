import { Box, Typography } from "@mui/material";
import { CustomButton } from "../button";
import { techStack } from "./constant";
import IconHoverWithName from "./IconHoverWithName";
import {
  primary,
  secondary,
  IoLogoGithub,
  TbExternalLink,
} from "../../app/index";

const ProjectCard = () => {
  return (
    <Box sx={{ mb: { xs: 10, sm: 15, md: 0 } }}>
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
          src="./assets/projects/bebodywiseclone.png"
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
            p: { xs: 6, sm: 10, md: 10, lg: 15 },
            zIndex: 20,
            width: "100%",
            position: "absolute",
          }}
        >
          <Box
            component="img"
            src="./assets/projects/bebodywiseclone.png"
            sx={{
              width: "100%",
            }}
          />
        </Box>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h2" mb={2}>
          Be Bodywise Clone Website
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: (theme) => theme.palette.secondary.main,
          }}
        >
          An e-commerce website for health related products. A collaborative
          project built by a team of 5 executed in 6 days. We added features
          like Off Canvas Popup cart, cart manipulation & End to End Flow etc.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            mt: 3,
            gap: { xs: 2, sm: 4 },
          }}
        >
          <Typography variant="body2">Tech Stack :</Typography>
          {techStack.map((icon) => (
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
          <CustomButton
            style={{
              "&:hover": {
                bgcolor: "#fff",
                color: primary,
              },
              height: "45px",
              bgcolor: secondary,
            }}
            icon={<IoLogoGithub />}
          >
            Code
          </CustomButton>

          <CustomButton
            style={{
              "&:hover": {
                bgcolor: "#fff",
                color: primary,
              },
              height: "45px",
              bgcolor: secondary,
            }}
            icon={<TbExternalLink />}
          >
            View
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
