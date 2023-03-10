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
import ExperienceCard from "./ExperienceCard";

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
          <ExperienceCard data={item} />
        ))}
      </Box>
    </Wrapper>
  );
};

export default WorkExperience;
