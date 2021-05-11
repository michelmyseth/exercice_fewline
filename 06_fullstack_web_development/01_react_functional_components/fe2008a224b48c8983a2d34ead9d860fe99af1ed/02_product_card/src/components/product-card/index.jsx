import React from "react";
import CardBody from "./body";
import CardFooter from "./footer";
import CardHeader from "./header";

const ProductCard = (props) => {
  const { product } = props;

  return (
    <>
      <CardHeader slug={product} />
      <CardBody slug={product} />
      <CardFooter slug={product} />
    </>
  );
};

export default ProductCard;
