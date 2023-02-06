import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import { AiOutlineHeart } from "react-icons/ai"
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown} from "react-icons/md"
import { data } from "../productData"
import  ImgOne  from "../images/single1.png"
import  ImgTwo  from "../images/single2.png"
import  ImgThree  from "../images/single3.png"
import { useProductContext } from "../context/context";


const SingleProduct = () => {
 const {number, setNumber, cart, setCart,TotalCarts} = useProductContext()
 const {id} = useParams()
 const [open, setOpen] = useState({desc:false,list:false,status:false})
 const [product , setProduct] = useState(data[id])
 const {Creator,description,image,listing,name,price,status,views} = product

 const AddCart = () => {
  if(cart.length > 0){
     const h = cart.find((cart) => cart.name === `${name}`)
     if(h){
      h.number = (h.number + number)
      h.total = (h.number * price)
      console.log(h)
      setNumber(1)
     }else {
   const items = [...cart,{image:image, name:name, price:price,number:number,total:(price*number)}]
    setCart(items)
    setNumber(1)
  }
  }else {
   const items = [...cart,{image:image, name:name, price:price,number:number,total:(price*number)}]
    setCart(items)
    setNumber(1)
  }
  TotalCarts()
 }
 const minus = () =>{
  if(number === 1){
   setNumber(1)
  }else {
   setNumber(number - 1)
  }
 }
 return (
  <main class="mx-6 md:mx-12">
   <div class="border-b md:border-none pb-4 text-xl  border-primary">
    <Header head={"Marketplace/Editorials/"} subhead={`${name}`} />
   </div>
   <section class="w-full my-6 md:flex md:gap-6  md:border border-primary">
    <div class="md:w-1/2 md:p-4">
     <img src={image} alt="img" class="w-full"/>
    </div>
    <div class="flex  flex-col gap-3 md:w-1/2 md:border-l border-primary ">
     <div class="flex justify-between uppercase font-semibold md:p-2 md:text-4xl md:border-b border-primary">
      <p>{name}</p>
      <p>${price}</p>
     </div>
     <p class="font-semibold md:px-2">Creator: <span class="md:px-2 text-cyan">{Creator}</span></p>
     <p class=" md:px-2 text-[#616161]">Made in italy</p>
     <p class="md:px-2 text-[#616161]">Total views {views}</p>
     <p class="md:px-2 text-2xl"><span class=" cursor-pointer pr-2" onClick={minus}>-</span> {number} <span class="cursor-pointer pl-2" onClick={()=> setNumber(number + 1)}>+</span></p>
     <div class=" md:px-2 flex items-center text-2xl gap-3">
      <button class="px-8 p-2 bg-[#3341C1] rounded-md text-white" onClick={AddCart} >Add to cart</button>
      <AiOutlineHeart class="border border-primary p-2 text-5xl"/>
     </div>
     <article class="py-4">
      <div class="border-y py-8 border-primary">
       <div class="flex md:px-2 items-center justify-between text-2xl">
        <p>Description</p>
        {open.desc ? (
        <MdOutlineKeyboardArrowUp onClick={()=> setOpen({desc:false})}/>
        ) : (
        <MdOutlineKeyboardArrowDown onClick={()=> setOpen({desc:true})} />
        )}
       </div>
       {open.desc ? (<p class="md:p-2">{description}</p>): null}
      </div>
      <div class="border-b py-8 border-primary">
       <div class="flex md:px-2 items-center justify-between text-2xl">
        <p>listing</p>
        {open.list ? (
        <MdOutlineKeyboardArrowUp onClick={()=> setOpen({list:false})}/>
        ) : (
        <MdOutlineKeyboardArrowDown onClick={()=> setOpen({list:true})} />
        )}
       </div>
       {open.list ? (<p class="md:p-2">{listing}</p>): null}
      </div>
      <div class="border-b py-8 border-primary">
       <div class="flex md:px-2 items-center justify-between text-2xl">
        <p>status</p>
        {open.status ? (
        <MdOutlineKeyboardArrowUp onClick={()=> setOpen({status:false})}/>
        ) : (
        <MdOutlineKeyboardArrowDown onClick={()=> setOpen({status:true})} />
        )}
       </div>
       {open.status ? (<p class="md:p-2">{status}</p>): null}
      </div>
     </article>
    </div>
   </section>
   <section class="py-5">
    <h2 class="text-2xl font-semibold my-4">More from this collection</h2>
    <article class="flex gap-5 justify-between">
     <div class="border border-primary p-2 rounded-sm w-full md:h-96 md:w-1/3">
     <img src={ImgOne} alt='img'  class="w-full md:h-5/6" />
     <div class="flex justify-between text-xl font-semibold">
      <p>sassy</p>
      <p>$32.2</p>
     </div>
    </div>
     <div class="border md:w-1/3 border-primary p-2 rounded-sm w-full md:h-96 hidden md:block">
     <img src={ImgTwo} alt='img' class="w-full md:h-5/6 " />
     <div class="flex justify-between text-xl font-semibold">
      <p>Escape</p>
      <p>$32.2</p>
     </div>
    </div>
     <div class="border md:w-1/3 border-primary p-2 rounded-sm w-full md:h-96 hidden md:block">
     <img src={ImgThree} alt='img' class="w-full md:h-5/6" />
     <div class="flex justify-between text-xl font-semibold">
      <p>Restly</p>
      <p>$32.2</p>
     </div>
    </div>
    </article>
   </section>
  </main>
 )
}

export default SingleProduct;