import React from 'react';

function Product({prod,onAdd,inCart}) {
  return  (  
    <div className="card">
            <div class="card-header" style="padding:0">
                <img className='card-img-top'  src ={prod.image} style="height:300px;width: auto;" />   
            </div>
            <div class="card-body">
                <div class="tag tag-teal"> {prod.category}    </div>  
                
                <h4 name = "naslovKartice">  {prod.name}   </h4>
                

                <p style="font-size:20px;text-decoration:  line-through;margin:0">  {prod.price}  </p>   
                <p style="font-size:20px;"> <strong>  Cena:      </strong>  {prod.price}*0.9 </p>
                
                
                <button type="button" class="btn btn-custom"  style="background-color:#47bcd4;"     >  <i class="fas fa-pencil-alt"></i> </button> 
                <button type="button" class="btn btn-custom"  style="background-color:#a18cd1;"   ><i class="fas fa-trash" ></i></button>  

                
            </div> 
        </div>
    );
}

export default Product;
