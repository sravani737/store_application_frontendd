import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import axios from 'axios';

const FreshSaleProducts = () => {
  const [topProducts, setTopProducts] = useState([]);

  // Fetch top products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://192.168.1.27:5000/api/products/top");
        setTopProducts(response.data);
      } catch (err) {
        console.error('Error fetching top products:', err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productContainer}>
      {topProducts.map((product, index) => (
        <View key={index} style={styles.productBox}>
          <Image source={{ uri: product.image }} style={styles.productImage} />
          <Text style={styles.productName}>{product.product_name}</Text>
          <Text style={styles.productPrice}>RS {product.price}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default FreshSaleProducts;

const styles = {
  productContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  productBox: {
    width: 160,
    marginRight: 15,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 5, // Adds shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
    resizeMode: 'contain',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
    color: '#333',
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
    marginTop: 0,
    fontWeight: 'bold',
  },
};
