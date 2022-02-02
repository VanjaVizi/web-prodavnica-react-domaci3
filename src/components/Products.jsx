import React from 'react';
import Product from './Product';
 
const Products = ({ products, onAdd }) => {

  return (
    <div>
        <div className="all-products">
            {products.map((p) => (
                <Product product={p} key={p.id}  />
                // <Product product={product} key={product.id} onAdd={onAdd} inCart={1} />
                 
            ))}

        </div>
    </div>
  );
    
}

export default Products;
