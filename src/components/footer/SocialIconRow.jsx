import SocialMedia from "../../design/SocialMedia";

const SocialIconRow = ({ sx }) => {
  return (
    <SocialMedia
      style={{
        position: "static",
        borderColor: "#3b3d49",
        fontSize: { xs: 16 },
        minWidth: { xs: 45, sm: 45, md: 60 },
        minHeight: { xs: 45, sm: 45, md: 60 },
      }}
      sx={{
        display: "flex",
        gap: { xs: 4, md: 2, lg: 4 },
        width: "100%",
        justifyContent: { sm: "start", lg: "end" },
        ...sx,
      }}
    />
  );
};

export default SocialIconRow;
