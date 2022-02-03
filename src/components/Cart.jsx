import Product from "./Product";
import React from "react";

const Cart = ({ products }) => {
  return (
    <div>
      <h3 className="caption">Moja korpa:</h3>
      <div className="all-books">
      {products.map((p) => (
        <Product product={p} key={p.id} inCart={0} />
      ))}</div></div>
    
  );
};

export default Cart;