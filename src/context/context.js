import React from "react";
import {  useContext, useState, useReducer, useEffect } from "react";
import  reducer from "../reducer";
import { data } from "../productData";
import {
 GET_PRODUCT_BEGIN,
 GET_PRODUCT_SUCESS,
 GET_FILTER_BEGIN,
 GET_FILTER_SUCESS,
} from '../action'

const initialState = {
 product: [],
 filtered_product:[],
}

const ProductContext = React.createContext()
export const ProductProvider = ({ children }) => {
 const [state, dispatch] = useReducer(reducer, initialState)
 const [number, setNumber] = useState(1)
 const[cart, setCart] = useState([])
 const[totals,setTotals] = useState(null)
 const [item,setItem] = useState(null)

 let total = 0;
 let items = 0;
 
 const TotalCarts = ()=> {
for(let i =0; i < cart.length; i++){
    total = Math.trunc(total + cart[i].total)
}
  return  setTotals(total)
 }
 const ItemsCart = ()=> {
  for(let i =0; i < cart.length; i++){
    items = items + cart[i].number
}
  return setItem(items)
 }

 const RemoveItem = (name) => {
   const newCart = cart.filter((c)=> c.name !== name)
   setCart(newCart)
 }


 useEffect(()=> {
   TotalCarts()
   ItemsCart()
   console.log(item,totals)
 },[cart])

 const fetchProduct = () => {
  dispatch({type:GET_PRODUCT_SUCESS, payload:data})
 }

 useEffect(()=>{
  fetchProduct()
 },[])

  return (
    <ProductContext.Provider value={{
      ...state,
      cart,
      setCart,
      number,
      totals,
      setTotals,
      setNumber,
      item,
      TotalCarts,
      RemoveItem,
    }}>{children}</ProductContext.Provider>
  )
}
// make sure use
export const useProductContext = () => {
  return useContext(ProductContext)
}
