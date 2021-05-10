import React from "react";
import zelda from "../../../data/zelda";

const CardHeader = () => {
  return (
    <>
      <h1>{props.name}</h1>
      <img src={zelda.platforms.map((platform) => platform.platform_logo.url)} />
    </>
  );
};

export default CardHeader;
