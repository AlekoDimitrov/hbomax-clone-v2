import "./ColorButtons.css";
import { motion } from "framer-motion";

const ColorButtons = () => {
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.4 }}
        whileFocus={{ border: "3px solid white" }}
        className={["button1", "defaultStyle"].join(" ")}
      />
      <motion.button
        whileHover={{ scale: 1.4 }}
        whileFocus={{ border: "3px solid white" }}
        className={["button2", "defaultStyle"].join(" ")}
      />
      <motion.button
        whileHover={{ scale: 1.4 }}
        whileFocus={{ border: "3px solid white" }}
        className={["button3", "defaultStyle"].join(" ")}
      />
      <motion.button
        whileHover={{ scale: 1.4 }}
        whileFocus={{ border: "3px solid white" }}
        className={["button4", "defaultStyle"].join(" ")}
      />
      <motion.button
        whileHover={{ scale: 1.4 }}
        whileFocus={{ border: "3px solid white" }}
        className={["button5", "defaultStyle"].join(" ")}
      />
    </>
  );
};

export default ColorButtons;
