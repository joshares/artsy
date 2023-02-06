import {
 GET_PRODUCT_BEGIN,
 GET_PRODUCT_SUCESS,
 GET_FILTER_BEGIN,
 GET_FILTER_SUCESS,
} from './action'


const Product_reducer = (state, action) => {
   if(action.type === GET_PRODUCT_SUCESS){
      return{
       ...state,
       product:action.payload,
       filtered_product:action.payload,
      }
   }
}

export default Product_reducer