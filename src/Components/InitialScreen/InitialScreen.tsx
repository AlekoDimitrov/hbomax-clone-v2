import "./InitialScreen.css";
import Register from "./Register/Register";
import WhosWatching from "./WhosWatching/WhosWatching";
import { Flex, Box, background } from "@chakra-ui/react";
import { ReactComponent as HBOSvgLogo } from "../../assets/hbomax-logo.svg";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { BackgroundContext } from "../../Helper/Context";
import RegisterAdult from "./RegisterAdult/RegisterAdult";
import RegisterKid from "./RegisterKid/RegisterKid";

const InitialScreen = () => {
  const { background } = useContext(BackgroundContext);
  return (
    <>
      <div className="circleShadow" />
      <Flex
        h={"100vh"}
        minH={"700px"}
        padding={"30px"}
        background={background.background}
      >
        <HBOSvgLogo className="colorWhite" />
        <Flex zIndex={1} flexDir={"column"} alignItems={"center"} w={"100%"}>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/who-is-watching" element={<WhosWatching />} />
            <Route path="/register-adult" element={<RegisterAdult />} />
            <Route path="/register-kid" element={<RegisterKid />} />
          </Routes>
        </Flex>
      </Flex>
    </>
  );
};

export default InitialScreen;
