import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const SquareCard = (props) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <Box
      w={props.width ? props.width : "210px"}
      mr={"20px"}
      pointerEvents={"none"}
      zIndex={1}
    >
      <Image
        src={IMG_URL + props.img}
        alt={props.title}
        cursor={"pointer"}
        ref={props.reference}
      />
      {props.titles && (
        <Text color={"whiteAlpha.800"} mt={"10px"}>
          {props.title}
        </Text>
      )}
    </Box>
  );
};

export default SquareCard;
