import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart } from '../Components1/redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      let token = await AsyncStorage.getItem('userToken');
      await axios.put('http://192.168.1.27:5000/api/cart', {
        userId,
        productId: itemId,
        quantity: newQuantity,
        
      },{
      headers:{
        Authorization:`Bearer ${token}`
      }});
      console.log('Cart updated successfully in backend');
    } catch (error) {
      Alert.alert('error','something went wrong')
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
      let token  = await AsyncStorage.getItem('userToken');
      await axios.delete(`http://192.168.1.27:5000/api/cart/${userId}/${itemId}`,{
        headers:{
             Authorization:`Bearer ${token}`
        }
      })
      console.log('Item removed successfully from backend');
      Alert.alert('success','item removed from cart');
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
    width: 35, // Set fixed width
    height: 35, // Set fixed height
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  total: {
    marginTop: 16,
    padding: 14,
    backgroundColor: '#2F4F4F',
    borderRadius: 10,
    alignItems: 'center',
  },
  totalText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  placeOrderButton: {
    backgroundColor: '#2F4F4F',
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
