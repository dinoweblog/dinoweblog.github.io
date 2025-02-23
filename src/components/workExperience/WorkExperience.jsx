import { Box, LinearProgress } from "@mui/material";
import { primary, secondary } from "../../app/uiCore/themeColor";
import Wrapper from "../wrapper/Wrapper";
import ExperienceCard from "./ExperienceCard";
import { useFirestoreCollection } from "../../app/apis/useFirestore";

const WorkExperience = () => {
  const {
    data: experienceData,
    loading,
    error,
  } = useFirestoreCollection(
    ["experience", "experience"],
    ["createdAt", "desc"]
  );
  console.log("Firestore error: ", error, experienceData);

  return (
    <Wrapper
      page="Work Experience"
      title="Work With Trusted Comapny."
      color={primary}
      style={{ width: "80%" }}
    >
      {loading ? (
        <Box sx={{ bgcolor: secondary, pt: 8 }}>
          <LinearProgress sx={{ m: "auto", maxWidth: 200 }} color="secondary" />
        </Box>
      ) : (
        <Box
          sx={{
            border: "1px solid #ffffff0d",
            minHeight: 200,
          }}
        >
          {experienceData.map((item) => (
            <ExperienceCard key={item.position} data={item} />
          ))}
        </Box>
      )}
    </Wrapper>
  );
};

export default WorkExperience;
