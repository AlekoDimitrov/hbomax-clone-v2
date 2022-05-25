import React from "react";
import "./Home.css";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { AiFillPlayCircle } from "react-icons/ai";
import NavigationButtons from "../../../shared/NavigationButtons/NavigationButtons";

const Home = () => {
  return (
    <Box
      h={"1000px"}
      backgroundColor={"#000000"}
      backgroundImage={
        "https://images3.alphacoders.com/106/thumb-1920-1064725.jpg"
      }
    >
      <Flex color={"#ffff"} h={"60%"} align={"flex-end"} ml={"50px"}>
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
            <NavigationButtons
              content="MORE INFO"
              backgroundColor={"rgba(66, 67, 69, 0.9)"}
              w={"fit-content"}
            />
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
