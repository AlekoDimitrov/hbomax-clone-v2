import React, { useContext, useEffect, useRef, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MoviesContext } from "../../../Helper/Context";
import useMovieFetch from "../../../API/useMovieFetch";
import SquareCard from "../SquareCard/SquareCard";
import "./MovieSlider.css";

const MovieSlider = (props) => {
  const { movies }: any = useContext(MoviesContext);
  useMovieFetch();

  const [width, setWidth] = useState(null);
  const slider = useRef();
  const containerSlider = useRef();
  useEffect(() => {
    setWidth(-slider.current.scrollWidth + containerSlider.current.offsetWidth);
  });

  return (
    <Box w={"100vw"} overflow={"hidden"} cursor={"grab"}>
      <motion.div
        ref={containerSlider}
        drag={"x"}
        dragConstraints={{
          right: 0,
          left: width,
        }}
        dragElastic={0.2}
      >
        <Flex pr={"80px"} w={"fit-content"} ref={slider}>
          {movies.length > 0 &&
            movies.map((movie, key) => {
              return (
                <SquareCard
                  titles={props.titles}
                  key={key}
                  title={movie.name ? movie.name : movie.title}
                  img={
                    props.img === "backdrop_path"
                      ? movie.backdrop_path
                      : movie.poster_path
                  }
                  width={props.width}
                />
              );
            })}
        </Flex>
      </motion.div>
    </Box>
  );
};

export default MovieSlider;
