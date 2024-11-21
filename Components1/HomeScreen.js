// // // import { StyleSheet, Text, View ,Image,ScrollView,Button} from 'react-native'
// // // import React from 'react'
// // // import Header from './Header'
// // // import Product from './Product'


// // // export default function ProductWrapper({navigation,userId}) {
 
// // //   const products =[
// // //     {
// // //       name:'samsung mobile',
// // //       color:'blue',
// // //       price:50000,
// // //       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEiOT8fElPXDiUHKQCB0itJDQLAxXno7w8Q&s'
// // //     },
// // //     {
// // //       name:'nokia mobile',
// // //       color:'black',
// // //       price:48000,
// // //       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk_u7-UsfPjj7-RhVJe8VOdXAaIgf3Zqmyrg&s'
// // //     },
// // //     {
// // //       name:'apple mobile',
// // //       color:'white',
// // //       price:52000,
// // //       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkkWyk5jF6x5kqj9KHB-y8vGf-d8ny-vS8cA&s'
// // //     },
// // //   ]
// // //   return (
// // //     <View style={{}}>
// // //         <Button title='Go to Profile' color="black"
// // //         onPress={()=>navigation.navigate("User",{userId})}/>
// // //       <Header/>
// // //       <ScrollView>
// // //        {
// // //         products.map((item,index)=> <Product item={item} key={index}/>)
// // //        }
// // //       </ScrollView>
      
      
// // //     </View>
// // //   )
// // // }

// // // const styles = StyleSheet.create({})

// // // import { StyleSheet, Text, View, Image, ScrollView, Button, ActivityIndicator, Alert } from 'react-native';
// // // import React, { useEffect, useState } from 'react';
// // // import Header from './Header';
// // // import Product from './Product';

// // // export default function ProductWrapper({ navigation, userId }) {
// // //   const [products, setProducts] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     const fetchProducts = async () => {
// // //       try {
// // //         const response = await fetch('http://192.168.1.27:5000/api/products'); // Adjust the URL to your backend's endpoint
// // //         if (!response.ok) {
// // //           throw new Error('Failed to fetch products');
// // //         }
// // //         const data = await response.json();
// // //         setProducts(data);
// // //         console.log("Fetched products:", data);
// // //       } catch (error) {
// // //         Alert.alert("Error", error.message);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchProducts();
// // //   }, []);

// // //   return (
// // //     <View style={{ flex: 1 }}>
// // //       <Button
// // //         title='Go to Profile'
// // //         color="black"
// // //         onPress={() => navigation.navigate("User", { userId })}
// // //       />
// // //       <Header />
// // //       {loading ? (
// // //         <ActivityIndicator size="large" color="green" style={{ marginTop: 20 }} />
// // //       ) : (
// // //         <ScrollView>
// // //           {products.length > 0 ? (
// // //             products.map((item, index) => <Product item={item} key={index} />)
// // //           ) : (
// // //             <Text style={{ textAlign: 'center', marginTop: 20 }}>No products available</Text>
// // //           )}
// // //         </ScrollView>
// // //       )}
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({});


// // // import React from 'react';
// // // import { StyleSheet, Text, View, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
// // // import Icon from 'react-native-vector-icons/Ionicons';

// // // export default function HomeScreen() {
// // //   const categories = [
// // //     { name: 'Fruits & Vegetables', icon: 'ios-leaf-outline', bgColor: '#FFEEEA' },
// // //     { name: 'Beverages', icon: 'ios-fish-outline', bgColor: '#FFEFD6' },
// // //     { name: 'Groceries', icon: 'ios-flame-outline', bgColor: '#FFF6D9' },
// // //   ];

// // //   const products = [
// // //     {
// // //       name: 'Dishwashing Liquid 220 ml',
// // //       price: 165,
// // //       discountPrice: 150,
// // //       image: 'https://example.com/dishwashing-liquid.png', // Replace with your image URL
// // //     },
// // //     {
// // //       name: 'STōK Cold Brew Coffee',
// // //       price: 1095,
// // //       discountPrice: 1050,
// // //       image: 'https://example.com/cold-brew-coffee.png', // Replace with your image URL
// // //     },
// // //   ];

// // //   return (
// // //     <ScrollView style={styles.container}>
// // //       {/* Header with Address */}
// // //       <View style={styles.header}>
// // //         <Icon name="location-outline" size={20} color="black" />
// // //         <Text style={styles.addressText}>92 High Street, London</Text>
// // //         <Icon name="notifications-outline" size={25} color="black" style={{ marginLeft: 'auto' }} />
// // //       </View>

// // //       {/* Search Input */}
// // //       <View style={styles.searchContainer}>
// // //         <Icon name="search-outline" size={20} color="#8e8e8e" />
// // //         <TextInput style={styles.searchInput} placeholder="Search anything you want" />
// // //       </View>

