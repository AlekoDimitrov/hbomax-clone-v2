import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import "./MinAvatar.css";
import { BackgroundContext } from "../../../Helper/Context";

const MinAvatar = (props) => {
  const { background }: any = useContext(BackgroundContext);

  return (
    <Flex>
      <Flex cursor={"pointer"} position={"relative"} width={"fit-content"}>
        <Box
          className="minCircleBorder"
          background={
            props.background ? props.background : background.avatarBackground
          }
        />
        <Text
          fontSize={"1xl"}
          color="#ffff"
          position={"absolute"}
          className="centerInsideCircle disableSelect"
        >
          {props.icon !== undefined ? props.icon : props.name.charAt(0)}
        </Text>
      </Flex>
      <Flex justify={"center"} align={"center"} ml={"10px"}>
        <Text fontSize="lg" color={"#ffff"} zIndex={1} cursor={"pointer"}>
          {props.name}
        </Text>
      </Flex>
    </Flex>
  );
};

export default MinAvatar;
