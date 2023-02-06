import React from 'react'
import featuredOne from '../images/featured1.png'
import featuredTwo from '../images/featured2.png'
import featuredThree from '../images/featured3.png'
import majorOne from '../images/majors1.png'
import majorTwo from '../images/majors2.png'
import majorThree from '../images/majors3.png'
import majorFour from '../images/majors4.png'
import majorFive from '../images/majors5.png'
import {BsArrowRight} from 'react-icons/bs'

const Featured = () => {
 return(
  <main class="p-6 md:px-12">
   <h3 class="text-4xl font-medium mb-4">Featured</h3>
   <div class='md:flex md:gap-4 md:border-t border-primary md:pt-8'>
    <div class="w-full group relative">
     <img src={featuredOne} alt='img' class="w-full group-hover:brightness-50   " />
     <div class="flex flex-col text-white items-end absolute gap-10 top-12 right-10 opacity-0 group-hover:opacity-80">
      <h2 class="text-3xl font-base  md:hidden">The Boolean Egyptian</h2>
       <BsArrowRight class="border md:hidden  border-white p-2 text-4xl  rounded-full"/>
     </div>
    </div>
    <div class='w-11/12 flex flex-col  justify-between gap-4 text-left'>
     <h2 class="text-3xl font-medium hidden md:block">The Boolean Egyptian</h2>
     <p class="md:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur</p>
     <div class="flex items-center justify-between  w-6/7 md:w-full border-b border-primary md:border-none pb-5 ">
      <div class="flex w-1/5 relative mb-12">
       <img src={majorOne} alt="img " class='absolute left-2' />
       <img src={majorTwo} alt="img " class="absolute left-4" />
       <img src={majorThree} alt="img" class="absolute left-6" />
       <img src={majorFour} alt="img" class="absolute left-8" />
       <img src={majorFive} alt="img" class="absolute left-10" />
      </div>
     <p class="text-2xl">64 major creators</p>
     <BsArrowRight class="border hidden md:block border-primary p-2 text-4xl  rounded-full"/>
     </div>
    </div>
   </div>
   <div class='md:flex md:flex-row-reverse md:gap-4 md:border-t border-primary pt-8 md:mt-8'>
    <div class="w-full group relative">
     <img src={featuredTwo} alt='img' class="w-full group-hover:brightness-50   " />
     <div class="flex flex-col text-white items-end absolute gap-10 top-12 right-10 opacity-0 group-hover:opacity-100 ">
      <h2 class="text-3xl font-base  md:hidden">The Boolean Egyptian</h2>
       <BsArrowRight class="border md:hidden  border-white p-2 text-4xl  rounded-full"/>
     </div>
    </div>
    <div class='w-11/12 flex flex-col  justify-between gap-4 text-left'>
     <h2 class="text-3xl font-medium hidden md:block">The Boolean Egyptian</h2>
     <p class="md:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur</p>
     <div class="flex items-center justify-between  w-6/7 md:w-full border-b border-primary md:border-none pb-5 ">
      <div class="flex w-1/5 relative mb-12">
       <img src={majorOne} alt="img " class='absolute left-2' />
       <img src={majorTwo} alt="img " class="absolute left-4" />
       <img src={majorThree} alt="img" class="absolute left-6" />
       <img src={majorFour} alt="img" class="absolute left-8" />
       <img src={majorFive} alt="img" class="absolute left-10" />
      </div>
     <p class="text-2xl">64 major creators</p>
     <BsArrowRight class="border hidden md:block border-primary p-2 text-4xl  rounded-full"/>
     </div>
    </div>
   </div>
   <div class='md:flex md:gap-4 md:border-t border-primary md:pt-8 mt-8'>
    <div class="w-full group relative">
     <img src={featuredThree} alt='img' class="w-full group-hover:brightness-50 md:hover:brightness-100 " />
     <div class="flex flex-col text-white items-end absolute gap-10 top-12 right-10 opacity-0 group-hover:opacity-100">
      <h2 class="text-3xl font-base  md:hidden">The Boolean Egyptian</h2>
       <BsArrowRight class="border md:hidden  border-white p-2 text-4xl  rounded-full"/>
     </div>
    </div>
    <div class='w-11/12 flex flex-col  justify-between gap-4 text-left'>
     <h2 class="text-3xl font-medium hidden md:block">The Boolean Egyptian</h2>
     <p class="md:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur</p>
     <div class="flex items-center justify-between  w-6/7 md:w-full border-b border-primary md:border-none pb-5 ">
      <div class="flex w-1/5 relative mb-12">
       <img src={majorOne} alt="img " class='absolute left-2' />
       <img src={majorTwo} alt="img " class="absolute left-4" />
       <img src={majorThree} alt="img" class="absolute left-6" />
       <img src={majorFour} alt="img" class="absolute left-8" />
       <img src={majorFive} alt="img" class="absolute left-10" />
      </div>
     <p class="text-2xl">64 major creators</p>
     <BsArrowRight class="border hidden md:block border-primary p-2 text-4xl  rounded-full"/>
     </div>
    </div>
   </div>
  </main>
 )
}

export default Featured;
