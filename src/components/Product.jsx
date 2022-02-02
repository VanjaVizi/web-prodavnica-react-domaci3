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
                
                
                {/* <p style="font-size:20px;text-decoration:  line-through;margin:0">  {product.price}  </p>   
                <p style="font-size:20px;"> <strong>  Cena:      </strong>  {product.price}*0.9 </p> */}
                
                <p >  {product.price}  </p>   
                <p  > <strong>  Cena:      </strong>  {product.price*0.9} </p>
              

                
            </div> 
        </div>
    );
}

export default Product;
