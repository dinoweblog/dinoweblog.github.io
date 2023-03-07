import { secondary } from "../../app/index";
import Wrapper from "../wrapper/Wrapper";
import AboutMeInfo from "./AboutMeInfo";

const About = () => {
  return (
    <Wrapper
      page="About Me"
      title="About Me"
      color={secondary}
      style={{ width: "80%" }}
    >
      <AboutMeInfo isShow />
    </Wrapper>
  );
};

export default About;
