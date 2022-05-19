import "./ColorButtons.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { BackgroundContext } from "../../../Helper/Context";

const ColorButtons = (props) => {
  const { setBackground } = useContext(BackgroundContext);
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.4 }}
        whileFocus={{ border: "3px solid white" }}
        className={["button1", "defaultStyle"].join(" ")}
        onClick={() =>
          setBackground({
            background:
              "linear-gradient(90deg, #5b135e 0%, #251e6f 100%) border-box",
            avatarBackground:
              "linear-gradient(140deg, #ff83e2, #fd04c4) border-box",
          })
        }
      />
      <motion.button
        whileHover={{ scale: 1.4 }}
        whileFocus={{ border: "3px solid white" }}
        className={["button2", "defaultStyle"].join(" ")}
        onClick={() =>
          setBackground({
            background:
              "linear-gradient(90deg, #670451 0%, #3C0652 100%) border-box",
            avatarBackground:
              "linear-gradient(140deg, #e833bc, #8209f5) border-box",
          })
        }
      />
      <motion.button
        whileHover={{ scale: 1.4 }}
        whileFocus={{ border: "3px solid white" }}
        className={["button3", "defaultStyle"].join(" ")}
        onClick={() =>
          setBackground({
            background:
              "linear-gradient(90deg, #3B0B5B 0%, #561675 100%) border-box",
            avatarBackground:
              "linear-gradient(140deg, #ae68fa, #6d0ae9) border-box",
          })
        }
      />
      <motion.button
        whileHover={{ scale: 1.4 }}
        whileFocus={{ border: "3px solid white" }}
        className={["button4", "defaultStyle"].join(" ")}
        onClick={() =>
          setBackground({
            background:
              "linear-gradient(90deg, #2E1764 0%, #102554 100%) border-box",
            avatarBackground:
              "linear-gradient(140deg, #8e01ff, #4a8cfe) border-box",
          })
        }
      />
      <motion.button
        whileHover={{ scale: 1.4 }}
        whileFocus={{ border: "3px solid white" }}
        className={["button5", "defaultStyle"].join(" ")}
        onClick={() =>
          setBackground({
            background:
              "linear-gradient(90deg, #0D0E5A 0%, #2D3489 100%) border-box",
            avatarBackground:
              "linear-gradient(140deg, #6899fe, #1a0dff) border-box",
          })
        }
      />
    </>
  );
};

export default ColorButtons;
