import React from 'react'
import {GoSettings} from 'react-icons/go'
import {MdKeyboardArrowDown , MdKeyboardArrowUp} from 'react-icons/md'
import { useProductContext } from '../context/context'
import Product from './Product'
import Footer from './Footer'

const Filter = () => {
 const {filtered_product:product} = useProductContext()

//  const handleClick = () {

//  }

 return(
  <main class="md:mx-10 mx-6">
   <section class="flex gap-10 p-2  ">
    <input type="text" placeholder='Search' class="bg-[#F4F2F2] outline-none p-3 rounded-sm hidden md:flex w-1/6 " />
    <div class="flex justify-between items-center text-xl md:text-2xl w-full md:w-4/5 shadow-lg p-2 rounded-sm">
     <p class="hidden md:block">See 1-6 of 15 results</p>
     <select class="p-2 md:hidden outline-none">
      <option>filter</option>
      <option>category</option>
      <option>price</option>
      <option>artist</option>
     </select>
     <select class=" outline-none md:outline-none  p-2 ">
      <option>sort by</option>
      <option>category</option>
      <option>price</option>
      <option>artist</option>
     </select>
    </div>
   </section>
   <section class="my-5 flex gap-12">
     <section class="w-1/6  hidden md:block">
      <div class="flex gap-3 items-center text-3xl pb-2  border-b-4 border-[#AFB091]">
       <GoSettings/>
       <p>Filter</p>
      </div>
      <div >
       <div class="flex justify-between items-center mt-8">
        <h2 class= "text-xl mb-5">By category</h2>
        <MdKeyboardArrowUp class="mb-2"/>
       </div>
       <div class="flex flex-col">
        <div class="gap-2 flex ">
         <input type="checkbox" name="editorial" class="" />
        <label for="editorial">Editorials</label>
        </div>
        <div class="gap-2 flex">
         <input type="checkbox" name="fashion" />
        <label for="fashion">Fashion</label>
        </div>
        <div class="gap-2 flex">
         <input type="checkbox" name="optics" />
        <label for="optics">Optics</label>
        </div>
        <div class="gap-2 flex">
         <input type="checkbox" name="art" />
        <label for="art">Art & Musuem</label>
        </div>
        <div class="gap-2 flex">
         <input type="checkbox" name="nature" />
        <label for="nature">nature</label>
        </div>
       </div>
      </div>
      <div>
       <div class="flex justify-between items-center mt-8">
        <h2 class= "text-xl mb-5">By price</h2>
        <MdKeyboardArrowUp class="mb-2"/>
       </div>
       <p class="my-4">$10-$100</p>
       <input type="range" />
      </div>
      <div>
       <div class="flex justify-between items-center mt-8">
        <h2 class= "text-xl mb-5">By artist</h2>
        <MdKeyboardArrowUp class="mb-2"/>
       </div>
       <div class="flex flex-col gap-2">
        <p class="border-b border-primary w-max">All</p>
        <p>below $20</p>
        <p>$20-$50</p>
        <p>above $50</p>
       </div>
      </div>
     </section>
     <section class="px-2 md: grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:w-4/5">
      {product.map((item,index) =>{
       return (
        <Product {...item} index={index}/>
       )
      })}
     </section>
   </section>
   <div class=" mt-12 flex justify-center items-center">
    <button class=" rounded-lg border border-primary p-4">See more</button>
   </div>
   <Footer/>
  </main>
 )
}

export default Filter;
