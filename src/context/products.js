// products context
import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "../utils/URL";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nav, setNav] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get(url).then((res) => {
      setProducts(res.data);

      setLoading(false);
      const featuredProducts = res.data.filter(
        (item) => item.featured === true
      );
      setFeaturedProducts(featuredProducts);
    });
  }, []);
  const openNav = (e) => {
    setNav((prevNav) => !prevNav);
  };
  console.log(nav);
  return (
    <AppContext.Provider
      value={{
        products,
        loading,
        featuredProducts,
        openNav,
        nav,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
