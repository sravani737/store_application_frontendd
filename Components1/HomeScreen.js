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



import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from './Carousel';
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
                <Icon name="search-outline" size={23} color="green" />
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
            <Text style={styles.viewAll}>View All</Text>
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
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Fresh Sale</Text>
            <Text style={styles.viewAll}>View All</Text>
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
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
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
});




// import React ,{useState} from 'react';
// import { StyleSheet, Text,FlatList, View, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Carousel from './Carousel';
// import CoolDrinksScreen from './CoolDrinksScreen';
// import axios from 'axios';

// export default function HomeScreen({ navigation }) {

//   const [searchName, setSearchName] = useState('');
//  // const [searchPrice, setSearchPrice] = useState('');
//   const [searchResults, setSearchResults] = useState([]);


//   const handleSearch = async () => {
//     try {
//       const response = await axios.get('http://192.168.1.5:5000/api/products', {
//         params: {
//           name: searchName,
//           //price: searchPrice,
//         },
//       });
//       setSearchResults(response.data);
//     } catch (error) {
//       console.error('Error fetching search results', error);
//     }
//   };

//   const categories = [
//     { name: 'Fruits & Vegetables',  bgColor: '#FFEEEA', screen: 'Fruits',image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bT0lfB0vxjWfQg96N8bujhHZolwfFxdAPQ&s" },
//     { name: 'Beverages', bgColor: '#FFEFD6', screen: 'Beverages' ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBLQpai51wSxL59_AtSTAkygZBXzkAhtvYA&s'},
//     { name: 'Groceries', bgColor: '#FFF6D9', screen: 'Groceries' ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYOP5I_yVigMDmQj4FrZseCdaztyfwD263w&s'},
//   ];

