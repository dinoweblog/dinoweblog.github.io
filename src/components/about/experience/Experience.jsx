import { Box } from "@mui/material";
import { experienceData } from "../../workExperience";
import ExperienceCard from "../../workExperience/ExperienceCard";
import ContentCard from "../education/ContentCard";

const Experience = () => {
  return (
    <Box sx={{ mt: 10 }}>
      {experienceData.map((data) => (
        <ContentCard key={data.comapny} date={data.date}>
          <Box flex={6}>
            <ExperienceCard data={data} />
          </Box>
        </ContentCard>
      ))}
    </Box>
  );
};

export default Experience;
