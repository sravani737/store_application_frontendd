import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Modal, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome'; // For the + icon

const ViewStockLevelsScreen = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newStock, setNewStock] = useState('');

  useEffect(() => {
    fetchStockData();
    fetchCategories();
  }, []);

  const fetchStockData = async () => {
    try {
      let token = await AsyncStorage.getItem('userToken');
      const response = await axios.get('http://192.168.1.27:5000/api/products', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
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

  const handleAddStock = async () => {
    if (selectedProduct && newStock) {
      try {
        let token = await AsyncStorage.getItem('userToken');
        const response = await axios.put(
          `http://192.168.1.27:5000/api/products/${selectedProduct._id}/add-stock`,
          { additionalStock: parseInt(newStock) },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
  
        // Update the product list locally to reflect the added stock
        const updatedProducts = products.map((product) =>
          product._id === selectedProduct._id
            ? { ...product, stock: product.stock + parseInt(newStock) }
            : product
        );
        setProducts(updatedProducts);
        setFilteredProducts(updatedProducts);
        setModalVisible(false);
        setNewStock('');
        Alert.alert('Stock Updated', 'Stock has been successfully added.');
      } catch (error) {
        console.error('Error adding stock:', error);
        Alert.alert('Error', 'Could not add stock. Please try again later.');
      }
    } else {
      Alert.alert('Invalid Input', 'Please enter a valid stock value.');
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
            <Text
              style={[
                styles.stockStatus,
                {
                  color:
                    stockStatus === 'Out of Stock'
                      ? '#D9534F'
                      : stockStatus === 'Low Stock'
                        ? '#F0AD4E'
                        : '#5CB85C',
                },
              ]}
            >
              {stockStatus}
            </Text>
          </View>
          <View style={styles.addStockButton}>
            <TouchableOpacity
              onPress={() => {
                setSelectedProduct(item);
                setModalVisible(true);
              }}
            >
              <Icon name="plus" size={24} color="#2F4F4F" />
            </TouchableOpacity>
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

      {/* Modal for updating stock */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Update Stock for {selectedProduct?.product_name}</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Enter additional stock"
              keyboardType="numeric"
              value={newStock}
              onChangeText={setNewStock}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.addButton} onPress={handleAddStock}>
                <Text style={styles.addButtonText}>Add Stock</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '', // Light background for contrast
  },
  pickerContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  picker: {
    height: 45,
    fontSize: 16,
    color: '#333',
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  leftContainer: {
    flex: 1,
    paddingRight: 10,
  },
  rightContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  stockDetails: {
    alignItems: 'center',
    marginBottom: 6,
  },
  productName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2F4F4F',
  },
  categoryText: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  stockText: {
    fontSize: 15,
    color: '#2F4F4F',
    fontWeight: '500',
  },
  stockStatus: {
    fontSize: 14,
    fontWeight: '600',
  },
  dateAdded: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 8,
  },
  listContent: {
    paddingBottom: 20,
  },
  addStockButton: {
    backgroundColor: '#F9FAFB',
    borderRadius: 10,
    padding: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    width: '80%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#111827',
  },
  modalInput: {
    height: 44,
    borderColor: '#D1D5DB',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 20,
    color: '#111827',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  addButton: {
    backgroundColor: '#2F4F4F', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#FF4C4C', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});

export default ViewStockLevelsScreen;
