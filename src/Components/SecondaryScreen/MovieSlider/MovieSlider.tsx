import React, { useEffect, useRef, useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useMovieFetch from "../../../API/useMovieFetch";
import SquareCard from "../SquareCard/SquareCard";
import "./MovieSlider.css";

const MovieSlider = (props) => {
  const movies = useMovieFetch(
    props.customUrl
      ? props.customUrl
      : "/discover/movie?sort_by=popularity.desc&api_key="
  );
  const [width, setWidth] = useState(null);
  const slider = useRef();
  const containerSlider = useRef();
  useEffect(() => {
    setWidth(-slider.current.scrollWidth + containerSlider.current.offsetWidth);
  });
  const [arrowBackground, setArrowBackground] = useState("rgba(36,36,36, 0)");
  const [arrowSlide, setArrowSlide] = useState(0);
  const [displayLeft, setDisplayLeft] = useState("none");
  const [displayRight, setDisplayRight] = useState("");

  return (
    <div
      onMouseEnter={() => setArrowBackground("rgba(36,36,36, 0.6)")}
      onMouseLeave={() => setArrowBackground("rgba(36,36,36, 0.0)")}
      className="mainContainer"
    >
      <Flex
        align={"center"}
        justify={"space-between"}
        pointerEvents={"none"}
        position={"absolute"}
        zIndex={2}
        h={"100%"}
        w={"100%"}
        pr={"65px"}
      >
        <Box h={"100%"}>
          <Box h={"100%"} display={displayLeft}>
            <motion.div
              className="navArrowsContainer"
              initial={{ backgroundColor: "rgba(36,36,36, 0)" }}
              animate={{ backgroundColor: arrowBackground }}
              onClick={() => {
                if (arrowSlide < 0) {
                  setArrowSlide(
                    arrowSlide + containerSlider.current.offsetWidth
                  );
                }
                if (arrowSlide < 0 - containerSlider.current.offsetWidth) {
                  setDisplayLeft("");
                  setDisplayRight("");
                } else {
                  setDisplayLeft("none");
                }
              }}
            >
              <Text fontSize={"3xl"} color={"white"}>
                <MdOutlineArrowBackIos />
              </Text>
            </motion.div>
          </Box>
        </Box>
        <Box h={"100%"}>
          <Box h={"100%"} display={displayRight}>
            <motion.div
              className="navArrowsContainer"
              initial={{ backgroundColor: "rgba(36,36,36, 0)" }}
              animate={{ backgroundColor: arrowBackground }}
              onClick={() => {
                if (arrowSlide > width) {
                  setArrowSlide(
                    arrowSlide - containerSlider.current.offsetWidth
                  );
                }
                if (arrowSlide > width + containerSlider.current.offsetWidth) {
                  setDisplayLeft("");
                  setDisplayRight("");
                } else {
                  setDisplayRight("none");
                }
              }}
            >
              <Text fontSize={"3xl"} color={"white"}>
                <MdOutlineArrowForwardIos />
              </Text>
            </motion.div>
          </Box>
        </Box>
      </Flex>
      <motion.div
        ref={containerSlider}
        animate={{ x: arrowSlide }}
        // drag={"x"}
        // dragConstraints={{
        //   right: 0,
        //   left: width,
        // }}
        // dragElastic={0.2}
      >
        <Flex w={"fit-content"} ref={slider} cursor={"grab"}>
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
    </div>
  );
};

export default MovieSlider;
