import React from "react";
import Header from "../components/Header";
import meta from "../images/metamask.png"
import coin from "../images/coinbase.png"
import wallet from "../images/walletconnect.png"
import phantom from "../images/phantom.png"
import Thank from "../components/Thank";
import { useState } from "react";
import { useProductContext } from "../context/context";

const Payments = () => {
 const [success, setSuccess] = useState(false);
 const {setCart} = useProductContext()

 const handleClick = () => {
  setCart([])
  setSuccess(true)
 }

 if(success === true){
  return <Thank/>
 }

 return (
  <main class="mx-6 md:mx-12">
   <Header subhead={"Payment"} head={"Marketplace/Cart/"}/>
   <section class="my-4">
    <header class="flex flex-col text-2xl">
     <div>
      <p>Select your wallet</p>
      <p class="mt-6 text-base text-[#616161]">Connect with one of our available wallet providers or add and connect a new wallet.  </p>
     </div>
     <div class="flex justify-center gap-2 mt-6 ">
      <img src={meta} alt="img" class=""/>
      <img src={coin} alt="img"/>
      <img src={wallet} alt="img"/>
      <img src={phantom} alt="img"/>
     </div>
    </header>
    <form>
     <div class="flex flex-col gap-4">
      <label for="key" class="text-[#888888]">Key</label>
     <input type="text" required placeholder="please enter your key" class="text-[#747474] outline-none border-none p-2 bg-[#F2F2F2]" id="key"/>
     </div>
     <h1 class="text-2xl uppercase my-6 text-center">Shipping details</h1>
     <div class="flex flex-col gap-4">
      <label for="key" class="text-[#888888]">Email</label>
     <input type="text" placeholder="please enter your email" class="text-[#747474] outline-none border-none p-2 bg-[#F2F2F2]" id="key"/>
     </div>
     <div class="flex flex-col gap-4">
      <label for="key" class="mt-4 text-[#888888]">country</label>
     <input type="text" placeholder="please enter your key" class="text-[#747474] outline-none border-none p-2 bg-[#F2F2F2]" id="key"/>
     </div>
     <div class="flex flex-col gap-4">
      <label for="key" class="mt-4 text-[#888888]">Postal code</label>
     <input type="number" placeholder="please enter your code" class="text-[#747474] outline-none border-none p-2 bg-[#F2F2F2]" id="key"/>
     </div>
     <div class="flex flex-col gap-4">
      <label for="key" class="mt-4 text-[#888888]">Address</label>
     <input type="text" placeholder="please enter your Address" class="text-[#747474] outline-none border-none p-2 bg-[#F2F2F2]" id="key"/>
     </div>
     <div class="flex flex-col gap-4">
      <label for="key" class="mt-4 text-[#888888]">OTP</label>
     <input type="number" required placeholder="please enter your one time password" class="text-[#747474] outline-none border-none p-2 bg-[#F2F2F2]" id="key"/>
     </div>
     <div class="flex justify-center items-center m-4">
     <button type="submit" class="text-white rounded-md flex justify-center items-center px-6 p-2 bg-[#3341C1]" onClick={handleClick} >Confirm</button>
    </div>
    </form>
    
   </section>
   <section>

   </section>
  </main>
 )
}

export default Payments