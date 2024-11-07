// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
// import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect
// import axios from 'axios';

// const CartScreen = ({ navigation, userId }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [loading, setLoading] = useState(true); // To manage loading state
//   const [error, setError] = useState(null); // To manage error state

//   // Function to fetch cart items
//   const fetchCartItems = async () => {
//     if (!userId) {
//       console.log('User ID is not available');
//       return; // Exit if userId is not available
//     }

//     try {
//       console.log('Fetching cart for user ID:', userId);
//       setLoading(true); // Start loading
//       const response = await axios.get(`http://192.168.1.27:5000/api/cart/${userId}`);

//       if (response.data && response.data.items) {
//         setCartItems(response.data.items);
//         setTotalPrice(response.data.totalPrice);
//       } else {
//         console.warn('No items found in the response', response.data);
//       }
//     } catch (error) {
//       setError('Failed to fetch cart items'); // Set error message
//       console.error('Error fetching cart items:', error);
//     } finally {
//       setLoading(false); // End loading
//     }
//   };

//   // Use useFocusEffect to fetch cart items when screen is focused
//   useFocusEffect(
//     React.useCallback(() => {
//       fetchCartItems(); // Fetch cart items whenever the screen is focused
//     }, [userId])
//   );

//   const renderCartItem = ({ item }) => {
//     return (
//       <View style={styles.cartItem}>
//         <Image source={{ uri: item.image }} style={styles.image} />
//         <View style={styles.details}>
//           <Text>{item.name}</Text>
//           <Text>Price: ${item.price}</Text>
//           <Text>Quantity: {item.quantity}</Text>
//         </View>
//       </View>
//     );
//   };

//   if (loading) {
//     return <Text>Loading...</Text>; // Show loading text while fetching data
//   }

//   if (error) {
//     return <Text>{error}</Text>; // Display error message
//   }

//   return (
//     <View style={styles.container}>
//       {cartItems.length > 0 ? (
//         <FlatList
//           data={cartItems}
//           renderItem={renderCartItem}
//           keyExtractor={(item) => item._id} // Assuming each item has a unique _id
//         />
//       ) : (
//         <Text>Your cart is empty.</Text>
//       )}
//       <View style={styles.total}>
//         <Text>Total Price: ${totalPrice}</Text>
//       </View>
//     </View>
//   );
// }; previous


// import React, { useEffect, useState } from 'react';
// import { View, Button, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { useFocusEffect } from '@react-navigation/native'; 
// import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux'; 
// import { updateCart } from '../Components1/redux/actions'; 

// const CartScreen = ({ navigation, userId }) => {
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [loading, setLoading] = useState(true); 
//   const [error, setError] = useState(null); 
//   const dispatch = useDispatch(); 
//   const cartItems = useSelector((state) => state.reducer.items);

//   // Function to fetch cart items
//   const fetchCartItems = async () => {
//     if (!userId) {
//       console.log('User ID is not available', userId);
//       return; 
//     }

//     try {
//       setLoading(true);
//       const response = await axios.get(`http://192.168.1.27:5000/api/cart/${userId}`);
//       if (response.data && response.data.items) {
//         dispatch(updateCart(response.data.items)); 
//         setTotalPrice(response.data.totalPrice);
//       } else {
//         console.warn('No items found in the response', response.data);
//       }
//     } catch (error) {
//       setError('Failed to fetch cart items');
//     } finally {
//       setLoading(false); 
//     }
//   };

//   useFocusEffect(
//     React.useCallback(() => {
//       fetchCartItems();
//     }, [userId])
//   );

//   // Function to handle incrementing product quantity
//   const incrementQuantity = (itemId) => {
//     const updatedItems = cartItems.map((item) => 
//       item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     dispatch(updateCart(updatedItems));
//     recalculateTotalPrice(updatedItems);
//   };

