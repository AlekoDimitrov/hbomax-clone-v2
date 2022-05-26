import { Box, Image } from "@chakra-ui/react";
import React from "react";

const SquareCard = ({ title, poster_path }) => {
  const IMG_API = "https://image.tmdb.org/t/p/w500";

  return (
    <Box className="outerShadow" h="fit-content">
      <Image src={IMG_API + poster_path} alt={title} />
    </Box>
  );
};

export default SquareCard;