//   const products = [
//     {
//       name: 'Dishwashing Liquid 220 ml',
//       price: 165,
//       discountPrice: 150,
//       image: 'data:image/jpeg;base64,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',
//     },
//     {
//       name: 'STōK Cold Brew Coffee',
//       price: 1095,
//       discountPrice: 1050,
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8tS7BfowZD-mynhWuOYCPdyTSxbkX4X9Ow&s',
//     },
//     {
//       name: 'Dishwashing Liquid 220 ml',
//       price: 165,
//       discountPrice: 150,
//       image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEBUTExEVFRUWGBMZGBcVFxIWFxUYFRIYFhUVFxUYHSggGRolGxcWITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGysmICYrLzAxLS0xLS0rLS01LS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLTctK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EAEUQAAIBAgMEBgYFCQcFAAAAAAABAgMRBCExBRJBUQYiYXGBkRMyobHB8EKCktHhBxYjM1JTotLxFENicpOywhUkNERz/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAMEAgUGAQf/xAArEQACAgEDBAEDBAMBAAAAAAAAAQIDEQQSIQUTMUFRFSJhMkJScSMkoRT/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAPE6sVq0u9pGmtjYppb0fNWIvSGipYed0n6trpZddHKYjCL0EVurV8EAdlT2hBtpyj37ysSKdeMvVlF21s07eR8vrYBejnktY8u07boVhlDBwsle87uyu/0ktXxAL4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxKSWrMlN0jlbc+t8PvAJO2JJ0ZJZvq5LNvrLgijnh5+iS3JXu/os80JMxWqO+rAItbA1PRyXo58ODOi6N9TDQjLqyTndSya67ejOcVR8yPjKr3tXw9wB9AjNPRp9x6OY6G1W3VTem4/wDcjpwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUnST+7+v/xLso+kr/V/X/4gFZQNdbU90fuPFdZsAikfHet4L3EmxH2h63gviAXHQp9er3Q98jrDkehT69Xuj72dcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDMsqtsbVVJbqzm9Fy7X2EV1saouU3wexi5PCJGP2jCks83wirXKLG7QjVVqkJbvJxT789SA5Nvebu3q3xEpvmcrqOuWyl9nCLkdOkuTZGODWtBf6a+4y/7H+5p/6a+4iSma3Mq/VrfwZ9mJPvg/3EP9JBU8G9KEL9lL8CvUjbSqq+pJHqd0vCHZiT8NtejQ6sKbjlooRWXBa3Ok2Zjo1qanFNdj1Rwu0KdSck0ss0s+Cyzfa7ZPnYsdi1alFXzs7Xvo9XfW/wATZ6TqU1LFvginSscHaGSqwW26c5qm7xm1kno+xPn2Fomb2q6Fq3QeSq015MgAlPAAAAAAAAAAAAAAAAAAAAAAAYYBB2xtBUaTm83pFc5PRfPJnJYanObcm7ybu2bukOKdTE7ifVpZfWebflZeZJjH0dL/ABP4/gcf1fVO63tp8IvUw2xz8kas1HJarV/Ah1KhmtMjzmlqzR7c+CdHpyPEpWNVSty8H7zXdt+WeWvY/iyeFD9mRtqVuC+flGzD1XF3WXvSvz7zRGOnwy8vPt8STSjbP2a/DIl4j4MWWWCW81vWjFeGXEnzqRkurHJLXJeS7yidZ2tfLkScHiN1h3tRcSJw9kXGUH6yumndNapp+863o5tb09LPKpHKa7eEl2P7yoxVNestJalZs3EPD4yD+jUahL63qvvUreDZa6RrXVdsfhnlsN0c/B9BRkwjJ2xQAAAAAAAAAAAAAAAAAAAAAB4qOyuezzON1Z6Hj8cA+c4Ke9Jzk7b05Sb75Nlrj8bCVlHO1+NlrbiVG1MMqFaVP6Ktut/st2XDO17e8s8AqbjdO9+5Xto15eG6ziLKJK2UZfJsnJbUyvrb3yiP6F6+/wCfwOknh02rxWV7fDhp2lfXgkvBc/Hu52+4wnS6xGxMq3S569uf4cvlmVTvw+dM/nlzJDgjBXlYSHndSNbmbmjw4kLm2emupO0W+7zehswlSV9PL5zNeIhenLsSf2Xf3X8ifgoqUd62fHmudvEsVRTjyYyZYxkpU3HjbLwKLbKvG/Fe9FnWrLd5cbZcPx9z5EHA4B15qF3ZvPXJcXm3n2dq14yVaZztWwwykm2fQcLU3oRlzin5q5tPFGCjFRWiSS7ksj2d5HwsmtAAPQAAAAAAAAAAAAAAAAAADDMmGAcL02jF1Vnolfx+UedmYa0FJytlklk+9207uVuNzXt6gnjaik39Fq2WsF9zJ1PCfok1LRLJ24WXA43V2/7DT+S/FfYjRjMS07LlxzyX9DzgsJKo21pxbz9nFnqeGcpxXDi1yL/BUbJW0XAii+7bsQb2rJpo7Ogn6t7q6bz07NCxnhY2yivLsKHpxiKlHBSnTus0m4uScYvjdNNZpeDfMqfyY7TqvD1p16rdGEo7kqkrtPPfW83e3qZeRvtPoa4ra15PO3OVTtz7xj2dJiMDT3W3FeGT5LQpsRgbZxW8uXH8T3tjptgoxTUpVc2rU1mnze80rZ+0rIdNsNOtGChU3ZOMVPq2Tbsk43va+Rp9d0+xTzVjCJqqb3Hc4vB63nyT7Od9Vn4rxPdFbnd700T8dhl6yVmtVz7fntIsZXh2x9zzaNfRJSX5D5RWbSqO+TybvxvpkvYvGx2XRHB7lLeesvcv6s5Cok5Lnlzybzfbkr+S4s+hbJilRgkrWWnI33SY7rMla/hExGQgdGVAAAAAAAAAAAAAAAAAAAAAAYZkwwDielcN3GRl+1CP8MpL4ol7Olem13r4njpzCzoz7Zx9zXuZq2JUza7n7LM4nq8NupZerea0S8EtX8L6FhUrblOckk5RhKSje191cVyvxGCwuXZvP3nzTD7cqLaqlWyTbozWdowmrWtyUt1+Bf6XpdiVkvZJXS79239qyTOjHSKtUxOKnOW9L0FRxj9FejnHSPLrFds3aVWvhccqk2+pRlFaRj15pqMVktVoeOitPdx9SD+lTxMPOG//AMT30L2fOtPFUoJdai43lfdUlVjuqTSyv1vabmLk8L+zaW11V75JeNjRTQw8Xg3Ut1lX3b5+r6GMkuWrbLL+wVJvBTjTe4oUXKdrQSVZ3k5vq3sr2vfzR2eG6O4fCUFSqzU5uXpJN01O0lFRThF5Ky53eZGm6M2/1k29ZNdtrt2VlpqytbNQ+32U9R1Z5xBe35+GXympZrm/Y7NeaZWTpbk2uGTXj8sm9Fl6Sg58JVKrjo7QcurpzWfiTNo4ezi+/wCFvic9LQTolK30Uq7dyRx+Nmozvfj8Uzu+jOJU8PHO+7deX9Tktp04SecU/D4ln0Dm26yXqrcsu3Ne5Iv9HvTt2r2eXrMcnYIyYRk6kpgAAAAAAAAAAAAAAAAAAAAAwzIAOa6dQ/7eMv2Zx9qaKLYlX9JDty9h1PS6nfCVOzdflJHEbOq23XyZynXYYtUvwXNP+ho+iYX1fM+YflP2PuVlXiurUyl2SX36+L5H0FYq2XzmQdu4WOJw86Ttdq8eyS0z4cvEuaXV1yqjV7x/0l0drouU/Xv+j5n0axje0qFS2blK65uVGcfa2vM+g7NxVPD2oUYxjlKUrPeae7e7k7uT7b8DgOjdGFKpOrWnGHo7xhv3s6jWbVk7bsG/tLkXS6RYeDbjUUnr1Iz4qSfWlayz7e7iSTssjhIl6xdB37a/CSRaf9RqzluzW9dtLfTb48FmsuXYzbSwkZSdN05u9NylOLbppb2cVPjlfm737Smw21/TNKFOUVeW89bqVtJNa88kslkdbRnGmqMKNob0p7ylm3kruSvrlHPu4ZFeuUFJ72azsz8ssej+KpSpRhSSjGCjFJZxSStG0tJZR1PW2rbse9+4jU8Ulfdioq8t7RNTWUlZLPKzvxTRqxeK3o9137DLqGpj/wCeVfskrjho5vaFXN95e/k9h+hqS/aqP2QXxbOX2hU6rOz6DU7YKD/alN/xtfAp9Dh/lz+CbU8QOiBhGTrSkAAAAAAAAAAAAAAAAAAAAAAAAQNuxvhqq/ws+a4B5H03a/6ip/ll7j5jgkc511fpLem9nS4jEZrP6MfcRMTi6iSlTtdO7jKyjNWs4N8Mm/FLkRMbXtJf5Ye4xguvOMb7sck3rZOSS9rXsNLpqJKSmvJG7cSwTYSpVd5bkIttzdKa6zlLVqTyle2t1poapbIg1/47vfPqPuv2kvF4aM242cWm7WUk14t5+JElSxEI9SsvGN7eKLkrZSm8l1Lgk0dmzS6tJpdyj4PesJw/SRnBb81T6qjwTcnLdvbO6Sd7aR8YbwWLqp+kxMlBa7toR7byWftNmDxFPd3aO64QaSVRJppWTnd5JXlfuu+RnGmFnyYWzcVnyZp1KsYzlU6rnVTjHJtKEEmr6X0v2rsNuFrXjJX0jzb07Xm+8qMZi6k3KUrNQtG8bWjdvdS7H2EjY87+kX+H4lfW1NLPpFOu7dYV+031D6H0RhbA0P8AIn5tv4nznaTvBn0jonK+Cof/ADj7MmbHoaW5k+p8ItwYMnSlMAAAAAAAAAAAAAAAAAAAAAABgFft6VsPUztl8UfOMDDTwO56XYxQoqLdt+SXgs/fZeJxmHqK6ytf7l8fYc51rEmsei5plwys6QY6UMQoKF24U7dbd1Xauz2GmhtOcVOLpRe/CUf18Vq1yWent77WfTHZzdSlXik0luSTbV+Mc0stZeRV4PD1JWio0l1YxW+5cIShe+5ybv2y7iLTOGxNIvKOhwt2N2OefZNwe360d2NWMakdE3OEpJJN+snHLJ6sutn7VjVjKdKjpJxblJbqaWurVmnlkUcdl4iSvai+s7Xct7eUk7JuNuDSvwa5Efo9Sr069SpdqjFb1VR6yleKdOmlNZybla/CzuTPSd5/auTOb0zg3FpNfnydLi6daqlv1LR4Qgklrlxu/YTMLsndi1CKc7O0Zy3V1rNp5PXgrPjexZS2dXmluVVTTtvNQhv6aJrL2Fjs7Z0aKtvOXOUndvvbLGm6dOMk7H4NVPUZWEclU2U4JqUdz0kKl46redlz1WWat2WK/oznOed1ZK/NOWTN/S/bTnivRwnaNKE769eU8uD4buXmeejMLRk+dvJX+9lPrLjFNFetZtWCHjqeq7fidf0Axd8M6T9alJrwl1k/NteBz+Po/pO+zPfRLGejxzi/Vqpx8VnF+xrxKnSL9lyXpmwvjugfRUZMIydia8AAAAAAAAAAAAAAAAAAAAAHmcrI9EbaDtSm+UZf7WYyeE2EfPNqbRliqjVmld7q47qll5qz8SNVwU6VlKOWqau1npnpweQwUrbrzy5a27CRPGSjJ06tnGSum7WaytOLtbX8TkJ291ty8l/G3GDdDEKdJ058V/R+aKGEXTnpn4Wa7G/nJFxUw/GLy93G3tRGqRUlmuT9mXiV6rXTLnwY3aZWJNeTNOpCWTU1JW3s3Ft+rdX0tdWWVrrLM3wpqMJSvKKqKm5JLLehZpw8t3K/DQr1Skn1ZX79e6/iR6tGo7pZJ8FbdvpdLK3h5G30+vhDnJSddkfMWXk/yi0aN161lZJy3M15v2HIbd6e4nFT3ab6v7ME4w75O9591/IkVNixlm1K+We9FcexX9pJwOyKVLOMc+bzf4Fmzq9ajx5M41WS8RIGzNnTbvNu7zk/bbz8rLkdfsl2bWiSRWxjYmYKpbefcc1rNTK95Zdp06rXPlk/GLNS5JnPuq4ThUWsZRl9l3Zc4mp+ifgvMpsXG8WR6WW2SZLJcYPrtN3SZ6Iex6m9h6UudOm/OCJh9Ai8pM1TAAMgAAAAAAAAAAAAAAAAAACPj43pTXOMl5xZIPMzGXKYR8rwmi7iW1GcNyayveMl60HzXZzRG3HCUoPWMpR+y2vgbKcszhLlKM2bHyjypTpPPRcVazWud07d/ia6leD0tF2eTfxb5vxuWctCnxuFW9eL3X2GFdqm8TJDdJHhshqVSKtZNLk2l35s2wqXWat3ns60uUzOLN1z0jSpHtSIsGTZsRMoR6j7WiCmWmHj1F2sjnwYnjG5RS8StxMeq+4m42p1rciFic42WryXe8kTaeLykYSZ9L2JBxw1FPVU6a8oInGvD092MY8kl5KxsPoEOIo1bAAMjwAAAAAAAAAAAAAAAAAAGGZAB806X03SxcnbKolNcr+rJeav4lXRxGZ9I6QbDhioJSe7KOcZLNxvqrcU+Rzkegs1/fx+w/5jQavp85WNxXktV2rHJXRqZFfi6uZ0a6EVFpiUvqP+Y8VOgtSWuJT+pL+YoLpNyedpL34HLenPLxKvbM6J9AK376HlMz+YVf8AfQ/i+4y+mW/xHfj8nOf2pXtZnpVzoPzBr/v4fxfcZj0BrXzrwXhJj6Zb/Ed+PyUEaxeLERUPWWS5okx6B1V/7MfsS/mNv5k1WrOvB/Ua+JhLpNz/AGjvx+TmpYm7LDo9R9NiqcbXUXvy7oZr+LdXiWf5iz/fx+w/vOg6PbAhhk2m5Tla8mrZLRJcEXdJ0ycbE5LhEc7ljguYmQgdEVAAAAAAAAAAAAAAAAAAAAAAAADAMgAwZAAMAAAIMyADAAAAAAMgAAAAAAAAAAAAAA//2Q==',
//     },
//      {
//       name: 'STōK Cold Brew Coffee',
//       price: 1095,
//       discountPrice: 1050,
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8tS7BfowZD-mynhWuOYCPdyTSxbkX4X9Ow&s',
//     },
//   ];






