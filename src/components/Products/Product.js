import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { id, image, title, price } = props;

  return (
    <div className="col-md-3 mb-4">
      <div className="productCart">
        <Link to={`/products/${id}`} className="card-link">
          <div className="card-details">
            <button className="details">details</button>
          </div>
          <img src={image.url} alt={title} />
        </Link>
        <div className="card-content">
          <h4>{title}</h4>
          <p>$ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
