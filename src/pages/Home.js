import React from "react";
import landing from "../undraw_add_to_cart_vkjp.svg";
import { Link } from "react-router-dom";
import FeaturedProducts from "../components/Products/FeaturedProducts";
function Home() {
  return (
    <main className="home">
      <div className="row">
        <div className="col-md-6">
          <h1>welcome to techy store </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi id
            possimus aperiam deserunt neque nisi eos facilis quas reiciendis
            iste minus quisquam alias dicta velit deleniti labore cupiditate
            earum repellat, explicabo, magni tempora? Ullam accusamus quibusdam,
            omnis culpa non iure doloremque voluptatum rem eum harum sapiente
            unde, impedit ut asperiores?
          </p>
          <Link to="/products" className="toProducts">
            see our products
          </Link>
        </div>
        <div className="col-md-6">
          <img src={landing} alt="" />
        </div>
      </div>
      <FeaturedProducts />
    </main>
  );
}

export default Home;