//   return (
//     <ScrollView style={styles.container}>
//       {/* <View style={styles.header}> */}
//         {/* <Icon name="location-outline" size={20} color="#F0F0F" />
//         <Text style={styles.addressText}>92 High Street, London</Text> */}
//        {/* <Icon name="notifications-outline" size={25} color="black" style={{ marginLeft: 'auto' }} /> */}
//       {/* </View> */}

//       <View style={styles.searchContainer}>
//         <View style={styles.searchRow}>
//         <TextInput
//         style={styles.input}
//         placeholder="Search by product name"
//         value={searchName}
//         onChangeText={setSearchName}
//        />
//       <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
//       <Icon name="search-outline" size={25} color="white" />
//       </TouchableOpacity>
//       </View>
//       {searchResults.length > 0 ? (
//         <FlatList
//           data={searchResults}
//           keyExtractor={(item) => item._id}
//           numColumns={2} // Display products in two columns
//           columnWrapperStyle={styles.row} // Align items properly
//           renderItem={({ item }) => (
//             <View style={styles.productCard}>
//               <Image source={{ uri: item.image }} style={styles.productImage} />
//               <Text style={styles.productName}>{item.product_name}</Text>
//               <Text style={styles.productPrice}>₹{item.price}</Text>
//             </View>
//           )}
//         />
//       ) : (
//         <Text></Text>
//       )}
//       </View>


