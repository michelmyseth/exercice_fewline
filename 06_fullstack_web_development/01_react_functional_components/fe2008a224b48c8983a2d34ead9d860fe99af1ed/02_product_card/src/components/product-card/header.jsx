import React from "react";

const CardHeader = (props) => {
  const { slug } = props;
  return (
    <>
      <h1>{slug.name}</h1>

      {slug.platforms.map((platform, index) => (
        <div key={index}>
          <img src={platform.platform_logo.url} />
        </div>
      ))}
    </>
  );
};

export default CardHeader;