// // //       {/* Categories Section */}
// // //       <View style={styles.sectionHeader}>
// // //         <Text style={styles.sectionTitle}>Explore Categories</Text>
// // //         <Text style={styles.viewAll}>View All</Text>
// // //       </View>
// // //       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
// // //         {categories.map((category, index) => (
// // //           <TouchableOpacity key={index} style={[styles.categoryBox, { backgroundColor: category.bgColor }]}>
// // //             <Icon name={category.icon} size={30} color="#FF6347" />
// // //             <Text style={styles.categoryText}>{category.name}</Text>
// // //           </TouchableOpacity>
// // //         ))}
// // //       </ScrollView>

// // //       {/* Product Section */}
// // //       <View style={styles.sectionHeader}>
// // //         <Text style={styles.sectionTitle}>Fresh Sale</Text>
// // //         <Text style={styles.viewAll}>View All</Text>
// // //       </View>
// // //       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productContainer}>
// // //         {products.map((product, index) => (
// // //           <View key={index} style={styles.productBox}>
// // //             <Image source={{ uri: product.image }} style={styles.productImage} />
// // //             <Text style={styles.productName}>{product.name}</Text>
// // //             <Text style={styles.productPrice}>TK {product.discountPrice}</Text>
// // //             <Text style={styles.productOldPrice}>TK {product.price}</Text>
// // //             <TouchableOpacity style={styles.addButton}>
// // //               <Icon name="add-outline" size={20} color="white" />
// // //             </TouchableOpacity>
// // //           </View>
// // //         ))}
// // //       </ScrollView>
// // //     </ScrollView>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: 'white',
// // //     padding: 15,
// // //   },
// // //   header: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     marginVertical: 10,
// // //   },
// // //   addressText: {
// // //     marginLeft: 5,
// // //     fontSize: 16,
// // //     fontWeight: 'bold',
// // //     color: 'black',
// // //   },
// // //   searchContainer: {
// // //     flexDirection: 'row',
// // //     backgroundColor: '#F2F2F2',
// // //     borderRadius: 10,
// // //     padding: 10,
// // //     alignItems: 'center',
// // //     marginVertical: 10,
// // //   },
// // //   searchInput: {
// // //     marginLeft: 10,
// // //     flex: 1,
// // //     fontSize: 16,
// // //   },
// // //   sectionHeader: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     marginVertical: 15,
// // //   },
// // //   sectionTitle: {
// // //     fontSize: 18,
// // //     fontWeight: 'bold',
// // //     color: 'black',
// // //   },
// // //   viewAll: {
// // //     fontSize: 14,
// // //     color: '#FF6347',
// // //   },
// // //   categoryContainer: {
// // //     flexDirection: 'row',
// // //     marginVertical: 10,
// // //   },
// // //   categoryBox: {
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     width: 128,
// // //     height: 100,
// // //     marginRight: 15,
// // //     borderRadius: 10,
// // //   },
// // //   categoryText: {
// // //     marginTop: 5,
// // //     fontSize: 12,
// // //     fontWeight: 'bold',
// // //     textAlign: 'center',
// // //   },
// // //   productContainer: {
// // //     flexDirection: 'row',
// // //     marginVertical: 10,
// // //   },
// // //   productBox: {
// // //     backgroundColor: 'white',
// // //     borderRadius: 10,
// // //     padding: 10,
// // //     marginRight: 15,
// // //     elevation: 2,
// // //     width: 150,
// // //     alignItems: 'center',
// // //   },
// // //   productImage: {
// // //     width: 100,
// // //     height: 100,
// // //     resizeMode: 'contain',
// // //   },
// // //   productName: {
// // //     fontSize: 14,
// // //     fontWeight: 'bold',
// // //     textAlign: 'center',
// // //     marginVertical: 5,
// // //   },
// // //   productPrice: {
// // //     fontSize: 16,
// // //     fontWeight: 'bold',
// // //     color: '#FF6347',
// // //   },
// // //   productOldPrice: {
// // //     fontSize: 12,
// // //     color: 'gray',
// // //     textDecorationLine: 'line-through',
// // //   },
// // //   addButton: {
// // //     backgroundColor: '#FF6347',
// // //     borderRadius: 20,
// // //     padding: 5,
// // //     marginTop: 10,
// // //   },
// // // });


// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, TextInput, ScrollView, Image, TouchableOpacity, FlatList, Modal, Button } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Carousel from './Carousel';
// import CoolDrinksScreen from './CoolDrinksScreen';
// import TopProducts from '../components/TopProducts';

// export default function HomeScreen({ navigation }) {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [locationModalVisible, setLocationModalVisible] = useState(true); // Modal is visible by default

//   const categories = [
//     { name: 'Beverages', bgColor: '#FFEFD6', screen: 'Groceries', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBLQpai51wSxL59_AtSTAkygZBXzkAhtvYA&s' },
//     { name: 'Groceries', bgColor: '#FFF6D9', screen: 'Groceries', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYOP5I_yVigMDmQj4FrZseCdaztyfwD263w&s' },
//   ];

//   // Dummy function to simulate location selection
//   // const selectLocation = () => {
//   //   setLocationModalVisible(false);
//   // };

