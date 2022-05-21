import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import "./Avatar.css";
import { motion } from "framer-motion";
import { BackgroundContext } from "../../../Helper/Context";

const Avatar = (props) => {
  let variants = "";
  if (props.name !== undefined) {
    variants = {
      whileHover: {
        scale: 1.15,
        transition: {
          duration: 0.3,
        },
      },
    };
  }
  const { background } = useContext(BackgroundContext);

  return (
    <motion.div variants={variants} whileHover="whileHover">
      <Flex
        cursor={"pointer"}
        position={"relative"}
        width={"fit-content"}
      >
        <Box
          className="circleBorder"
          background={
            props.background ? props.background : background.avatarBackground
          }
        />
        <Text
          fontSize={"6xl"}
          color="#ffff"
          position={"absolute"}
          className="centerInsideCircle disableSelect"
        >
          {props.icon !== undefined ? props.icon : props.name.charAt(0)}
        </Text>
      </Flex>
      <Flex justify={"center"}>
        <Text
          fontSize="lg"
          color={"#ffff"}
          zIndex={1}
          mt="10px"
          cursor={"pointer"}
        >
          {props.name}
        </Text>
      </Flex>
    </motion.div>
  );
};

export default Avatar;
