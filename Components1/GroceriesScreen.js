
import Product from './ProductsScreen';
import { StyleSheet, View, TextInput, TouchableOpacity, FlatList, ActivityIndicator, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Slider from '@react-native-community/slider';
export default function Groceries({ route, userId }) {
  const query = route?.params?.query || ''; 
  const category = route?.params?.category || null; 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState(query || '');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [placeHolderText, setPlaceHolderText] = useState('');
  const [priceRange, setPriceRange] = useState(100); // Max price range (initially set to 100)
  const [searchType, setSearchType] = useState(''); // Track search type ('price', 'name', 'rating')

  const placeHolderOptions = ['price', 'name', 'rating'];
  let placeHolderIndex = 0;

  useEffect(() => {
    const placeHolderInterval = setInterval(() => {
      placeHolderIndex = (placeHolderIndex + 1) % placeHolderOptions.length;
      setPlaceHolderText(placeHolderOptions[placeHolderIndex]);
    }, 2000);
    return () => clearInterval(placeHolderInterval);
  }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let token  = await AsyncStorage.getItem('userToken');
        const response = await fetch('http://192.168.1.27:5000/api/products',{
          method:'GET',
          headers:{
            Authorization:`Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (query) {
      setSearchInput(query);
      handleSearch();
    }
  }, [query]);

  useEffect(() => {
    setSearchInput('');
    setSearchResults([]);
  }, [category]);

  const handleSearch = () => {
    setIsSearching(true);
    let filteredProducts = [];

    if (searchInput) {
      if (!isNaN(searchInput)) {
        const numericInput = parseFloat(searchInput);
        filteredProducts = products.filter(
          (product) => product.price <= numericInput || product.rating >= numericInput
        );
        setSearchType('price'); // Set the search type to price
        setSearchInput(" ");
      } else if (placeHolderText === 'rating') {
        // Handle rating search
        filteredProducts = products.filter((product) =>
          product.rating >= parseFloat(searchInput)
        );
        setSearchType('rating'); // Set the search type to rating
        setSearchInput(" ");
      } else {
        filteredProducts = products.filter((product) =>
          product.product_name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setSearchType('name'); // Set the search type to name
        setSearchInput(" ");
      }
    }

    // Apply price range filter on the search results or the full product list
    filteredProducts = (filteredProducts.length ? filteredProducts : products).filter(
      (product) => product.price <= priceRange
    );

    setSearchResults(filteredProducts);
    setIsSearching(false);
  };

  const renderProduct = async ({ item }) => {
    return <Product item={item} userId={userId} />;
  };

  const filteredProducts = category 
    ? products.filter(product => product.category_name === category) 
    : products;

  const displayProducts = isSearching || searchInput ? searchResults : filteredProducts;

  return (
    <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      {/* Search Row */}
      <View style={styles.searchRow}>
        <TextInput
          style={styles.input}
          placeholder={`Search By ${placeHolderText}`}
          value={searchInput}
          onChangeText={setSearchInput}
        />
        <TouchableOpacity style={styles.filterButton} onPress={handleSearch}>
          <FontAwesome name="search" size={24} color="#2F4F4F" />
        </TouchableOpacity>
      </View>

      {/* Conditionally Render Price Range Slider */}
      {searchType === 'price' && (
        <View style={styles.sliderContainer}>
          <Text style={styles.maxPriceText}>Max Price: ${priceRange}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={500} // Adjust max range as needed
            step={10}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value)}
            onSlidingComplete={handleSearch} // Re-filter when sliding is complete
            minimumTrackTintColor="green"
            maximumTrackTintColor="red"
            thumbTintColor="black"
          />
        </View>
      )}

      {loading ? (
        <ActivityIndicator size='large' color="#2F4F4F" style={styles.loader} />
      ) : (
        <FlatList
          data={displayProducts}
          renderItem={renderProduct}
          keyExtractor={(item) => item._id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.flatListContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  filterButton: {
    padding: 10,
    marginLeft: 8,
  },
  sliderContainer: {
    marginHorizontal: 10,
    marginVertical: 10, // Keeps vertical margin minimal
    alignItems: 'center', // Centers the slider and text
  },
  
  maxPriceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Darker text for better readability
    marginBottom: 5, // Reduced space between text and slider
  },
  
  slider: {
    width: '90%',  // Keeps the width consistent
    height: 30,    // Adjusts the track height, making it thicker
    borderRadius: 10, // Keeps smooth corners for the slider
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  flatListContainer: {
    paddingBottom: 10,
    paddingHorizontal: 5,
  },
});