//   return (
//     <View style={{ flex: 1 }}>
//       {/* Location Selection Modal */}
//       {/* <Modal
//         visible={locationModalVisible}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={() => setLocationModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Select Your Location</Text>
//             {/* Location options or picker can go here */}
//             {/* <TouchableOpacity onPress={()=>navigation.navigate('SelectLocationScreen')} style={styles.selectLocationButton}>
//               <Text style={styles.selectLocationText}>Select Location</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal> */} 

//       {/* Main Home Screen Content */}
//       <FlatList
//         data={[{}]} // Dummy data for wrapping, FlatList needs data
//         renderItem={() => (
//           <View style={styles.container}>
//             {/* Search Section */}
//             <View>
//               <TouchableOpacity onPress={() => navigation.navigate('Groceries')} style={styles.searchContainer}>
//                 <TextInput
//                   style={styles.searchInput}
//                   editable={false}
//                   onChangeText={setSearchQuery}
//                   placeholder="Search anything you want"
//                   placeholderTextColor="#8e8e8e"
//                 />
//                 <TouchableOpacity style={styles.searchButton}>
//                   <Icon name="search-outline" size={23} color="green" />
//                 </TouchableOpacity>
//               </TouchableOpacity>
//             </View>

//             {/* Carousel, Categories, and Other Sections */}
//             <View>
//               <Carousel />
//               <TopProducts />
//               <CoolDrinksScreen />
//               {/* More components go here */}
//             </View>
//           </View>
//         )}
//         keyExtractor={() => 'home-screen'}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: 'white', padding: 15, paddingTop: 1 },
//   searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: 25, paddingHorizontal: 15, paddingVertical: 5, margin: 2, elevation: 2 },
//   searchInput: { flex: 1, fontSize: 18, paddingVertical: 5, color: '#333' },
//   searchButton: { borderRadius: 20, padding: 8, justifyContent: 'center', alignItems: 'center' },

  
//   modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
//   modalContent: { width: '80%', backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center' },
//   modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15, color: 'green' },
//   selectLocationButton: { marginTop: 20, backgroundColor: 'green', padding: 10, borderRadius: 5 },
//   selectLocationText: { color: 'white', fontWeight: 'bold' }
// });


import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from './CarouselScreen';
import CoolDrinksScreen from './CoolDrinksScreen';
import TopProducts from '../components/TopProducts';

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const categories = [
    { name: 'Beverages', bgColor: '#FFEFD6', screen: 'Groceries', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBLQpai51wSxL59_AtSTAkygZBXzkAhtvYA&s' },
    { name: 'Groceries', bgColor: '#FFF6D9', screen: 'Groceries', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYOP5I_yVigMDmQj4FrZseCdaztyfwD263w&s' },
  ];

  return (
    <FlatList
      data={[{}]} // Dummy data for wrapping, FlatList needs data
      renderItem={() => (
        <View style={styles.container}>
          {/* Search Section */}
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Groceries')} style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                editable={false}
                onChangeText={setSearchQuery}
                placeholder="Search anything you want"
                placeholderTextColor="#8e8e8e"
              />
              <TouchableOpacity style={styles.searchButton}>
                <Icon name="search-outline" size={25} color="#2F4F4F" />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

          {/* Carousel Section */}
          <View>
            <Carousel />
          </View>

          {/* Categories Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Explore Categories</Text>
          </View>
          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.categoryBox, { backgroundColor: item.bgColor }]}
                onPress={() => navigation.navigate(item.screen, { category: item.name })}
              >
                <Image source={{ uri: item.image }} style={styles.categoryImage} />
                <View style={styles.textOverlay}>
                  <Text style={styles.categoryText}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
            style={styles.categoryContainer}
          />

          {/* Fresh Sale Section */}
          <View style={styles.sectionHeaders}>
            <Text style={styles.sectionTitle}>Fresh Sale</Text>
          </View>
          <TopProducts />
          <CoolDrinksScreen />

          {/* About Section */}
          <View style={styles.aboutSection}>
            <Text style={styles.aboutTitle}>About Us</Text>
            <Text style={styles.aboutText}>
              Welcome to our store! We offer a wide range of groceries and beverages for your daily needs. Our mission is to provide you with the best products at competitive prices.
            </Text>
          </View>

          {/* Copyright Section */}
          <View style={styles.copyrightSection}>
            <Text style={styles.copyrightText}>
              © 2024 <Text styles={{ color: 'red', fontWeight: 'bold' }}>Vsit</Text>. All rights reserved.
            </Text>
          </View>
        </View>
      )}
      keyExtractor={() => 'home-screen'}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    paddingTop: 1
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 5,
    margin: 2,
    elevation: 2,
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 5,
    color: '#333',
  },
  searchButton: {
    borderRadius: 20,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F4F4F',
  },
  viewAll: {
    fontSize: 14,
    color: 'white',
  },
  categoryContainer: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  categoryBox: {
    width: 135,
    height: 100,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  categoryText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  aboutSection: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    marginTop: 20,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'green'
  },
  aboutText: {
    fontSize: 16,
    color: 'black',
  },
  copyrightSection: {
    padding: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30
  },
  copyrightText: {
    fontSize: 14,
    color: 'red',
  },
  sectionHeaders:{
    marginTop:5
  },
});