//   // Function to handle decrementing product quantity
//   const decrementQuantity = (itemId) => {
//     const updatedItems = cartItems.map((item) => 
//       item._id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
//     );
//     dispatch(updateCart(updatedItems));
//     recalculateTotalPrice(updatedItems);
//   };

//   // Recalculate total price whenever the cart changes
//   const recalculateTotalPrice = (items) => {
//     const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     setTotalPrice(total);
//   };

//   const renderCartItem = ({ item }) => {
//     return (
//       <View style={styles.cartItem}>
//         <Image source={{ uri: item.image }} style={styles.image} />
//         <View style={styles.details}>
//           <Text>{item.name}</Text>
//           <Text>Price: ${item.price}</Text>
//           <View style={styles.quantityControl}>
//             <TouchableOpacity onPress={() => decrementQuantity(item._id)} style={styles.quantityButton}>
//               <Text style={styles.buttonText}>-</Text>
//             </TouchableOpacity>
//             <Text style={styles.quantityText}>{item.quantity}</Text>
//             <TouchableOpacity onPress={() => incrementQuantity(item._id)} style={styles.quantityButton}>
//               <Text style={styles.buttonText}>+</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   };

//   if (loading) {
//     return <Text>Loading...</Text>;
//   }

//   if (error) {
//     return <Text>{error}</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {cartItems.length > 0 ? (
//         <FlatList
//           data={cartItems}
//           renderItem={renderCartItem}
//           keyExtractor={(item) => item._id} 
//         />
//       ) : (
//         <Text>Your cart is empty.</Text>
//       )}
//       <View style={styles.total}>
//         <Text style={styles.totalText}>Total Price: ${totalPrice}</Text>
//       </View>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('PaymentScreen', { totalPrice, cartItems, userId })}
//       >
//         <Text style={styles.buttonText}>Place Order</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   cartItem: {
//     flexDirection: 'row',
//     marginBottom: 16,
//   },
//   image: {
//     width: 100,
//     height: 100,
//   },
//   details: {
//     flex: 1,
//     paddingLeft: 16,
//   },
//   quantityControl: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 8,
//   },
//   quantityButton: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 5,
//     marginHorizontal: 5,
//   },
//   quantityText: {
//     fontSize: 16,
//   },
//   total: {
//     alignItems: 'center',
//     backgroundColor: "black",
//     padding: 10,
//     marginBottom: 10,
//   },
//   totalText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   button: {
//     backgroundColor: 'green',
//     padding: 12,
//     alignItems: 'center',
//     borderRadius: 5,
//   },
// });

// export default CartScreen;





// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { useFocusEffect } from '@react-navigation/native'; 
// import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux'; 
// import { updateCart } from '../Components1/redux/actions'; 

// const CartScreen = ({ navigation, userId }) => {
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [loading, setLoading] = useState(true); 
//   const [error, setError] = useState(null); 
//   const dispatch = useDispatch(); 
//   const cartItems = useSelector((state) => state.reducer.items);

//   const fetchCartItems = async () => {
//     if (!userId) {
//       console.log('User ID is not available', userId);
//       return; 
//     }
//     try {
//       setLoading(true);
//       const response = await axios.get(`http://192.168.1.27:5000/api/cart/${userId}`);
//       if (response.data && response.data.items) {
//         console.log("from cart page frontend",response.data.items);
//         dispatch(updateCart(response.data.items)); 
//         console.log("dispatch details to the cart");
//         setTotalPrice(response.data.totalPrice);
//         console.log("dispatch details to the cart111");
//       } else {
//         console.warn('No items found in the response', response.data);
//       }
//     } catch (error) {
//       setError('Failed to fetch cart items');
//     } finally {
//       setLoading(false); 
//     }
//   };

//   useFocusEffect(
//     React.useCallback(() => {
//       fetchCartItems();
//     }, [userId])
//   );

