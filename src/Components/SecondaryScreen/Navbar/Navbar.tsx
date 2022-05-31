import { ReactComponent as HBOSvgLogo } from "../../../assets/hbomax-logo.svg";
import MinAvatar from "../MinAvatar/MinAvatar";
import "./Navbar.css";
import { Box, Flex } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { RiMenu2Fill } from "react-icons/ri";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ActiveUserContext } from "../../../Helper/Context";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [navBackground, setNavBackground] = useState("rgba(0, 0, 0, 0.8)");
  const { activeUser }: any = useContext(ActiveUserContext);

  const listenToScroll = () => {
    window.scrollY > 300
      ? setNavBackground("rgba(0, 0, 0, 0.95)")
      : setNavBackground("rgba(0, 0, 0, 0)");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  });

  return (
    <motion.div
      className="navContainer"
      initial={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      animate={{ backgroundColor: navBackground }}
      whileHover={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        transition: { duration: 0.4 },
      }}
    >
      <Flex
        w={"100%"}
        h={"100%"}
        color={"#ffff"}
        align={"center"}
        justify={"space-between"}
        pl="60px"
        pr="60px"
      >
        <Flex w={"80px"} justify={"space-between"} fontSize={"20px"}>
          <RiMenu2Fill />
          <BsSearch />
        </Flex>
        <HBOSvgLogo className="colorWhite" />
        <RouterLink to={"/who-is-watching"}>
          <MinAvatar name={activeUser} />
        </RouterLink>
      </Flex>
    </motion.div>
  );
};

export default Navbar;
