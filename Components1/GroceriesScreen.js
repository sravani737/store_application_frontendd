// import { StyleSheet, Text, View ,Image,ScrollView,Button} from 'react-native'
// import React from 'react'
// import Header from './Header'
// import Product from './Product'


// export default function ProductWrapper({navigation,userId}) {
 
//   const products =[
//     {
//       name:'samsung mobile',
//       color:'blue',
//       price:50000,
//       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEiOT8fElPXDiUHKQCB0itJDQLAxXno7w8Q&s'
//     },
//     {
//       name:'nokia mobile',
//       color:'black',
//       price:48000,
//       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk_u7-UsfPjj7-RhVJe8VOdXAaIgf3Zqmyrg&s'
//     },
//     {
//       name:'apple mobile',
//       color:'white',
//       price:52000,
//       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkkWyk5jF6x5kqj9KHB-y8vGf-d8ny-vS8cA&s'
//     },
//   ]
//   return (
//     <View style={{}}>
//         <Button title='Go to Profile' color="black"
//         onPress={()=>navigation.navigate("User",{userId})}/>
//       <Header/>
//       <ScrollView>
//        {
//         products.map((item,index)=> <Product item={item} key={index}/>)
//        }
//       </ScrollView>
      
      
//     </View>
//   )
// }

// const styles = StyleSheet.create({})





// import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Modal, Button } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome
// import Product from './Product';

// export default function Groceries({ navigation, userId }) {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchName, setSearchName] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false); // State to control the filter modal
//   const [searchPrice, setSearchPrice] = useState('');
//   const [searchRating, setSearchRating] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('http://192.168.1.27:5000/api/products');
//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleSearch = () => {
//     const filteredProducts = products.filter((product) =>
//       product.product_name.toLowerCase().includes(searchName.toLowerCase())
//     );
//     setSearchResults(filteredProducts);
//   };

//   const handleFilterByPrice = () => {
//     const filteredProducts = products.filter((product) => product.price <= parseFloat(searchPrice));
//     setSearchResults(filteredProducts);
//     setModalVisible(false); // Close modal after applying filter
//   };

//   const handleFilterByRating = () => {
//     const filteredProducts = products.filter((product) => product.rating >= parseFloat(searchRating));
//     setSearchResults(filteredProducts);
//     setModalVisible(false); // Close modal after applying filter
//   };

//   const renderProduct = ({ item }) => {
//     return <Product item={item} userId={userId} />;
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={styles.searchRow}>
//         <TextInput
//           style={styles.input}
//           placeholder="Search by product name"
//           value={searchName}
//           onChangeText={setSearchName}
//         />
//         <TouchableOpacity style={styles.filterButton} onPress={() => setModalVisible(true)}>
//           <FontAwesome name="filter" size={24} color="green" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
//           <Text style={styles.searchButtonText}>Search</Text>
//         </TouchableOpacity>
//       </View>

//       {loading ? (
//         <Text>Loading...</Text>
//       ) : (
//         <FlatList
//           data={searchResults.length > 0 ? searchResults : products}
//           renderItem={renderProduct}
//           keyExtractor={(item) => item._id}
//           numColumns={2}
//           columnWrapperStyle={styles.row}
//         />
//       )}

//       {/* Modal for Filter Options */}
//       <Modal
//         visible={modalVisible}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Filter Options</Text>

//             <TextInput
//               style={styles.modalInput} // Updated input style
//               placeholder="Enter price to filter by"
//               placeholderTextColor="#888" // Set placeholder text color
//               value={searchPrice}
//               onChangeText={setSearchPrice}
//               keyboardType="numeric"
//             />
//             <TouchableOpacity style={styles.modalButton} onPress={handleFilterByPrice}>
//               <Text style={styles.modalButtonText}>Filter by Price</Text>
//             </TouchableOpacity>

//             <TextInput
//               style={styles.modalInput} // Updated input style
//               placeholder="Enter rating to filter by"
//               placeholderTextColor="#888" // Set placeholder text color
//               value={searchRating}
//               onChangeText={setSearchRating}
//               keyboardType="numeric"
//             />
//             <TouchableOpacity style={styles.modalButton} onPress={handleFilterByRating}>
//               <Text style={styles.modalButtonText}>Filter by Rating</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={[styles.modalButton, { backgroundColor: '#FF4040' }]} onPress={() => setModalVisible(false)}>
//               <Text style={styles.modalButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   searchRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     margin: 10,
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 8, // rounded input
//     marginRight: 10,
//     paddingHorizontal: 10,
//   },
//   searchButton: {
//     backgroundColor: 'green',
//     padding: 10,
//     borderRadius: 8, // rounded button
//   },
//   searchButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   filterButton: {
//     padding: 10,
//     marginRight: 10,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
//   },
//   modalContent: {
//     width: 320,
//     padding: 20,
//     backgroundColor: 'white',
//     borderRadius: 15, // more rounded modal
//     elevation: 10, // adds shadow effect for depth
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 15,
//     color: 'black',
//   },
//   modalInput: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 8, // rounded input
//     paddingHorizontal: 10,
//     marginBottom: 10, // spacing between inputs
//     color: 'black', // Ensure entered text is visible
//   },
//   modalButton: {
//     backgroundColor: 'green', // changing button color
//     paddingVertical: 12,
//     paddingHorizontal: 25,
//     borderRadius: 8, // rounded button
//     marginVertical: 8, // spacing between buttons
//     alignItems: 'center', // Center the button text
//   },
//   modalButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   row: {
//     justifyContent: 'space-between',
//   },
// });

