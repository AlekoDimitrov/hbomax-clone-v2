import { Box, Text } from "@chakra-ui/react";
import "./ChooseWatch.css";
import React, { useContext } from "react";
import { ActiveUserContext, BackgroundContext } from "../../../Helper/Context";
import MovieSlider from "../MovieSlider/MovieSlider";

const ChooseWatch = () => {
  const { activeUser }: any = useContext(ActiveUserContext);
  return (
    <Box
      className="innerTopShadow"
      h={"1000px"}
      background={activeUser[2]}
      pl={"50px"}
    >
      <Box pt={"80px"}>
        <Text
          fontSize={"25px"}
          fontWeight={"bold"}
          fontFamily={"sans-serif"}
          cursor={"pointer"}
          color={"#fff"}
        >
          For You
        </Text>
        <MovieSlider />
      </Box>
    </Box>
  );
};

export default ChooseWatch;
