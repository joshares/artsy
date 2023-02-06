import React from 'react'
import { useState } from 'react';
import Header from '../components/Header';
import auctionOne from "../images/auction1.png"
import { HiArrowRight } from 'react-icons/hi'
import bidOne from "../images/bid1.png"
import bidTwo from "../images/bid2.png"
import { FcLikePlaceholder, FcLike} from "react-icons/fc"
import auctionTwo from "../images/auction2.png"
import auctionThree from "../images/auction3.png"

const Auction = () => {
 return(
  <main class="mx-6 md:mx-12 mb-10">
   <Header subhead={"Auction"}/>
   <p class="text-2xl font-base my-8">Here’s an overview of products actively on auction, explore!</p>
   <section class="w-full scrollbar-hide overflow-x-scroll">
    <div class="flex w-max h-full">
     <div class="relative group md:w-full md:h-full w-72 h-1/5">
     
      <img src={auctionOne} alt="img" class="group-hover:brightness-50 w-full h-full " />
      <p class="w-4/5 absolute bottom-10 md:right-12 right-10 bg-white bg-opacity-20 text-white p-3 text:xl md:text-4xl flex items-center justify-center">6hr : 40mins: 15s</p>
      <p class="text-xl md:text-4xl absolute top-20 md:right-24 right-14 text-white flex items-center gap-8 opacity-0 group-hover:opacity-100">join live stream <span><HiArrowRight/></span></p>
     </div>
     <div class="relative group  md:w-full md:h-full w-72 h-1/5">
      <img src={auctionTwo} alt="img" class="group-hover:brightness-50 w-full h-full" />
      <p class="w-4/5 absolute bottom-10 md:right-12 right-10 bg-white bg-opacity-20 text-white p-3 text-xl md:text-4xl flex items-center justify-center">6hr : 40mins: 15s</p>
      <p class="md:text-4xl text-xl absolute top-20 md:right-24 right-14 text-white flex items-center gap-8 opacity-0 group-hover:opacity-100">join live stream <span><HiArrowRight/></span></p>
     </div>
     <div class="relative group md:w-full md:h-full w-72 h-1/5">
      <img src={auctionThree} alt="img" class="group-hover:brightness-50 w-full h-full" />
      <p class="w-4/5 absolute bottom-10 md:right-12 right-10 bg-white bg-opacity-20 text-white p-3 text-xl md:text-4xl flex items-center justify-center">6hr : 40mins: 15s</p>
      <p class="md:text-4xl text-xl absolute top-20 md:right-24 right-14 text-white flex items-center gap-8 opacity-0 group-hover:opacity-100">join live stream <span><HiArrowRight/></span></p>
     </div>
    </div>
   </section>
   <section>
    <p class="text-xl my-10 font-semibold">Top bids from popular creators </p>
    <article class="flex flex-col text-xl md:flex-row gap-8 md:justify-between">
      <div class="flex flex-col gap-4 md:gap-6">
       <div class="w-full pt-10 h-full p-4 shadow-lg rounded-md md:px-0 relative md:py-20">
        <img src={bidOne} alt="img" class="w-full h-full" />
        <div className='flex justify-between'>
         <p class="md:text-4xl md:p-3 font-bold">Out of the box</p>
         <p class="md:hidden">0.75 ETH</p>
        </div>
        <FcLike class="absolute top-0 right-8 border border-primary rounded-full p-1 md:p-2 text-3xl md:text-6xl"/>
       </div>
       <p class="text-[#616161] font-semibold md:text-3xl">Creator:  <span class="text-[#000000]">  Dan Murray</span></p>
       <p class="text-[#616161] font-semibold md:text-3xl">Date: <span class="text-[#000000]">  12/08/2022</span></p>
       <p class="hidden md:block text-[#616161] font-semibold md:text-3xl">Highest bid: <span class="text-[#000000]">0.75 ETH</span></p>
       <div class="flex bg-[#F7F4F4] justify-between p-4">
        <p class="text-[#616161] font-semibold md:text-3xl" >Current bid <br></br> <span class="text-[#000000]">0.98 ETH</span></p>
        <button class="bg-[#3341C1] px-10 p-4 rounded-md text-white md:text-3xl">Place bid</button>
       </div>
      </div>
      <div class="flex flex-col gap-4 md:gap-6">
       <div class="w-full pt-10 h-full p-4 shadow-lg rounded-md md:px-0 relative md:py-20">
        <img src={bidTwo} alt="img" class="w-full h-full" />
        <div className='flex justify-between'>
         <p class="md:text-4xl md:p-3 font-bold">Out of the box</p>
         <p class="md:hidden">0.75 ETH</p>
        </div>
        <FcLikePlaceholder class="absolute top-0 right-8 border border-primary rounded-full p-1 md:p-2 text-3xl md:text-6xl"/>
       </div>
       <p class="text-[#616161] font-semibold md:text-3xl">Creator:  <span class="text-[#000000]">  Dan Murray</span></p>
       <p class="text-[#616161] font-semibold md:text-3xl">Date: <span class="text-[#000000]">  12/08/2022</span></p>
       <p class="hidden md:block text-[#616161] font-semibold md:text-3xl">Highest bid: <span class="text-[#000000]">0.75 ETH</span></p>
       <div class="flex bg-[#F7F4F4] justify-between p-4">
        <p class="text-[#616161] font-semibold md:text-3xl" >Current bid <br></br> <span class="text-[#000000]">0.98 ETH</span></p>
        <button class="bg-[#3341C1] px-10 p-4 rounded-md text-white md:text-3xl">Place bid</button>
       </div>
      </div>
    </article>
   </section>
  </main>
 )
}

export default Auction;
