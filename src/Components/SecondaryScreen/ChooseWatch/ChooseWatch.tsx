import { Box, Text } from "@chakra-ui/react";
import "./ChooseWatch.css";
import React, { useContext } from "react";
import { ActiveUserContext } from "../../../Helper/Context";
import MovieSlider from "../MovieSlider/MovieSlider";

const ChooseWatch = () => {
  const { activeUser }: any = useContext(ActiveUserContext);
  return (
    <Box className="innerTopShadow" background={activeUser[2]} pl={"50px"}>
      <Text
        fontSize={"25px"}
        fontWeight={"bold"}
        fontFamily={"sans-serif"}
        cursor={"default"}
        color={"#fff"}
        pt={"80px"}
      >
        Popular Movies
      </Text>
      <MovieSlider
        customUrl={"/discover/movie?sort_by=popularity.desc&api_key="}
      />
      <Text
        fontSize={"25px"}
        fontWeight={"bold"}
        fontFamily={"sans-serif"}
        cursor={"default"}
        color={"#fff"}
        mt={"80px"}
      >
        Popular Series
      </Text>
      <MovieSlider
        customUrl={"/discover/tv?sort_by=popularity.desc&api_key="}
      />
    </Box>
  );
};

export default ChooseWatch;
