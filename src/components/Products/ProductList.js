import React from "react";
import Product from "./Product";
import Border from "../Border";
const ProductList = ({ title, products }) => {
  return (
    <section className="productsList">
      <h1>{title}</h1>
      <Border />
      <div className="row">
        {products.map((item) => (
          <Product {...item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
