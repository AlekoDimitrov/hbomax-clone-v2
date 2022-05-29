import React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import { Box } from "@chakra-ui/react";
import ChooseWatch from "../ChooseWatch/ChooseWatch";

const Home = () => {
  return (
    <Box overflowX={"hidden"}>
      <Hero />
      <ChooseWatch />
    </Box>
  );
};

export default Home;
