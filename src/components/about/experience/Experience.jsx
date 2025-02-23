import { Box, LinearProgress } from "@mui/material";
import ExperienceCard from "../../workExperience/ExperienceCard";
import ContentCard from "../education/ContentCard";
import { secondary } from "../../../app/index";

const Experience = ({ experienceData, loading }) => {
  return (
    <Box sx={{ mt: 10 }}>
      {loading ? (
        <Box sx={{ bgcolor: secondary, pt: 8 }}>
          <LinearProgress sx={{ m: "auto", maxWidth: 200 }} color="secondary" />
        </Box>
      ) : (
        experienceData.map((data) => (
          <ContentCard key={data.comapny} date={data.date}>
            <Box flex={6}>
              <ExperienceCard data={data} />
            </Box>
          </ContentCard>
        ))
      )}
    </Box>
  );
};

export default Experience;
