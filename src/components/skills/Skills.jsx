import { secondary } from "../../app/uiCore/themeColor";
import { ReactSlider } from "../sliders/Slider";
import Wrapper from "../wrapper/Wrapper";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <Wrapper page="My Skills" title="Technical Skills" color={secondary}>
      <ReactSlider sliderSettings={{ bigView: 3 }}>
        {[1, 2, 3, 7].map((item) => (
          <SkillsCard key={item} />
        ))}
      </ReactSlider>
    </Wrapper>
  );
};

export default Skills;
