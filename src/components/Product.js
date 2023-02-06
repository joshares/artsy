import React from "react";
import { Link } from "react-router-dom";


const Product = ({image, name, price,index}) => {
 return(
     <div class="w- md:p-2 md:rounded-sm md:shadow-md">
         <Link to={`${index}`}>
         <img src={image} alt="img" class="w-full"/>
         </Link>
         <div class="flex md:gap-4 md:flex-col justify-between uppercase">
          <p>{name}</p>
          <p class="md:font-bold">${price}</p>
         </div>
    </div>
 )
}


export default Product;