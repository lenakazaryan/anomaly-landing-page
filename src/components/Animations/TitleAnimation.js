import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

function TitleAnimation() {
  const [replay, setReplay] = useState(true);
  const placeholderText = [{ type: "heading1", text: "Write.Publish.Earn." }];
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <motion.div
      className="App"
      initial="hidden"
      animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      <div className="container">
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}

export default TitleAnimation;
