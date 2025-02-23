import { Box } from "@mui/material";
import ContentCard from "./ContentCard";
import { education } from "../../../constant";

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
