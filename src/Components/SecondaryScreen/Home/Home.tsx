import React, { useContext } from "react";
import "./Home.css";
import { Box, Flex, HStack, Square, Text } from "@chakra-ui/react";
import { BiPlay } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";
import NavigationButtons from "../../../shared/NavigationButtons/NavigationButtons";
import SquareCard from "../SquareCard/SquareCard";
import { MoviesContext } from "../../../Helper/Context";
import useMovieFetch from "../../../API/useMovieFetch";

const Home = () => {
  const { movies }: any = useContext(MoviesContext);
  useMovieFetch();

  console.log(movies);
  return (
    <Box
      overflowX={"hidden"}
      className="innerShadow"
      h={"1200px"}
      backgroundColor={"#000000"}
      backgroundImage={
        "https://images3.alphacoders.com/106/thumb-1920-1064725.jpg"
      }
    >
      <Flex color={"#ffff"} h={"55%"} align={"flex-end"} ml={"50px"}>
        <Flex flexDir={"column"} h={"34%"} justify={"space-between"}>
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
            <Flex align={"center"} mt={"55px"} cursor={"pointer"}>
              <Text
                fontSize={"25px"}
                fontWeight={"bold"}
                fontFamily={"sans-serif"}
              >
                Continue Watching
              </Text>
              <RiArrowRightSLine color="#a6a6a6" />
            </Flex>
            <Box
              display={"grid"}
              gridAutoFlow={"column"}
              gridAutoColumns={"10%"}
              gap={"10px"}
              w={"100%"}
              mt={"10px"}
              className="outerShadow"
              overflowX={"auto"}
            >
              {movies.length > 0 &&
                movies.map((movie) => {
                  return (
                    <SquareCard
                      key={movie.id}
                      poster_path={movie.poster_path}
                    />
                  );
                })}
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
