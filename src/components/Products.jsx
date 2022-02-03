import React from 'react';
import Product from './Product';
 
const Products = ({ products, onAdd,onRemove }) => {

  return (
    <div>
        <div className="all-products">
            {products.map((p) => (
  
                 <Product product={p} key={p.id} onAdd={onAdd} onRemove={onRemove} inCart={1} />
                 
            ))}

        </div>
    </div>
  );
    
}

export default Products;
