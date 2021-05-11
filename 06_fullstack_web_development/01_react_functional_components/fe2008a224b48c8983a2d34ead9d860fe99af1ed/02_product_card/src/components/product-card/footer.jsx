import React from "react";

const CardFooter = (props) => {
  const { slug } = props;
  return (
    <>
      <a href={"games/" + slug.slug}></a>
    </>
  );
};

export default CardFooter;
