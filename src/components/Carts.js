import React, { useState } from "react";
import image from "../images/product1.png"
import {MdClear} from "react-icons/md"
import { useProductContext } from "../context/context";



const Carts = ({image, number, name, price}) => {
  const {RemoveItem} = useProductContext()
  

 return (
  <main class="flex gap-2 my-5 md:border-b border-primary md:p-2 md:py-4">
   <div class="w-1/3">
     <img src={image} alt="img"/>
    </div>
    <div class="w-2/3 text-xl flex flex-col justify-between">
     <div class="flex justify-between items-center font-bold">
      <p>{name}</p>
      <MdClear onClick={()=> RemoveItem(name)} class="border border-primary rounded-full"/>
     </div>
     <p class="text-[#616161]">Editorials</p>
     <p class="text-[#616161] hidden md:block">Size:200ft</p>
     <div class="flex justify-between items-center ">
      <div class="flex border border-primary  gap-4 items-center rounded-md" ><button class="pl-3">-</button>
      <p class="border-x px-3 border-primary">{number}</p>
      <button class="pr-3">+</button></div>
      <p>${price}</p>
     </div>
    </div>
  </main>
 )
}

export default Carts