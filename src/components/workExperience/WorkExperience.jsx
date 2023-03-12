import { Box } from "@mui/material";
import { experienceData } from ".";
import { primary } from "../../app/uiCore/themeColor";
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
