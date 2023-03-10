import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { secondary } from "../../app/uiCore/themeColor";
import { CustomButton } from "../button";

const HireMeBtn = ({ style }) => {
  return (
    <CustomButton
      style={{
        "&:hover": {
          bgcolor: secondary,
        },
        ...style,
      }}
      icon={<KeyboardDoubleArrowRight />}
    >
      Resume
    </CustomButton>
  );
};

export default HireMeBtn;
