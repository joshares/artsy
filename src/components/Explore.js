import React from "react";
import { HiArrowRight } from 'react-icons/hi'
import creatorOne from '../images/creator1.png'
import creatortwo from '../images/creator2.png'
import creatorthree from '../images/creator3.png'


const Explore = () => {
 return (
  <main >
   <section class="my-12">
    <div class="flex items-center justify-between p-10 border-y border-primary">
     <h1 class="md:text-4xl text-2xl   font-medium">Explore marketplace</h1>
     <HiArrowRight class="text-4xl md:border-none p-2 border border-primary rounded-full md:text-6xl hover:border-cyan hover:text-cyan " />
    </div>
    <div class="flex items-center justify-between p-10 border-b border-primary">
     <h1 class="md:text-4xl text-2xl   font-medium">See auctions </h1>
     <HiArrowRight class="text-4xl md:border-none p-2 border border-primary rounded-full md:text-6xl hover:border-cyan hover:text-cyan " />
    </div>
   </section>
   <section class="md:pb-60 md:p-20 relative bg-flair p-2  pb-20 mb:pb-50 mb-5 h-full">
     <div class="flex justify-between ">
      <h2 class="font-semibold md:bold text-2xl w-1/2 md:text-5xl md:w-2/5">TOP CREATORS OF THE WEEK</h2>
      <div>
       <div></div>
       <ul class="md:flex-col flex gap-2 text-xs md:text-3xl">
        <li>Editorials</li>
        <li>Fashions</li>
        <li>Lifestyle</li>
        <li>BluePrint</li>
       </ul>
      </div>
     </div>
     <p class="font-extralight my-5 text-center md:text-3xl md:text-left md:my-25">“Everything always looked better in black and white. Everything always  as if it were the first time; there’s always more people in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden
     </p>
     <div class="flex absolute flex-col gap-9 items-end md:items-start right-3  bottom-2 md:absolute md:bottom-20 md:right-20">
      <h1 class="font-bold text-5xl md:12xl">circa</h1>
      <h1 class="font-bold text-6xl md:text-9xl line-through">1985</h1>
     </div>
     <div class="absolute auto-change-1 md:w-max w-80 top-10 right-8 md:h-max h-full md:top-20">
      <img src={creatorOne} alt="img" class="w-full h-full "/>
     </div>
     <div class="absolute auto-change-2 md:w-max w-80 top-10 right-8 md:h-max h-full md:top-20">
      <img src={creatortwo} alt="img" class="w-full h-full "/>
     </div>
     <div class=" absolute auto-change-3 md:w-max w-60 top-10 right-12 md:h-90 md:right-60 h-full md:top-20">
      <img src={creatorthree} alt="img" class="w-full h-full opacity-100"/>
     </div>
   </section>
  </main>
 )
}
export default Explore;