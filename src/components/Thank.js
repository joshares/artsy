import React from "react";
import thank from "../images/thank.png"


const Thank = () => {
 return(
  <main class=" mx-6 md:mx-12 text-2xl flex flex-col gap-2 items-center text-center justify-center">
   <div>
    <img src={thank} alt="img" />
   </div>
   <h1>Hi Customer, thank you for your purchase. </h1>
   <p class='text-[#616161]'>You are amazing. Cheers to being <span class="text-blue font-bold">ARTSY!</span></p>
  </main>
 )
}

export default Thank;