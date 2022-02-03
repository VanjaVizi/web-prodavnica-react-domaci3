import Product from "./Product";
import React from "react";

const Cart = ({ products,onAdd,onRemove}) => {
  return (
    <div>
      <h2 className="caption">Moja korpa</h2>
      <div className="all-products">
      {products.map((p) => (
        <Product product={p} key={p.id} onAdd={onAdd} onRemove={onRemove} inCart={1}  />
      ))}</div></div>
    
  );
};

export default Cart;