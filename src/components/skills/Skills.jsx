import { Skeleton } from "@mui/material";
import { secondary } from "../../app/uiCore/themeColor";
import AnimatedSection from "../animation";
import { ReactSlider } from "../sliders/Slider";
import Wrapper from "../wrapper/Wrapper";
import SkillsCard from "./SkillsCard";
import { useFirestoreCollection } from "../../app/apis/useFirestore";

const Skills = () => {
  const {
    data: skillData,
    loading,
    error,
  } = useFirestoreCollection(["skills", "skills"], ["createdAt", "desc"]);

  console.log("Firestore error: ", error, skillData);

  return (
    <Wrapper page="My Skills" title="Skills" color={secondary} id="skills">
      <AnimatedSection animation="slide-up">
        <ReactSlider sliderSettings={{ bigView: 3 }}>
          {loading
            ? [1, 2, 3, 4].map((i) => (
                <Skeleton
                  key={i}
                  variant="rectangular"
                  sx={{
                    height: { xs: 780, sm: 780, md: 780 },
                  }}
                />
              ))
            : skillData.map((item) => <SkillsCard key={item} data={item} />)}
        </ReactSlider>
      </AnimatedSection>
    </Wrapper>
  );
};

export default Skills;
