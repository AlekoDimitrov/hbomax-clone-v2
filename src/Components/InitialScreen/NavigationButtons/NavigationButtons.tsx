import React from "react";
import { Button } from "@chakra-ui/react";

const NavigationButtons = (props) => {
  return (
    <Button
      borderRadius={50}
      w={200}
      h={12}
      backgroundColor={"rgba(255,255,255,0.2)"}
      color={"#ffff"}
      letterSpacing={"2px"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.icon}
      {props.content}
    </Button>
  );
};

export default NavigationButtons;
