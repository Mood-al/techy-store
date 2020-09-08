import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AppContext } from "../context/products";
const NavBar = () => {
  const { openNav, nav } = useContext(AppContext);
  return (
    <nav>
      <div className="wave">
        <svg
          className={nav ? "svgNav" : null}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            // fill="#0099ff"
            fillOpacity="1"
            d="M0,128L24,144C48,160,96,192,144,176C192,160,240,96,288,69.3C336,43,384,53,432,90.7C480,128,528,192,576,218.7C624,245,672,235,720,197.3C768,160,816,96,864,101.3C912,107,960,181,1008,181.3C1056,181,1104,107,1152,96C1200,85,1248,139,1296,160C1344,181,1392,171,1416,165.3L1440,160L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          ></path>
        </svg>
      </div>
      <Link to="/" className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255.09 177.01">
          <defs></defs>
          <title>Asset 1</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <text className="cls-1" transform="translate(0 103.91)">
                T
                <tspan className="cls-2" x="28.7" y="0">
                  E
                </tspan>
                <tspan x="61.95" y="0">
                  CHY{" "}
                </tspan>
                <tspan className="cls-3" x="0" y="60">
                  ST
                </tspan>
                <tspan x="58.45" y="60">
                  ORE
                </tspan>
              </text>
              <motion.path
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ yoyo: Infinity, duration: 3 }}
                className="cls-4"
                d="M224.18,35.35H201.63V13.1a13.11,13.11,0,0,0-26.21,0V35.35H153.48a13.1,13.1,0,1,0,0,26.2h21.94V83.8a13.11,13.11,0,0,0,26.21,0V61.55h22.55a13.1,13.1,0,0,0,0-26.2Z"
              />
            </g>
          </g>
        </svg>
      </Link>
      <ul className={nav ? "active" : null}>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/products">products</Link>
        </li>
        <li className="cart1">
          <Link to="/cart">
            {" "}
            <i className="fas fa-cart-plus"></i> <span>cart</span>{" "}
            <span className="cart-amount">5</span>
          </Link>
        </li>
      </ul>
      <div className="bars" onClick={openNav}>
        <i className="fas fa-stream"></i>
      </div>
    </nav>
  );
};

export default NavBar;
