import React from "react";
import { Link } from 'react-router-dom'
import { AiOutlineMail } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'


const Footer = () => {
 return (
  <main class="mt-20 md:mt-32">
   <section class=" flex flex-col md:items-center md:justify-center justify-start gap-8 md:m-8 p-8 pr-20 md:pr-0 md:border border-primary">
    <p class="uppercase text-2xl">Newsletter</p>
    <p class="text-sm md:text-xl">Subscribe to get daily updates on new drops & exciting deals </p>
    <div class="flex md:flex-row flex-col md:gap-2 gap-8">
     <input class="p-3 md:w-96 border rounded-sm border-primary" placeholder="Enter your email"  type="text" />
     <button class="w-1/2 rounded-sm bg-primary text-white p-3">Subscribe</button>
    </div>
   </section>
   <section class="flex justify-start md:justify-between md:p-16  m-8">
    <div class="flex justify-center items-center">
     <h3 class='hidden md:block text-primary text-2xl font-bold' >ARTSY.</h3>
    </div>
    <div class="hidden md:block">
     <ul class="flex flex-col justify-between">
      <Link to='/'>Home</Link>
      <Link to='/auction'>Auction</Link>
      <Link to='/market'>MarketPlace</Link>
      <Link to='/drops'>Drops</Link>
     </ul>
    </div>
    <div class="hidden md:block">
     <ul class="flex flex-col justify-between">
      <Link to=''>Blogs</Link>
      <Link to=''>wallets</Link>
      <Link to=''>Rates</Link>
      <Link to=''>High bids</Link>
     </ul>
    </div>
    <div class="flex flex-col  justify-start items-start">
     <p class="mb-6 md:hidden">REACH US</p>
     <ul class="flex flex-col gap-3 justify-start">
      <div class="flex items-center justify-start">
       <AiOutlineMail></AiOutlineMail>
       <p class="text-xs">artsystudios@gmail.com</p>
      </div>
      <div class="flex items-center justify-start">
       <CiLocationOn></CiLocationOn>
       <p class="text-xs">Lagos, Nigeria.</p>
      </div>
     </ul>
    </div>
   </section>
  </main>
 )
}

export default Footer