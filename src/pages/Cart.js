import React from "react";
import { useProductContext } from "../context/context";
import { useEffect } from "react";
import Header from "../components/Header";
import Carts from "../components/Carts";
import { Link } from "react-router-dom";
const Cart = () => {
 const {cart,totals,item} = useProductContext()


 if(cart.length < 1){
  return (
   <main class="mx-6 md:mx-12 flex justify-center items-center">
    <h1>NO ITEM IN THE CART</h1>
   </main>
  )
 }

 return (
  <main class="mx-8 md:mx-12">
   <div class="text-xl" >
       <Header subhead={"Cart"} head={"Marketplace/"}/>
   </div>
   <section class="md:border-t md:mt-5 border-primary">
    {cart.map((item)=> {
     return (
      <Carts {...item}/>
     )
    })}
   </section>
   <section class="md:flex flex-row-reverse my-5 gap-5 ">
    <article class="text-xl md:w-1/2 mb-6">
     <div class="flex justify-between items-center">
     <p class="text-[#888888]">Products in cart:</p>
     <p>{item} Items</p>
     </div>
     <div class="flex justify-between items-center">
     <p class="text-[#888888]">Shipping:</p>
     <p>2.53$</p>
     </div>
     <div class="flex justify-between items-center">
     <p class="text-[#888888]">Total:</p>
     <p>${`${totals + 2.53}`}</p>
     </div>
    </article>
    <article class="flex text-xl md:w-1/2 flex-col gap-4 justify-center items-center">
     <Link to="/payment" class="bg-[#3341C1] rounded-md text-white p-2 px-6 text-center w-2/3">Proceed to payments</Link>
     <Link to="/market" class="underline text-[#3341C1] ">Continue shipping</Link>
    </article>
   </section>
  </main>
 )
}

export default Cart