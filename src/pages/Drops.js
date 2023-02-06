import React from 'react'
import Header from "../components/Header"
import dropsOne from "../images/drops1.png"
import dropsTwo from "../images/drops2.png"
import dropsThree from "../images/drops3.png"
import Footer from "../components/Footer"

const Drops = () => {
 return(
  <main class="mx-6 md:mx-12">
   <div class=" hidden md:block text-xl">
    <Header  head={"Auction/Livebids/"} subhead={"drops"}/>
    </div>
   <section class="text-center flex flex-col gap-4">
    <h1 class="text-5xl font-base md:semi-bold">Upcoming</h1>
    <p class="text-[#616161] text-2xl md:text-3xl">Turn on notifications so that no drops will miss you.</p>
    <div class="flex items-center justify-center">
     <button class="text-3xl border border-primary w-max rounded-lg p-4 px-10">Notify me</button>
    </div>
   </section>
   <section class="my-10 flex flex-col gap-6">
    <div class="flex flex-col md:flex-row text-base gap-8">
     <div class="w-5/10 h-full">
      <img src={dropsOne} class="w-full h-full" alt="img"/>
     </div>
     <div class="flex flex-col gap-4  md:gap-5  md:w-3/6">
      <button class="bg-cyan hidden md:block px-6 p-1 rounded-lg md:text-2xl text-white w-max ">Upcoming</button>
      <p class="md:text-2xl">November 21 at 11 am WAT</p>
      <p class="text-2xl font-base md:text-4xl">Eyo : Eko For Show</p>
      <p class="text-[#616161] md:text-xl">Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.</p>
      <p class="text-xl font-base text-cyan md:text-3xl"><span class="text-primary">Creator: </span> Aliya Minat</p>
      <a href='#' class="text-cyan underline md:text-2xl">Join now</a>
     </div>
    </div>
    <div class="flex flex-col md:flex-row text-base gap-8">
     <div class="w-5/10 h-full">
      <img src={dropsTwo} class="w-full h-full" alt="img"/>
     </div>
     <div class="flex flex-col gap-4  md:gap-5  md:w-3/6">
      <button class="bg-cyan hidden md:block px-6 p-1 rounded-lg md:text-2xl text-white w-max ">Upcoming</button>
      <p class="md:text-2xl">November 21 at 11 am WAT</p>
      <p class="text-2xl font-base md:text-4xl">Eyo : Eko For Show</p>
      <p class="text-[#616161] md:text-xl">Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.</p>
      <p class="text-xl font-base text-cyan md:text-3xl"><span class="text-primary">Creator: </span> Aliya Minat</p>
      <a href='#' class="text-cyan underline md:text-2xl">Join now</a>
     </div>
    </div>
    <div class="flex flex-col md:flex-row text-base gap-8">
     <div class="w-5/10 h-full">
      <img src={dropsThree} class="w-full h-full" alt="img"/>
     </div>
     <div class="flex flex-col gap-4  md:gap-5  md:w-3/6">
      <button class="bg-cyan hidden md:block px-6 p-1 rounded-lg md:text-2xl text-white w-max ">Upcoming</button>
      <p class="md:text-2xl">November 21 at 11 am WAT</p>
      <p class="text-2xl font-base md:text-4xl">Eyo : Eko For Show</p>
      <p class="text-[#616161] md:text-xl">Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.</p>
      <p class="text-xl font-base text-cyan md:text-3xl"><span class="text-primary">Creator: </span> Aliya Minat</p>
      <a href='#' class="text-cyan underline md:text-2xl">Join now</a>
     </div>
    </div>
    <div class="flex flex-col md:flex-row text-base gap-8">
     <div class="w-5/10 h-full">
      <img src={dropsTwo} class="w-full h-full" alt="img"/>
     </div>
     <div class="flex flex-col gap-4  md:gap-5  md:w-3/6">
      <button class="bg-cyan hidden md:block px-6 p-1 rounded-lg md:text-2xl text-white w-max ">Upcoming</button>
      <p class="md:text-2xl">November 21 at 11 am WAT</p>
      <p class="text-2xl font-base md:text-4xl">Eyo : Eko For Show</p>
      <p class="text-[#616161] md:text-xl">Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.</p>
      <p class="text-xl font-base text-cyan md:text-3xl"><span class="text-primary">Creator: </span> Aliya Minat</p>
      <a href='#' class="text-cyan underline md:text-2xl">Join now</a>
     </div>
    </div>
   </section>
   <Footer/>
  </main>
 )
}

export default Drops;
