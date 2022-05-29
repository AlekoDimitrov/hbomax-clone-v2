import { Box, Image } from "@chakra-ui/react";
import React from "react";

const SquareCard = ({ title, poster_path }) => {
  const IMG_API = "https://image.tmdb.org/t/p/w500";

  return (
    <Box
      w={"200px"}
      backgroundColor={"#ffff"}
      mr={"20px"}
      pointerEvents={"none"}
    >
      <Image src={IMG_API + poster_path} alt={title} cursor={"pointer"} />
    </Box>
  );
};

export default SquareCard;
