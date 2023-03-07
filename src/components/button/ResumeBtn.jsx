import { Download } from "@mui/icons-material";
import { secondary } from "../../app/index";
import CustomButton from "./CustomButton";

const ResumeBtn = () => {
  return (
    <CustomButton
      style={{
        "&:hover": {
          bgcolor: secondary,
        },
        pl: 5,
        pr: 5,
        height: "60px",
      }}
      icon={<Download />}
    >
      Get Resume
    </CustomButton>
  );
};

export default ResumeBtn;
