import { Box } from "@mui/material";
import { useEffect } from "react";
import {
  About,
  Contact,
  Home,
  Projects,
  Services,
  Skills,
} from "../components";
import { useFirestoreDoc } from "../app/apis/useFirestore";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: aboutData, loading, error } = useFirestoreDoc(["about"]);
  console.log("Firestore error: ", error);

  return (
    <Box sx={{overflowX: "hidden"}}>
      <Home aboutData={aboutData} loading={loading} />
      <Skills />
      <Services />
      <Projects />
      <About aboutData={aboutData} loading={loading} />
      <Contact aboutData={aboutData} loading={loading} />
    </Box>
  );
};

export default HomePage;
