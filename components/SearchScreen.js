import React, { useState } from 'react';
import { View, Image, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const SearchScreen = () => {
  const [searchName, setSearchName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://192.168.1.27:5000/api/products', {
        params: {
          name: searchName,
        },
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results', error);
    }
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchRow}>
        <TextInput
          style={styles.input}
          placeholder="Search by product name"
          value={searchName}
          onChangeText={setSearchName}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item._id}
          numColumns={2} // Display products in two columns
          columnWrapperStyle={styles.row} // Align items properly
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productName}>{item.product_name}</Text>
              <Text style={styles.productPrice}>₹{item.price}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noResultsText}>No results found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  searchRow: {
    flexDirection: 'row', // Align input and button in a row
    alignItems: 'center', // Center vertically
  },
  input: {
    flex: 1, // Allow input to take the available space
    borderColor: 'grey', 
    borderWidth: 1,
    padding: 10,
    marginRight: 10, // Space between input and button
    borderRadius: 5, 
    backgroundColor: '#fff',
  },
  searchButton: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  productCard: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 12,
    padding: 10,
    elevation: 3, // For shadow effect on Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 6,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0288d1',
    marginBottom: 10,
  },
  noResultsText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 20,
    fontSize: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default SearchScreen;
