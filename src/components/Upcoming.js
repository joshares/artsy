import React from 'react'
import upcomingOne from '../images/upcoming.png'
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md'

const Upcoming = () => {
 return(
  <main class="bg-gradient-to-r from-cyan via-byan to-ayan md:p-16 p-6 text-white mb-6">
   <h2 class='text-4xl font-medium md:block hidden
   '>See Upcoming Auctions and Exhibitions</h2>
   <div class="w-1/2 h-0.5 bg-white hidden md:block m-4"></div>
   <section class='relative'>
    <div class="h-64 md:h-full w-full">
     <img src={upcomingOne} alt='img' class="h-full w-full"/>
    </div>
    <div class="flex md:flex-row md:justify-between p-1 md:pb-10 md:p-6 md:bottom-0  top-0 absolute flex-col md:items-end">
     <div class="flex flex-col md:w-3/5 pr-8 gap-3">
      <h2 class="text-2xl md:text-3xl pl-9 md:pl-20">MONALISA REDEFINED IN STYLE</h2>
      <p class="text-xs uppercase flex items-center md:text-sm md:ml-18"><span class="text-4xl md:text-6xl md:pl-5 ">01</span> starts on: 08:00 gts. monday </p>
      <p class='text-xs font-medium md:text-sm pl-9 md:pl-20'>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.</p>
     </div>
     <div class='flex justify-end mt-3 items-center gap-3'>
      <a href='#' class="border-b-2 border-white">See more</a>
      <button class="p-3 border border-white rounded-xl">Set a reminder</button>
     </div>
    </div>
   </section>
   <div class="md:flex justify-end gap-2 m-4 hidden">
    <MdOutlineArrowBackIosNew class="p-4 border border-white rounded-full text-5xl"/>
    <MdOutlineArrowForwardIos class="p-4 border border-white rounded-full text-5xl"/> 
   </div>
  </main>
 )
}

export default Upcoming;
