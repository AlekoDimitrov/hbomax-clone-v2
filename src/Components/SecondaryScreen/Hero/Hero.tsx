import React, { useContext, useEffect, useState } from "react";
import "./Hero.css";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { BiPlay } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";
import NavigationButtons from "../../../shared/NavigationButtons/NavigationButtons";
import MovieSlider from "../MovieSlider/MovieSlider";
import useMovieFetch from "../../../API/useMovieFetch";
import useLogoFetch from "../../../API/useLogoFetch";

const Hero = () => {
  const movies = useMovieFetch(
    "/discover/movie?sort_by=popularity.desc&api_key="
  );

  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 20)
  );
  const [randomMovieID, setRandomMovieID] = useState("");

  let randomMovie = movies[randomNumber];
  useEffect(() => {
    randomMovie && setRandomMovieID(randomMovie.id);
  });

  let randomMovieLogo = useLogoFetch(
    `/movie/${randomMovieID}/images?api_key=`,
    randomMovieID
  );

  return (
    <Box
      className="innerShadow"
      h={"fit-content"}
      backgroundColor={"#000000"}
      backgroundImage={
        randomMovie &&
        `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`
      }
      backgroundSize={"cover"}
      backgroundPosition={"center"}
    >
      <Flex color={"#ffff"} align={"flex-end"} ml={"50px"} pt={"400px"}>
        <Flex flexDir={"column"} h={"34%"} justify={"space-between"}>
          <Box zIndex={1}>
            <Box w={"300px"} mb={"50px"}>
              <img src={randomMovieLogo} alt="" />
            </Box>
            <Text fontSize={"1xl"} fontWeight={"bold"} mt={"10px"}>
              MOVIE PREMIERE
            </Text>
            <Text
              fontSize={"1xl"}
              maxW={"500px"}
              wordBreak={"break-word"}
              pr={"50px"}
            >
              {randomMovie &&
                randomMovie.overview
                  .split(" ")
                  .slice(0, 20)
                  .map((word) => {
                    return word + " ";
                  })}
              ...
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
            <Flex align={"center"} mt={"80px"} mb={"15px"}>
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
            <MovieSlider
              titles={true}
              img={"backdrop_path"}
              width={"350px"}
              customUrl={"/discover/tv?sort_by=popularity.desc&api_key="}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Hero;
