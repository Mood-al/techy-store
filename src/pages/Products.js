import React, { useContext } from "react";
import ProductList from "../components/Products/ProductList";
import { AppContext } from "../context/products";
import Loading from "../components/Loading";
const Products = () => {
  const { loading, products } = useContext(AppContext);

  if (loading) {
    return <Loading />;
  } else {
    return <ProductList title="our products" products={products} />;
  }
};

export default Products;
