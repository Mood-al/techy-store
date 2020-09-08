import React, { useContext } from "react";
// import Title from "../Title";
import ProductList from "./ProductList";
import { AppContext } from "../../context/products";
import Loading from "../Loading";
const FeaturedProducts = () => {
  const { featuredProducts, loading } = useContext(AppContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="featured-products">
      <ProductList title="our featured products" products={featuredProducts} />
    </div>
  );
};

export default FeaturedProducts;