// import Product from './Product';
// import { StleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// export default function Groceries({route, userId }) {
//   const query = route?.params?.query||''; // if the query param is undefined then it doesn't throw any error
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchInput, setSearchInput] = useState(query || '');
//   const [searchResults, setSearchResults] = useState([]);
//   const [isSearching, setIsSearching] = useState(false); // New state for search loading
//   const [placeHolderText,setPlaceHolderText] =useState('');


//   const placeHolderOptins = ['price','name','rating'];
//   let placeHolderIndex = 0;

//   useEffect(()=>{
    
//     const placeHolderInterval = setInterval(()=>{
//       placeHolderIndex = (placeHolderIndex+1)%placeHolderOptins.length;
//       setPlaceHolderText(placeHolderOptins[placeHolderIndex]);
//     },1000);
//     return () => clearInterval(placeHolderInterval); // Cleanup interval on component unmount
//   },[]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('http://192.168.1.2:5000/api/products');
//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);
  
//   useEffect(() => {
//     if (query) {
//       setSearchInput(query);
//       handleSearch(); // Trigger search automatically when query is provided
//     }
//   }, [query]);

//   const handleSearch = () => {
//     setIsSearching(true); // Show loader when search starts
//     setTimeout(() => {
//       let filteredProducts;

//       if (!isNaN(searchInput)) {
//         // Numeric input, assume it's either price or rating
//         const numericInput = parseFloat(searchInput);
//         filteredProducts = products.filter(
//           (product) => product.price <= numericInput || product.rating >= numericInput
//         );
//       } else {
//         // Text input, assume it's a name
//         filteredProducts = products.filter((product) =>
//           product.product_name.toLowerCase().includes(searchInput.toLowerCase())
//         );
//       }

//       setSearchResults(filteredProducts);
//       setIsSearching(false); // Hide loader after 2 seconds
//       setSearchInput(''); // Clear the input field after search

//     }, 2000);
//   };

//   const renderProduct = ({ item }) => {
//     return <Product item={item} userId={userId} />;
//   };

//   // Filter products based on selected category
//   const filteredProducts = selectedCategory 
//     ? products.filter(product => product.category_name === category) 
//     : products;

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={styles.searchRow}>
//         <TextInput
//           style={styles.input}
//           placeholder={`Search By ${placeHolderText}`}
//           value={searchInput}
//           onChangeText={setSearchInput}
//         />
//         <TouchableOpacity style={styles.filterButton} onPress={handleSearch}>
//           <FontAwesome name="search" size={24} color="green" />
//         </TouchableOpacity>
//       </View>

//       {isSearching ? (
//         <ActivityIndicator size='large' color="green" style={styles.loader} />
//       ) : (
//         <FlatList
//           data={searchResults.length > 0 ? searchResults : products}
//           renderItem={renderProduct}
//           keyExtractor={(item) => item._id}
//           numColumns={2}
//           columnWrapperStyle={styles.row}
//         />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   searchRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     margin: 10,
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginRight: 10,
//     paddingHorizontal: 15,
//     fontSize:16
   
//   },
//   filterButton: {
//     padding: 10,
//     marginRight: 10,
//   },
//   loader: {
//     flex:1,
//     alignItems:'center',
//     justifyContent:'center'
//   },
//   row: {
//     justifyContent: 'space-between',
//   },
// });
import Product from './Product';
import { StyleSheet, View, TextInput, TouchableOpacity, FlatList, ActivityIndicator, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Groceries({ route, userId }) {
  const query = route?.params?.query || ''; 
  const category = route?.params?.category || null; 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState(query || '');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [placeHolderText, setPlaceHolderText] = useState('');

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
        setSearchInput(" ");
      } else {
        filteredProducts = products.filter((product) =>
          product.product_name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setSearchInput(" ");
      }
    }

    setSearchResults(filteredProducts);
    setIsSearching(false);
  };

  const renderProduct = ({ item }) => {
    return <Product item={item} userId={userId} />;
  };

  const filteredProducts = category 
    ? products.filter(product => product.category_name === category) 
    : products;

  const displayProducts = isSearching || searchInput ? searchResults : filteredProducts;

  return (
    <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      {/* Background for cleaner look */}
      <View style={styles.searchRow}>
        <TextInput
          style={styles.input}
          placeholder={`Search By ${placeHolderText}`} // This works correctly for placeholder
          value={searchInput}
          onChangeText={setSearchInput}
        />
        <TouchableOpacity style={styles.filterButton} onPress={handleSearch}>
          <FontAwesome name="search" size={24} color="green" />
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size='large' color="green" style={styles.loader} />
      ) : (
        <FlatList
          data={displayProducts}
          renderItem={renderProduct}
          keyExtractor={(item) => item._id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.flatListContainer} // Added container styling for padding
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