//   const updateCartInBackend = async (itemId, newQuantity) => {
//     try {
//       await axios.put('http://192.168.1.27:5000/api/cart', {
//         userId,
//         productId: itemId,
//         quantity: newQuantity,
//       });
//       console.log('Cart updated successfully in backend');
//     } catch (error) {
//       console.error('Error updating cart in backend:', error.message);
//     }
//   };

//   const incrementQuantity = (itemId) => {
//     const updatedItems = cartItems.map((item) => 
//       item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     dispatch(updateCart(updatedItems));
//     recalculateTotalPrice(updatedItems);
//     updateCartInBackend(itemId, updatedItems.find(item => item._id === itemId).quantity);
//   };

//   const decrementQuantity = (itemId) => {
//     const updatedItems = cartItems.map((item) => 
//       item._id === itemId && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
//     );
//     dispatch(updateCart(updatedItems));
//     recalculateTotalPrice(updatedItems);
//     updateCartInBackend(itemId, updatedItems.find(item => item._id === itemId).quantity);
//   };

//   const recalculateTotalPrice = (items) => {
//     const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     setTotalPrice(total);
//   };

//   const renderCartItem = ({ item }) => {
//     return (
//       <View style={styles.cartItem}>
//         <Image source={{ uri: item.image }} style={styles.image} />
//         <View style={styles.details}>
//           <Text style={styles.itemName}>{item.productName}</Text>
//           <Text style={styles.priceText}>${item.price}</Text>
//           <View style={styles.quantityControl}>
//             <TouchableOpacity onPress={() => decrementQuantity(item._id)} style={styles.quantityButton}>
//               <Text style={styles.buttonText}>-</Text>
//             </TouchableOpacity>
//             <Text style={styles.quantityText}>{item.quantity}</Text>
//             <TouchableOpacity onPress={() => incrementQuantity(item._id)} style={styles.quantityButton}>
//               <Text style={styles.buttonText}>+</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   };

//   if (loading) {
//     return <Text>Loading...</Text>;
//   }

//   if (error) {
//     return <Text>{error}</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {cartItems.length > 0 ? (
//         <FlatList
//           data={cartItems}
//           renderItem={renderCartItem}
//           keyExtractor={(item) => item._id} 
//         />
//       ) : (
//         <Text>Your cart is empty.</Text>
//       )}
//       <View style={styles.total}>
//         <Text style={styles.totalText}>Total: ${totalPrice}</Text>
//       </View>
//       <TouchableOpacity
//         style={styles.placeOrderButton}
//         onPress={() => navigation.navigate('Payment', { userId,cartItems: cartItems, totalAmount: totalPrice})}
//       >
//         <Text style={styles.buttonText}>Proceed to Checkout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f8f8f8',
//   },
//   cartItem: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     padding: 16,
//     borderRadius: 10,
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     elevation: 4,
//   },
//   image: {
//     width: 80,
//     height: 80,
//     borderRadius: 10,
//     marginRight: 16,
//   },
//   details: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   itemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   priceText: {
//     fontSize: 16,
//     color: '#888',
//   },
//   quantityControl: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 8,
//   },
//   quantityButton: {
//     borderWidth: 1,
//     borderColor: 'grey',
//     padding: 8,
//     borderRadius: 5,
//     marginHorizontal: 8,
//   },
//   quantityText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   total: {
//     marginTop: 16,
//     padding: 16,
//     backgroundColor: '#000',
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   totalText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   placeOrderButton: {
//     backgroundColor: '#28a745',
//     padding: 16,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'black',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default CartScreen;


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart } from '../Components1/redux/actions';

