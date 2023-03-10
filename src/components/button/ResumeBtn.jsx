import { secondary } from "../../app/index";
import CustomButton from "./CustomButton";

const ResumeBtn = ({ href, style, endIcon, startIcon, children }) => {
  return (
    <CustomButton
      style={{
        "&:hover": {
          bgcolor: secondary,
        },
        pl: 5,
        pr: 5,
        height: "60px",
        ...style,
      }}
      endIcon={endIcon}
      startIcon={startIcon}
      href={href}
    >
      {children}
    </CustomButton>
  );
};

export default ResumeBtn;
