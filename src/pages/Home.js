import React from "react";
import NavBar from "../features/navbar/NavBar";
import ProductList from "../features/product/components/productList";

function Home() {
  return (
    <div>
      <NavBar>
        <ProductList />
      </NavBar>
    </div>
  );
}

export default Home;
