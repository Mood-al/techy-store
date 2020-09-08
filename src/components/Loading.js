import React from "react";
import { motion } from "framer-motion";
const Loading = () => {
  return (
    <div className="loading">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255.09 177.01">
        <defs></defs>
        <title>Asset 1</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <text className="cls-1" transform="translate(0 130.91)">
              LOADING REASOURSE
            </text>
            <motion.path
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ yoyo: Infinity, duration: 0.5 }}
              className="cls-4"
              d="M224.18,35.35H201.63V13.1a13.11,13.11,0,0,0-26.21,0V35.35H153.48a13.1,13.1,0,1,0,0,26.2h21.94V83.8a13.11,13.11,0,0,0,26.21,0V61.55h22.55a13.1,13.1,0,0,0,0-26.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Loading;
