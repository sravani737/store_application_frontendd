// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   cartItems: [],
//   totalAmount: 0,
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addItemToCart: (state, action) => {
//       const product = action.payload;
//       const existingItem = state.cartItems.find(item => item._id === product._id);

//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.cartItems.push({ ...product, quantity: 1 });
//       }

//       state.totalAmount += product.price;
//     },
//     removeItemFromCart: (state, action) => {
//       const productId = action.payload;
//       const existingItem = state.cartItems.find(item => item._id === productId);

//       if (existingItem) {
//         state.totalAmount -= existingItem.price;
//         state.cartItems = state.cartItems.filter(item => item._id !== productId);
//       }
//     },
//     updateQuantity: (state, action) => {
//       const { productId, quantity } = action.payload;
//       const item = state.cartItems.find(item => item._id === productId);

//       if (item) {
//         state.totalAmount -= item.price * item.quantity;
//         item.quantity = quantity;
//         state.totalAmount += item.price * quantity;
//       }
//     },
//     clearCart: (state) => {
//       state.cartItems = [];
//       state.totalAmount = 0;
//     },
//   },
// });

// export const { addItemToCart, removeItemFromCart, updateQuantity, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;
