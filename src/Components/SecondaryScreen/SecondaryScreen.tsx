import { Box, list } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";

const SecondaryScreen = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
};

export default SecondaryScreen;
