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
      background={activeUser[2]}
      pl={"50px"}
      position={"relative"}
    >
      <Box
        position={"fixed"}
        backgroundColor={"#fff"}
        w={"100%"}
        h={"100px"}
        zIndex={100}
      />
      <Text
        fontSize={"25px"}
        fontWeight={"bold"}
        fontFamily={"sans-serif"}
        cursor={"pointer"}
        color={"#fff"}
        pt={"80px"}
      >
        For You
      </Text>
      <MovieSlider />
      <Text
        fontSize={"25px"}
        fontWeight={"bold"}
        fontFamily={"sans-serif"}
        cursor={"pointer"}
        color={"#fff"}
        mt={"80px"}
      >
        Just Added
      </Text>
      <MovieSlider />{" "}
      <Text
        fontSize={"25px"}
        fontWeight={"bold"}
        fontFamily={"sans-serif"}
        cursor={"pointer"}
        color={"#fff"}
        mt={"80px"}
      >
        Just Added
      </Text>
      <MovieSlider />{" "}
      <Text
        fontSize={"25px"}
        fontWeight={"bold"}
        fontFamily={"sans-serif"}
        cursor={"pointer"}
        color={"#fff"}
        mt={"80px"}
      >
        Just Added
      </Text>
      <MovieSlider />{" "}
      <Text
        fontSize={"25px"}
        fontWeight={"bold"}
        fontFamily={"sans-serif"}
        cursor={"pointer"}
        color={"#fff"}
        mt={"80px"}
      >
        Just Added
      </Text>
      <MovieSlider />{" "}
      <Text
        fontSize={"25px"}
        fontWeight={"bold"}
        fontFamily={"sans-serif"}
        cursor={"pointer"}
        color={"#fff"}
        mt={"80px"}
      >
        Just Added
      </Text>
      <MovieSlider />{" "}
      <Text
        fontSize={"25px"}
        fontWeight={"bold"}
        fontFamily={"sans-serif"}
        cursor={"pointer"}
        color={"#fff"}
        mt={"80px"}
      >
        Just Added
      </Text>
      <MovieSlider />{" "}
      <Text
        fontSize={"25px"}
        fontWeight={"bold"}
        fontFamily={"sans-serif"}
        cursor={"pointer"}
        color={"#fff"}
        mt={"80px"}
      >
        Just Added
      </Text>
      <MovieSlider />{" "}
      <Text
        fontSize={"25px"}
        fontWeight={"bold"}
        fontFamily={"sans-serif"}
        cursor={"pointer"}
        color={"#fff"}
        mt={"80px"}
      >
        Just Added
      </Text>
      <MovieSlider />{" "}
      <Text
        fontSize={"25px"}
        fontWeight={"bold"}
        fontFamily={"sans-serif"}
        cursor={"pointer"}
        color={"#fff"}
        mt={"80px"}
      >
        Just Added
      </Text>
      <MovieSlider />
    </Box>
  );
};

export default ChooseWatch;
