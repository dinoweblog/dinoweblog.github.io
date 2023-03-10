import { secondary } from "../../app/uiCore/themeColor";
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
      <ReactSlider sliderSettings={{ bigView: 3 }}>
        {skills.map((item) => (
          <SkillsCard key={item} data={item} />
        ))}
      </ReactSlider>
    </Wrapper>
  );
};

export default Skills;
