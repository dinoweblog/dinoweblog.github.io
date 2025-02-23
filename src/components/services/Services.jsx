import { Box } from "@mui/material";
import { primary } from "../../app/index";
import Wrapper from "../wrapper/Wrapper";
import ServicesCard from "./ServicesCard";
import { services } from "../../constant";

const Services = () => {
  return (
    <Wrapper
      page="I Work On that"
      title="My Working Areas"
      color={primary}
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
          <ServicesCard key={item.title} text={item} />
        ))}
      </Box>
    </Wrapper>
  );
};

export default Services;
