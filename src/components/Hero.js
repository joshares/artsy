import React from 'react'
import heroOne from '../images/hero1.png'
import heroTwo from '../images/hero2.png'
import heroThree from '../images/hero3.png'
import heroFour from '../images/hero4.png'
import heroFive from '../images/hero5.png'
import heroPhone from '../images/hero-phone.png'

const Hero = () => {
 return(
  <main>
   <div class="p-6 pt-0 w-full text-center  flex flex-col items-center justify-center  text-primary">
    <h1 class="md:text-7xl text-3xl font-medium md:w-3/4">Photography is poetry & beautiful untold stories
   </h1>
   <p  class='mt-2 md:mt-8 md:text-2xl md:w-4/6 font-medium'>
    Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.
   </p>
   </div>
    <div class="flex md:hidden items-center justify-center">
      <img src={heroPhone} alt='img' class=''/>
    </div>
   <div class="md:flex md:justify-center md:items-center md:gap-2 hidden ">
      <section class='auto-slider overflow-x-hidden h-50 relative flex w-1/5'>
       <img src={heroOne} alt='img' class=' w-full h-full '/>
       <img src={heroTwo} alt='img' class='w-full h-full '/>
       <img src={heroThree} alt='img' class='w-full h-full '/>
       <img src={heroFour} alt='img' class='w-full h-full '/>
       <img src={heroFive} alt='img' class='w-full h-full '/>
      </section>
      <section class='auto-slider overflow-x-hidden h-50 flex w-1/5'>
       <img src={heroOne} alt='img' class='w-full h-full'/>
       <img src={heroTwo} alt='img' class='w-full h-full'/>
       <img src={heroThree} alt='img' class='w-full h-full'/>
       <img src={heroFour} alt='img' class='w-full h-full'/>
       <img src={heroFive} alt='img' class='w-full h-full'/>
      </section>
      <section class='auto-slider overflow-x-hidden h-50 flex w-1/5'>
       <img src={heroOne} alt='img' class='w-full h-full'/>
       <img src={heroTwo} alt='img' class='w-full h-full'/>
       <img src={heroThree} alt='img' class='w-full h-full'/>
       <img src={heroFour} alt='img' class='w-full h-full'/>
       <img src={heroFive} alt='img' class='w-full h-full'/>
      </section>
      <section class='auto-slider overflow-x-hidden h-50 flex w-1/5'>
       <img src={heroOne} alt='img' class='w-full h-full'/>
       <img src={heroTwo} alt='img' class='w-full h-full'/>
       <img src={heroThree} alt='img' class='w-full h-full'/>
       <img src={heroFour} alt='img' class='w-full h-full'/>
       <img src={heroFive} alt='img' class='w-full h-full'/>
      </section>
      <section class='auto-slider overflow-x-hidden h-50 flex w-1/5'>
       <img src={heroOne} alt='img' class='w-full h-full'/>
       <img src={heroTwo} alt='img' class='w-full h-full'/>
       <img src={heroThree} alt='img' class='w-full h-full'/>
       <img src={heroFour} alt='img' class='w-full h-full'/>
       <img src={heroFive} alt='img' class='w-full h-full'/>
      </section>
   </div>
  </main>
 )
}

export default Hero;