//      <View>
//       <Carousel/>
//      </View>
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Explore Categories</Text>
//         <Text style={styles.viewAll}>View All</Text>
//       </View>
//       {/* // Category Component inside the HomeScreen */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
//   {categories.map((category, index) => (
//     <TouchableOpacity 
//       key={index} 
//       style={[styles.categoryBox, { backgroundColor: category.bgColor }]} 
//       onPress={() => navigation.navigate(category.screen)}
//     >
//       <Image source={{ uri: category.image }} style={styles.categoryImage} />
//       <View style={styles.textOverlay}>
//         <Text style={styles.categoryText}>{category.name}</Text>
//       </View>
//     </TouchableOpacity>
//   ))}
// </ScrollView>



//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Fresh Sale</Text>
//         <Text style={styles.viewAll}>View All</Text>
//       </View>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productContainer}>
//         {products.map((product, index) => (
//           <View key={index} style={styles.productBox}>
//             <Image source={{ uri: product.image }} style={styles.productImage} />
//             <Text style={styles.productName}>{product.name}</Text>
//             <Text style={styles.productPrice}>TK {product.discountPrice}</Text>
//             <Text style={styles.productOldPrice}>TK {product.price}</Text>
//             <TouchableOpacity style={styles.addButton}>
//               <Icon name="add-outline" size={20} color="white" />
//             </TouchableOpacity>
//           </View>
//         ))} 
//       </ScrollView>
//          {/*CollDrinkScreen */}
//          <CoolDrinksScreen/>
//       {/* About Section */}
//       <View style={styles.aboutSection}>
//         <Text style={styles.aboutTitle}>About Us</Text>
//         <Text style={styles.aboutText}>
//           Welcome to our store! We offer a wide range of groceries and beverages for your daily needs. Our mission is to provide you with the best products at competitive prices.
//         </Text>
//       </View>

