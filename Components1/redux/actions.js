import {ADD_TO_CART} from '../../components/Constans'
import { REMOVE_FROM_CART ,UPDATE_CART} from '../../components/Constans'


export function addToCart(item){
    return{
        type:ADD_TO_CART,
        data:item
}
}

export function updateCart(items) {
    return {
      type: UPDATE_CART,
      data: items
    };
  }

export function removeFromCart(itemId){
    return{
        type:REMOVE_FROM_CART,
        data:itemId
}
}



