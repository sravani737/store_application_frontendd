import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ViewStockLevelsScreen = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchStockData();
    fetchCategories();
  }, []);

  const fetchStockData = async () => {
    try {
      let token = await AsyncStorage.getItem('userToken');
      const response = await axios.get('http://192.168.1.27:5000/api/products', {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      console.log('Fetched Products:', response.data);
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error('Error fetching stock levels:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://192.168.1.27:5000/api/categories');
      setCategories(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category_name === category);
      setFilteredProducts(filtered);
    }
  };

  const renderProduct = ({ item }) => {
    let stockStatus;

    if (item.stock === 0) {
      stockStatus = 'Out of Stock';
    } else if (item.stock <= 5) {
      stockStatus = 'Low Stock';
    } else {
      stockStatus = 'In Stock';
    }

    return (
      <View style={styles.productContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.productName}>{item.product_name}</Text>
          <Text style={styles.categoryText}>Category: {item.category_name}</Text>
          <Text style={styles.dateAdded}>{`Added on: ${new Date(item.created_at).toLocaleDateString()}`}</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.stockDetails}>
            <Text style={styles.stockText}>Stock: {item.stock} units</Text>
            <Text style={[
              styles.stockStatus,
              { color: stockStatus === 'Out of Stock' ? '#D9534F' : stockStatus === 'Low Stock' ? '#F0AD4E' : '#5CB85C' }
            ]}>
              {stockStatus}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => handleCategoryChange(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Category" value="All" />
          {categories.map((category) => (
            <Picker.Item key={category._id} label={category.category_name} value={category.category_name} />
          ))}
        </Picker>
      </View>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item._id}
        renderItem={renderProduct}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#4CAF50',
    marginBottom: 15,
    overflow: 'hidden',
    backgroundColor: '#FFF',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    padding: 20,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#4CAF50',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  leftContainer: {
    flex: 1,
    paddingRight: 15,
  },
  rightContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  stockDetails: {
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#DDD',
    padding: 10,
    alignItems: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  stockText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  stockStatus: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateAdded: {
    fontSize: 12,
    color: '#888',
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default ViewStockLevelsScreen;
