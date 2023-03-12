import { RESUME_LINK } from "../../app/apis";
import { secondary } from "../../app/index";
import CustomButton from "./CustomButton";

const ResumeBtn = ({ style, endIcon, startIcon, children, href }) => {
  return (
    <CustomButton
      style={{
        "&:hover": {
          bgcolor: secondary,
        },
        pl: 5,
        pr: 5,
        height: "60px",
        zIndex: 100,
        ...style,
      }}
      endIcon={endIcon}
      startIcon={startIcon}
      href={href ? href : RESUME_LINK}
    >
      {children}
    </CustomButton>
  );
};

export default ResumeBtn;
