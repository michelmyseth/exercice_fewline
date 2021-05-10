import React from "react";
import zelda from "../data/zelda";
import CardHeader from "./components/product-card/header";
import CardBody from "./components/product-card/body";

import ProductCard from "./components/product-card";
import "./styles/app.css";

export const App = () => {
  return (
    <div id="app" className="container default-flex">
      <ProductCard product={zelda} />
      <CardHeader />
      <CardBody />
    </div>
  );
};
