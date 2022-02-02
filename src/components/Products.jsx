import React from 'react';

const Products = ({ products, onAdd }) => {

  return (
    <div>
        <div className="all-products">
            {products.map((product) => (
                <Product product={product} key={product.id} onAdd={onAdd} inCart={1} />
            ))}

        </div>
    </div>
  );
    
}

export default Products;
