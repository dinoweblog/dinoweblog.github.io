import { secondary } from "../../app/uiCore/themeColor";
import AnimatedSection from "../animation";
import { ReactSlider } from "../sliders/Slider";
import Wrapper from "../wrapper/Wrapper";
import { skills } from "./constant";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <Wrapper
      page="My Skills"
      title="Technical Skills"
      color={secondary}
      id="skills"
    >
      <AnimatedSection animation="slide-up">
        <ReactSlider sliderSettings={{ bigView: 3 }}>
          {skills.map((item) => (
            <SkillsCard key={item} data={item} />
          ))}
        </ReactSlider>
      </AnimatedSection>
    </Wrapper>
  );
};

export default Skills;
