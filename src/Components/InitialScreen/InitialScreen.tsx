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
import ManageProfiles from "./ManageProfiles/ManageProfiles";
import EditProfile from "./EditProfile/EditProfile";

const InitialScreen = () => {
  const { background }: any = useContext(BackgroundContext);
  return (
    <>
      <div className="circleShadow" />
      <Flex
        h={"100vh"}
        w={"100%"}
        justify={"center"}
        minH={"700px"}
        padding={"30px"}
        background={background.background}
      >
        <HBOSvgLogo className="colorWhite" />
        <Flex zIndex={1} flexDir={"column"} alignItems={"center"} w={"70%"}>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/who-is-watching" element={<WhosWatching />} />
            <Route path="/register-adult" element={<RegisterAdult />} />
            <Route path="/register-kid" element={<RegisterKid />} />
            <Route path="/manage-profiles" element={<ManageProfiles />}></Route>
            <Route
              path="/manage-profiles/edit-profile"
              element={<EditProfile />}
            />
          </Routes>
        </Flex>
      </Flex>
    </>
  );
};

export default InitialScreen;
