import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import "./SquareCard.css";

const SquareCard = (props) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <Box
      w={props.width ? props.width : "210px"}
      mr={"20px"}
      pointerEvents={"none"}
      position={"relative"}
    >
      {props.titles && (
        <Box
          position={"absolute"}
          w={"100%"}
          h={"100%"}
          className={"backgroundShadow"}
        />
      )}

      <Image
        src={IMG_URL + props.img}
        alt={props.title}
        className={"background"}
      ></Image>
      {props.titles && (
        <Text
          color={"whiteAlpha.900"}
          w={"100%"}
          position={"absolute"}
          bottom={0}
          left={2}
        >
          {props.title}
        </Text>
      )}
    </Box>
  );
};

export default SquareCard;
