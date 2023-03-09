import { Box } from "@mui/material";
import { secondary } from "../app/index";
import { SkillsCard } from "../components";
import { skills } from "../components/skills/constant";
import PageWrapper from "./wrapper/PageWrapper";

const SkillsPage = () => {
  return (
    <PageWrapper pageTitle="Skills" page="Skills List">
      <Box sx={{ bgcolor: secondary }}>
        <Box
          sx={{
            width: "80%",
            m: "auto",
            pt: 15,
            pb: 15,
            display: "grid",
            gridTemplateColumns: {
              xs: "100%",
              md: "31% 31% 31%",
            },
            justifyContent: "space-between",
            gap: { xs: 5, sm: 5, md: 0 },
          }}
        >
          {skills.map((item) => (
            <SkillsCard data={item} />
          ))}
        </Box>
      </Box>
      <Box sx={{ bgcolor: secondary }}></Box>
    </PageWrapper>
  );
};

export default SkillsPage;
