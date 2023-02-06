import React from 'react'
import Filter from '../components/Filter';
import Header from '../components/Header';

const Market = () => {
 return(
  <main>
    <div class="md:hidden mx-6">
       <Header head={"Marketplace"} subhead={"Editorials"}/>
       <p class=" text-[#BCB7B7] md:hidden mt-2">Showing 1-5  of 18 results</p>
    </div>
    <Filter/>
  </main>
 )
}

export default Market;
