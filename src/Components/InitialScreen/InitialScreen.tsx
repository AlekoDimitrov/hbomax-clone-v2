import "./InitialScreen.css";
import Register from "./Register/Register";
import { Flex } from "@chakra-ui/react";
import { ReactComponent as HBOSvgLogo } from "../../assets/hbomax-logo.svg";

const InitialScreen = () => {
  return (
    <>
      <div className="circleShadow" />
      <Flex
        h={"100vh"}
        justify={"center"}
        padding={"30px"}
        background={
          "linear-gradient(90deg, #5b135e 0%, #251e6f 100%) border-box"
        }
      >
        <HBOSvgLogo className="colorWhite" />
        <Register />
      </Flex>
    </>
  );
};

export default InitialScreen;
