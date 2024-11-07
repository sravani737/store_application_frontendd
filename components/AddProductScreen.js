import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddProductScreen = ({ navigation }) => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Groceries');
  const [image, setImage] = useState('');
  const [stock, setStock] = useState('');
  const [actual_price, setActualPrice] = useState('');

  const handleAddProduct = async () => {
    if (!productName || !description || !price || !category) {
      Alert.alert('Please fill in all fields');
      return;
    }

    try {
      const newProduct = {
        product_name: productName,
        description,
        stock,
        price: parseFloat(price),
        actual_price: parseFloat(actual_price),
        category_name: category,
        image,
      };
      
      let token = await AsyncStorage.getItem('userToken');
      const response = await axios.post('http://192.168.1.27:5000/api/products', newProduct, {
        headers: {
          authorization: `Bearer ${token}`,
        }
      });
      
      if (response.status === 201) {
        Alert.alert('Product added successfully');
        navigation.goBack();
      } else {
        Alert.alert('Failed to add product');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Add Product</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Product Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter product name"
          value={productName}
          onChangeText={setProductName}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter product description"
          value={description}
          onChangeText={setDescription}
        />

        <Text style={styles.label}>Price</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter product price"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />

        <Text style={styles.label}>Actual Price</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter actual product price"
          keyboardType="numeric"
          value={actual_price}
          onChangeText={setActualPrice}
        />

        <Text style={styles.label}>Stock</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter product stock"
          keyboardType="numeric"
          value={stock}
          onChangeText={setStock}
        />

        <Text style={styles.label}>Category</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={category}
            style={styles.picker}
            onValueChange={(itemValue) => setCategory(itemValue)}
          >
            <Picker.Item label="Groceries" value="Groceries" />
            <Picker.Item label="Beverages" value="Beverages" />
          </Picker>
        </View>

        <Text style={styles.label}>Image URL</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter product image URL"
          value={image}
          onChangeText={setImage}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
          <Text style={styles.buttonText}>Add Product</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  input: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    fontSize: 15,
    color: '#333',
    marginBottom: 15,
  },
  pickerContainer: {
    borderWidth: 1.5,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 15,
  },
  picker: {
    height: 45,
    backgroundColor: 'white',

  },
  button: {
    backgroundColor: 'green',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default AddProductScreen;
