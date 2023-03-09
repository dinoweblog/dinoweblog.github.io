import { Box } from "@mui/material";
import { experience } from "../constants";
import ContentCard from "../education/ContentCard";

const Experience = () => {
  return (
    <Box sx={{ mt: 10 }}>
      {experience.map((data) => (
        <ContentCard data={data} />
      ))}
    </Box>
  );
};

export default Experience;
