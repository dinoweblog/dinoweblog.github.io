import { useState } from "react";
import { getDriveViewLink, secondaryText } from "../../app/index";
import CustomButton from "./CustomButton";

const ResumeBtn = ({
  style,
  endIcon,
  startIcon,
  children,
  href,
  isDownload,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const commonStyle = {
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
  };

  const downloadResume = () => {
    setIsLoading(true);
    const downloadUrl = getDriveViewLink(href, "download");
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", "Dinesh_Sharma_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      {isDownload ? (
        <CustomButton
          style={{ ...commonStyle, minWidth: "140px" }}
          endIcon={endIcon}
          startIcon={startIcon}
          onClick={downloadResume}
          isLoading={isLoading}
        >
          {children}
        </CustomButton>
      ) : (
        <CustomButton
          style={commonStyle}
          endIcon={endIcon}
          startIcon={startIcon}
          href={href}
        >
          {children}
        </CustomButton>
      )}
    </>
  );
};

export default ResumeBtn;
