import { Box } from "@mui/material";
import { education } from "../constants";
import ContentCard from "./ContentCard";

const Education = () => {
  return (
    <Box sx={{ mt: 10 }}>
      {education.map((data) => (
        <ContentCard key={data.degree} data={data} />
      ))}
    </Box>
  );
};

export default Education;
