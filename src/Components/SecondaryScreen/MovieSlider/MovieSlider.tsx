import React, { useContext } from "react";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MoviesContext } from "../../../Helper/Context";
import useMovieFetch from "../../../API/useMovieFetch";
import SquareCard from "../SquareCard/SquareCard";

const MovieSlider = () => {
  const { movies }: any = useContext(MoviesContext);
  useMovieFetch();

  return (
    <Box w={"100vw"}>
      <motion.div drag={"x"} dragConstraints={{ right: 0 }} dragElastic={0.15}>
        <Flex w={"fit-content"}>
          {movies.length > 0 &&
            movies.map((movie, key) => {
              return (
                <SquareCard
                  key={key}
                  title={movie.title}
                  poster_path={movie.poster_path}
                />
              );
            })}
        </Flex>
      </motion.div>
    </Box>
  );
};

export default MovieSlider;
