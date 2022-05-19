import "./InitialScreen.css";
import Register from "./Register/Register";
import { Flex, Box } from "@chakra-ui/react";
import { ReactComponent as HBOSvgLogo } from "../../assets/hbomax-logo.svg";

const InitialScreen = () => {
  return (
    <>
      <div className="circleShadow" />
      <Flex
        h={"100vh"}
        minH={"700px"}
        padding={"30px"}
        background={
          "linear-gradient(90deg, #5b135e 0%, #251e6f 100%) border-box"
        }
      >
        <Flex zIndex={1} flexDir={"column"} alignItems={"center"} w={"100%"}>
          <HBOSvgLogo className="colorWhite" />
          <Register />
        </Flex>
      </Flex>
    </>
  );
};

export default InitialScreen;
