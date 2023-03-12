import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    color: "#fff",
  },
}));

const IconHoverWithName = ({ icon }) => {
  return (
    <BootstrapTooltip title={icon.name}>
      <IconButton
        sx={{ color: (theme) => theme.palette.secondary.main, fontSize: 31 }}
      >
        {icon.logo}
      </IconButton>
    </BootstrapTooltip>
  );
};

export default IconHoverWithName;
