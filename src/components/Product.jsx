import React from 'react';

function Product({product,onAdd,inCart}) {
  return  (  
    <div className="card">
     
            <div className="card-header" >
                 <img className='card-img-top'  src ={product.image}   /> 
            </div>
            <div className="card-body">
                <div className="tag tag-teal"> {product.category}    </div>  
                
                <h4 className = "naslovKartice">  {product.name}   </h4>
                
    
                
                <p className='cenaRegularna'>  {product.price}  </p>   
                <p className='cenaPopust' > <strong>  Cena:      </strong>  {product.price*0.9} </p>
              

                
            </div> 
        </div>
    );
}

export default Product;
