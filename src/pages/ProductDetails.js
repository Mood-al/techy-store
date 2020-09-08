import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../context/products";
import Loading from "../components/Loading";
import Title from "../components/Title";
const ProductDetails = () => {
  const { products } = useContext(AppContext);
  const { id } = useParams();

  const product = products.find((item) => parseInt(id) === item.id);
  if (products.length === 0) {
    return <Loading />;
  } else {
    const { image, title, price, description } = product;
    return (
      <div className="products-details">
        <Title title="product's details " />
        <div className="row">
          <div className="col-md-6">
            <img src={image.url} alt={title} />
          </div>
          <div className="col-md-6">
            <h3>{title}</h3>
            <span>{price} $</span>
            <p>{description}</p>
            <Link to="/cart" className="add-to-cart">
              {" "}
              add to cart
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetails;
