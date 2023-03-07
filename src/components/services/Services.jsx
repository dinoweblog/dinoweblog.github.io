import { Box } from "@mui/material";
import { primary } from "../../app/index";
import Wrapper from "../wrapper/Wrapper";
import { services } from "./constant";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <Wrapper
      page="My Services"
      title="Provided Service For My Clients."
      color={primary}
      style={{ width: "80%" }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "100%",
            sm: "48% 48%",
            md: "32% 32% 32%",
            lg: "23% 23% 23% 23%",
          },
          justifyContent: "space-between",
        }}
      >
        {services.map((item) => (
          <ServicesCard text={item} />
        ))}
      </Box>
    </Wrapper>
  );
};

export default Services;
