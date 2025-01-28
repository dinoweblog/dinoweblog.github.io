import { RESUME_LINK } from "../../app/apis";
import { primary, secondary, secondaryText } from "../../app/index";
import CustomButton from "./CustomButton";

const ResumeBtn = ({ style, endIcon, startIcon, children, href }) => {
  return (
    <CustomButton
      style={{
        px: 5,
        height: "60px",
        zIndex: 100,
        color: "#ffffff",
        bgcolor: secondaryText,
        "&:hover": {
          bgcolor: "transparent",
          color: "#ffffff",
          borderColor: secondaryText,
          "& .MuiSvgIcon-root": {
            color: "#ffffff",
            transition: "all .5s ease",
          },
        },
        borderRadius: 2,
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
