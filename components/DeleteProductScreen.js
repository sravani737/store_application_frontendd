import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DeleteProductScreen = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the backend
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      let token = await AsyncStorage.getItem('userToken');
      const response = await axios.get('http://192.168.1.27:5000/api/products',{
        headers:{
          Authorization:`Bearer ${token}`}
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      let token = await AsyncStorage.getItem('userToken');
      const response = await axios.delete(`http://192.168.1.27:5000/api/products/${productId}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
      if (response.status === 200) {
        Alert.alert('Product deleted successfully');
        fetchProducts(); // Refresh the list
      } else {
        Alert.alert('Failed to delete product');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to delete the product');
    }
  };

  const renderProduct = ({ item }) => {
    let stockStatus;

    if (item.stock === 0) {
      stockStatus = 'Out of Stock';
    } else if (item.stock <= 5) {
      stockStatus = 'Few Left';
    } else {
      stockStatus = 'In Stock';
    }

    return (
      <View style={styles.productContainer}>
        <View style={styles.productTextContainer}>
          <Text style={styles.productName}>{item.product_name}</Text>
          <Text style={styles.productCreatedAt}>{`Created At: ${new Date(item.created_at).toLocaleDateString()}`}</Text>
          <Text style={[
            styles.stockStatus,
            item.stock === 0 ? styles.outOfStock : item.stock <= 5 ? styles.fewLeft : styles.inStock
          ]}>
            {stockStatus}
          </Text>
        </View>
        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item._id)}>
        <Icon name="trash" size={22} color="#2F4F4F" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={renderProduct}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#2F4F4F',
  },
  productTextContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productCreatedAt: {
    marginTop:3,
    fontSize: 14,
    color: '#2F4F4F', // Adjust color as needed
  },
  deleteButton: {
    backgroundColor: 'white', // bright red background
    paddingVertical: 5, // vertical padding
    paddingHorizontal: 20, // horizontal padding
    borderRadius: 30, // rounded corners
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white', // white text
  
    fontWeight: 'bold',
  },
  stockStatus: {
    fontSize: 15,
    marginTop: 5, // space between stock status and created_at text
    fontWeight: '500',
  },
  outOfStock: {
    color: '#FF4040', // Red for out of stock
  },
  fewLeft: {
    color: '#FFBF00', // Orange for few left
  },
  inStock: {
    color: '#008000', // Green for available
  },
});

export default DeleteProductScreen;
