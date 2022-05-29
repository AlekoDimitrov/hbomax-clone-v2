import { Box } from "@chakra-ui/react";
import "./ChooseWatch.css";
import React, { useContext } from "react";
import { ActiveUserContext, BackgroundContext } from "../../../Helper/Context";

const ChooseWatch = () => {
  const { activeUser }: any = useContext(ActiveUserContext);
  return (
    <Box
      className="innerTopShadow"
      h={"1000px"}
      background={activeUser[2]}
    ></Box>
  );
};

export default ChooseWatch;
