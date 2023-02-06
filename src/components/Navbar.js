import React from 'react'
import {AiOutlineMenu, AiOutlineShoppingCart ,AiOutlineBell, AiOutlineClose} from 'react-icons/ai'
import { useState, useEffect } from 'react'
import {FiSearch} from 'react-icons/fi'
import {NavLink, Link} from 'react-router-dom'
import { useProductContext } from '../context/context'

const Navbar = () => {
 const [openBar, setOpenBar] = useState(false)
 const {cart} = useProductContext()
 const [count, setCount] = useState(null)

useEffect(()=> {
  console.log(count)
  // setCount(null)
  setCount(cart.length) 
},[cart])
 return(
  <main class='p-6 md:px-12 relative z-10'>
   <nav class='flex justify-between items-center'>
    <AiOutlineMenu onClick={() => setOpenBar(true)} class='md:hidden'/>
     <h3 class=' text-primary text-2xl font-bold' >ARTSY.</h3>
    <div class=' hidden   md:flex md:gap-10 '>
     <NavLink to='/artsy'>Home</NavLink>
     <NavLink to='/market'>Marketplace</NavLink>
     <NavLink to='/auction'>Auction</NavLink>
     <NavLink to='/drops'>Drops</NavLink>
    </div>
    <div class='flex gap-4'>
     <FiSearch/>
     <div class="relative ">
      <Link to="/cart">
            <AiOutlineShoppingCart/>
      </Link>
      {(count > 0) ? (<p class="absolute -top-3 right-0 text-xs text-[#E31616]">{count}</p>) : null}
    </div>
     <AiOutlineBell class='hidden md:block'/>
    </div>
   </nav>
   <div class="pr-20">
    {
    openBar ? (
     <div class="flex flex-col gap-8 absolute z-10 left-0 w-full px-8 h-screen top-0 pt-5 bg-white">
     <div class="flex w-full justify-between items-center">
      <p class="text-2xl font-bold">ARTSY.</p>
      <AiOutlineClose class="text-2xl"  onClick={() => setOpenBar(false)} />
     </div>
     <NavLink class="text-2xl font-base" onClick={() => setOpenBar(false)} to='/artsy'>Home</NavLink>
     <NavLink class="text-2xl font-base" onClick={() => setOpenBar(false)} to='/market'>Marketplace</NavLink>
     <NavLink class="text-2xl font-base" onClick={() => setOpenBar(false)} to='/auction'>Auctions</NavLink>
     <NavLink class="text-2xl font-base" onClick={() => setOpenBar(false)} to='/drops'>Drops</NavLink>
   </div>
    ): null
   }
   </div>
  </main>
 )
}

export default Navbar;