//       {/* Copyright Section */}
//       <View style={styles.copyrightSection}>
//         <Text style={styles.copyrightText}>
//           © 2024 <Text styles={{color:'red',fontWeight:'bold'}}>Vsit</Text>. All rights reserved.
//         </Text>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//         flex: 1,
//         backgroundColor: 'white',
//         padding: 15,
//       },
//       header: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginVertical: 10,
//       },
//       addressText: {
//         marginLeft: 5,
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: 'black',
//       },
//       // searchContainer: {
//       //   flexDirection: 'row',
//       //   backgroundColor: '#F2F2F2',
//       //   borderRadius: 10,
//       //   padding: 10,
//       //   alignItems: 'center',
//       //   marginVertical: 10,
//       // },
//       searchInput: {
//         marginLeft: 10,
//         flex: 1,
//         fontSize: 16,
//       },
//       sectionHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginVertical: 15,
//       },
//       sectionTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: 'black',
//       },
//       viewAll: {
//         fontSize: 14,
//         color: 'white',
//       },
//       categoryContainer: {
//         flexDirection: 'row',
//         marginVertical: 10,
//       },
//         categoryBox: {
//           width: 128,
//           height: 100,
//           marginRight: 15,
//           borderRadius: 10,
//           overflow: 'hidden', // Ensures the image and text stay within the button bounds
//           position: 'relative', // Enables absolute positioning for the text
//         },
//         categoryImage: {
//           width: '100%',
//           height: '100%',
//           resizeMode: 'cover', // Image covers the entire button
//         },
//         textOverlay: {
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent black background for better text visibility
//         },
//         categoryText: {
//           color: 'white',
//           fontSize: 18,
//           fontWeight: 'bold',
//           textAlign: 'center',
//         },
//       productContainer: {
//         flexDirection: 'row',
//         marginVertical: 10,
//       },
//       productBox: {
//         backgroundColor: 'white',
//         borderRadius: 10,
//         padding: 10,
//         marginRight: 15,
//         elevation: 2,
//         width: 150,
//         alignItems: 'center',
//       },
//       productImage: {
//         width: 100,
//         height: 100,
//         resizeMode: 'contain',
//       },
//       productName: {
//         fontSize: 14,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginVertical: 5,
//       },
//       productPrice: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#FF6347',
//       },
//       productOldPrice: {
//         fontSize: 12,
//         color: 'gray',
//         textDecorationLine: 'line-through',
//       },
//       addButton: {
//         backgroundColor: 'green',
//         borderRadius: 20,
//         padding: 5,
//         marginTop: 10,
//       },
//       aboutSection: {
//         padding: 20,
//         backgroundColor: '#f8f8f8',
//         marginTop: 20,
//       },
//       aboutTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 10,
//         color:'green'
//       },
//       aboutText: {
//         fontSize: 16,
//         color: 'black',
//       },
//       copyrightSection: {
//         padding: 10,
//         backgroundColor: '#eee',
//         alignItems: 'center',
//         marginTop: 20,
//         marginBottom:30
//       },
//       copyrightText: {
//         fontSize: 14,
//         color: 'red',
//       },
//       searchContainer: {
//         flex: 1,
//         padding: 2,
//         backgroundColor: '#f9f9f9',
//       },
//       searchRow: {
//         flexDirection: 'row', // Align input and button in a row
//         alignItems:'flex-start', // Center vertically
//       },
//       input: {
//         flex:1,
//         borderColor: 'grey', 
//         borderWidth: 1,
//         padding: 10,
//         marginBottom: 10,
//         borderRadius: 5, 
//         backgroundColor: '#fff',
//       },
//       searchButton: {
//         marginLeft:3,
//         backgroundColor: 'green',
//         padding: 12,
//         borderRadius: 8,
//         alignItems: 'center',
//       },
//       searchButtonText: {
//         color: 'white',
        
//       },
//       productCard: {
//         flex: 1,
//         backgroundColor: '#fff',
//         margin: 5,
//         borderRadius: 12,
//         padding: 10,
//         elevation: 3, // For shadow effect on Android
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 4,
//         alignItems: 'center',
//       },
//       productImage: {
//         width: 100,
//         height: 100,
//         resizeMode: 'contain',
//         marginBottom: 10,
//       },
//       productName: {
//         fontSize: 14,
//         fontWeight: '600',
//         color: '#333',
//         textAlign: 'center',
//         marginBottom: 6,
//       },
//       productPrice: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#0288d1',
//         marginBottom: 10,
//       },
//       noResultsText: {
//         textAlign: 'center',
//         color: '#999',
//         marginTop: 20,
//         fontSize: 16,
//       },
//       row: {
//         justifyContent: 'space-between',
//       },
// });  


