import React, { useContext } from "react";
import "./Hero.css";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { BiPlay } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";
import NavigationButtons from "../../../shared/NavigationButtons/NavigationButtons";
import SquareCard from "../SquareCard/SquareCard";
import { MoviesContext } from "../../../Helper/Context";
import useMovieFetch from "../../../API/useMovieFetch";
import { motion } from "framer-motion";
import MovieSlider from "../MovieSlider/MovieSlider";

const Hero = () => {
  return (
    <Box
      className="innerShadow"
      h={"fit-content"}
      backgroundColor={"#000000"}
      backgroundImage="https://images3.alphacoders.com/106/thumb-1920-1064725.jpg"
    >
      <Flex color={"#ffff"} align={"flex-end"} ml={"50px"} pt={"400px"}>
        <Flex flexDir={"column"} h={"34%"} justify={"space-between"}>
          <Box zIndex={1}>
            <Box w={"150px"}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/No_Time_to_Die.svg/1200px-No_Time_to_Die.svg.png"
                alt=""
              />
            </Box>
            <Text fontSize={"1xl"} fontWeight={"bold"} mt={"10px"}>
              MOVIE PREMIERE
            </Text>
            <Text fontSize={"1xl"}>
              He's left the service. But danger has a way of following him.
            </Text>
          </Box>
          <HStack spacing={"15px"} mt={"40px"} align={"center"}>
            <Box
              className="gradientCircle"
              position={"relative"}
              cursor={"pointer"}
            >
              <Text fontSize={"4xl"}>
                <BiPlay className="absoluteCenter" />
              </Text>
            </Box>
            <NavigationButtons
              content="MORE INFO"
              backgroundColor={"rgba(92, 99, 102, 0.75)"}
              w={"fit-content"}
            />
          </HStack>
          <Box>
            <Flex align={"center"} mt={"55px"} mb={"15px"}>
              <Text
                fontSize={"25px"}
                fontWeight={"bold"}
                fontFamily={"sans-serif"}
                cursor={"pointer"}
              >
                Continue Watching
              </Text>
              <RiArrowRightSLine color="#a6a6a6" />
            </Flex>
            <MovieSlider titles={true} img={"backdrop_path"} width={"350px"} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Hero;
