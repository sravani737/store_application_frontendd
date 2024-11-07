// import { ADD_TO_CART ,REMOVE_FROM_CART} from '../../components/Constans'

// const initialState = {
//     items: []
// }

// export const reducer = (state=initialState,action)=>{
//     switch(action.type){
//         case ADD_TO_CART:
//             return[
//                 ...state,
//                 action.data
//             ]
//         case REMOVE_FROM_CART:
//                let result = state.filter(item=>{
//                 return item._id != action.data
//                }) 
//                 return[
//                     ...result
//                 ]
//         default:
//             return state

//     }
// }  previous
   
import { ADD_TO_CART, REMOVE_FROM_CART ,UPDATE_CART} from '../../components/Constans';

const initialState = {
    items: [] // Initial state with items as an array
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.data] // Add the item to the items array
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.data) // Remove item by _id
            };

        case UPDATE_CART: // Handling the new action to update the entire cart from backend
            return {
              ...state,
              items: action.data
            };

        default:
            return state; // Return the current state by default
    }
};



//22
// import { ADD_TO_CART, REMOVE_FROM_CART,SET_CART_ITEMS } from '../../components/Constans';

// const initialState = {
//     cartCount:0,
//     //items: [] // This will store all the items in the cart
// };

// export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SET_CART_ITEMS:
//             return {
//                 ...state,
//                 items: action.payload // Set fetched cart items
//             };
//             case 'ADD_TO_CART':
//                 const updatedItems = [...state.items, action.payload];
//                 const updatedCount = updatedItems.reduce((total, item) => total + item.quantity, 0);
//                 return {
//                     ...state,
//                     items: updatedItems,
//                     cartCount: updatedCount, // Update cartCount
//                 };

//         case REMOVE_FROM_CART: {
//             const itemInCart = state.items.find(item => item.productId === action.data.productId);

//             if (itemInCart && itemInCart.quantity > 1) {
//                 // If quantity is greater than 1, decrease the quantity
//                 return {
//                     ...state,
//                     items: state.items.map(item =>
//                         item.productId === action.data.productId
//                             ? { ...item, quantity: item.quantity - 1 }
//                             : item
//                     )
//                 };
//             } else {
//                 // If quantity is 1 or less, remove the item from the cart
//                 const updatedItems = state.items.filter(item => item.productId !== action.data.productId);
//                 return {
//                     ...state,
//                     items: updatedItems
//                 };
//             }
//         }

//         default:
//             return state;
//     }
// };

// export const userReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'SET_USER_ID':
//         return { ...state, userId: action.payload };
//       // other actions
//       default:
//         return state;
//     }
//   };
  




// cartReducer.js

// const initialState = {
//     items: [], // Initialize items as an empty array
//     totalPrice: 0,
//   };
  
//   const reducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_TO_CART':
//         const existingItemIndex = state.items.findIndex(
//           (item) => item.productId === action.payload.productId
//         );
  
//         if (existingItemIndex >= 0) {
//           // If item exists, update the quantity
//           const updatedItems = [...state.items];
//           updatedItems[existingItemIndex].quantity += action.payload.quantity;
//           return {
//             ...state,
//             items: updatedItems,
//             totalPrice: state.totalPrice + action.payload.price * action.payload.quantity,
//           };
//         } else {
//           // If item doesn't exist, add it to the cart
//           return {
//             ...state,
//             items: [...state.items, { productId: action.payload.productId, quantity: action.payload.quantity }],
//             totalPrice: state.totalPrice + action.payload.price * action.payload.quantity,
//           };
//         }
  
//       case 'REMOVE_FROM_CART':
//         // Handle removing item from cart
//         const newItems = state.items.filter(item => item.productId !== action.payload.productId);
//         return {
//           ...state,
//           items: newItems,
//           totalPrice: state.totalPrice - (action.payload.price * action.payload.quantity), // Update total price accordingly
//         };
  
//       case 'CLEAR_CART':
//         return initialState; // Reset cart state
  
//       default:
//         return state; // Return current state if no actions match
//     }
//   };
  
//   export default reducer;
  







// import { ADD_TO_CART, REMOVE_FROM_CART } from '../../components/Constans';

// const initialState = {
//     cartItems: [],
// };

// export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_TO_CART:
//             return {
//                 ...state,
//                 cartItems: [...state.cartItems, action.data],
//             };
//         case REMOVE_FROM_CART:
//             return {
//                 ...state,
//                 cartItems: state.cartItems.filter(item => item._id !== action.data),
//             };
//         default:
//             return state;
//     }
// };
