import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { FaRegHandPointRight } from "../../app/index";
import { experienceData } from ".";
import { primary, secondary } from "../../app/uiCore/themeColor";
import Wrapper from "../wrapper/Wrapper";

const WorkExperience = () => {
  return (
    <Wrapper
      page="Work Experience"
      title="Work With Trusted Comapny."
      color={primary}
      style={{ width: "80%" }}
    >
      <Box
        sx={{
          border: "1px solid #ffffff0d",
          minHeight: 200,
        }}
      >
        {experienceData.map((item) => (
          <Box sx={{ p: { xs: 1, sm: 5 } }}>
            <Typography variant="h2">{item.position}</Typography>
            <Typography variant="h3">{item.comapny}</Typography>
            <Typography variant="body2">{item.date}</Typography>
            <Typography variant="body2">{item.description}</Typography>
            <List>
              {item.responsibility.map((text) => (
                <ListItem disablePadding>
                  <ListItemIcon
                    sx={{ color: (theme) => theme.palette.secondary.main }}
                  >
                    <FaRegHandPointRight />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="body2">{text}</Typography>}
                  />
                </ListItem>
              ))}
            </List>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography variant="body2">
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ fontWeight: 600 }}
                >
                  Tech Stack:
                </Typography>
                {` ${item.techStack}`}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Wrapper>
  );
};

export default WorkExperience;
