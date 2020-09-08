import React from "react";
import Border from "./Border";
const Title = ({ title }) => {
  return (
    <div className="title">
      <h1>{title}</h1>
      <Border />
    </div>
  );
};

export default Title;
