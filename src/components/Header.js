import React from 'react'

const Header = ({head, subhead}) => {
 return(
  <main>
   <section class="">
    <div>
     <p class="text-[#BCB7B7]"><span>Home/</span><span>{head}</span><span class="text-primary font-semibold">{subhead}</span></p>
    </div>
    
   </section>
  </main>
 )
}

export default Header;
