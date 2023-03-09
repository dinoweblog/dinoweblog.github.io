import { Box, Typography } from "@mui/material";
import { primary } from "../../../app/index";
import { education } from "../constants";
import ContentCard from "./ContentCard";

const Education = () => {
  return (
    <Box sx={{ mt: 10 }}>
      {education.map((data) => (
        <ContentCard data={data} />
      ))}
    </Box>
  );
};

export default Education;