const CartScreen = ({ navigation, userId }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducer.items);

  const fetchCartItems = async () => {
    if (!userId) {
      console.log('User ID is not available', userId);
      return;
    }
    try {
      setLoading(true);
      const response = await axios.get(`http://192.168.1.27:5000/api/cart/${userId}`);
      if (response.data && response.data.items) {
        console.log("from cart page frontend", response.data.items);
        dispatch(updateCart(response.data.items));
        setTotalPrice(response.data.totalPrice);
      } else {
        console.warn('No items found in the response', response.data);
      }
    } catch (error) {
      setError('Failed to fetch cart items');
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchCartItems();
    }, [userId])
  );
  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      setTotalPrice(total);
    };
  
    calculateTotalPrice();
  }, [cartItems]);
  
  const updateCartInBackend = async (itemId, newQuantity) => {
    try {
      await axios.put('http://192.168.1.27:5000/api/cart', {
        userId,
        productId: itemId,
        quantity: newQuantity,
      });
      console.log('Cart updated successfully in backend');
    } catch (error) {
      console.error('Error updating cart in backend:', error.message);
    }
  };


  const incrementQuantity = (itemId) => {
    const updatedItems = cartItems.map((item) =>
      item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    dispatch(updateCart(updatedItems));
    recalculateTotalPrice(updatedItems);
    updateCartInBackend(itemId, updatedItems.find(item => item._id === itemId).quantity);
  };

  const decrementQuantity = (itemId) => {
    const updatedItems = cartItems.map((item) =>
      item._id === itemId && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    );
    dispatch(updateCart(updatedItems));
    recalculateTotalPrice(updatedItems);
    updateCartInBackend(itemId, updatedItems.find(item => item._id === itemId).quantity);
  };

  const removeItem = async (itemId) => {
    const updatedItems = cartItems.filter(item => item._id !== itemId);
    dispatch(updateCart(updatedItems));
    // recalculateTotalPrice(updatedItems);
    console.log("itemid:" + itemId);
    console.log("userId:" + userId)
    try {
      await axios.delete(`http://192.168.1.27:5000/api/cart/${userId}/${itemId}`)
      console.log('Item removed successfully from backend');
      // await fetchCartItems();
    } catch (error) {
      console.error('Error removing item from backend:', error.message);
    }
  };

  const recalculateTotalPrice = (items) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const renderCartItem = ({ item }) => {
    return (
      <View style={styles.cartItem}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.details}>
          <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
            <Text style={styles.itemName}>{item.productName}</Text>
            <Text style={styles.priceText}>${item.price}</Text>
          </View>

          {item.quantity > 0 ? (
            <View style={styles.quantityControl}>
              <TouchableOpacity onPress={() => decrementQuantity(item._id)} style={styles.quantityButton}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => incrementQuantity(item._id)} style={styles.quantityButton}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity onPress={() => removeItem(item._id)} style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remove from Cart</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={(item) => item._id}
        />
      ) : (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      )}
      <View style={styles.total}>
        <Text style={styles.totalText}>Total: ${totalPrice}</Text>
      </View>
      
      {cartItems.length > 0 ? (
        <TouchableOpacity
          style={styles.placeOrderButton}
          onPress={() => navigation.navigate('Payment', { userId, cartItems, totalAmount: totalPrice })}
        >
          <Text style={styles.buttonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={[styles.placeOrderButton, styles.disabledButton]}>
          <Text style={styles.buttonText}>Your cart is empty</Text>
        </TouchableOpacity>
      )}
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',

  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    // backgroundColor:'orange',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 16,
  },
  details: {
    flex: 1,
    justifyContent: "space-around",
    // backgroundColor:'green',
    flexDirection: 'row'
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  priceText: {
    fontSize: 16,
    color: '#888',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 0,
    // backgroundColor:'red'
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 8,
    borderRadius: 5,
    marginHorizontal: 8,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  total: {
    marginTop: 16,
    padding: 14,
    backgroundColor: '#000',
    borderRadius: 10,
    alignItems: 'center',
  },
  totalText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  placeOrderButton: {
    backgroundColor: '#28a745',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  removeButton: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: '#dc3545',
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  Empty:{
    fontSize:16,
    fontWeight:'bold'
  }

});

export default CartScreen;
