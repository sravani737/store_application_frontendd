// // import { StyleSheet, Text, View, Image, Button } from 'react-native';
// // import React, { useEffect, useState } from 'react';
// // import { addToCart,removeFromCart } from './redux/actions';
// // import { useDispatch, useSelector } from 'react-redux';

// // export default function Product(props) {
// //   const item = props.item;
// //   const dispatch = useDispatch();
// //   const cartItems = useSelector((state)=>state.reducer)
// //   const [isAdded,setIsAdded] = useState(false)

// //   const handleAddToCart = (item) => {
// //     dispatch(addToCart(item));
// //   };

// //   const handleRemoveFromCart = (item) => {
// //     dispatch(removeFromCart(item.name));
// //   };


// //   useEffect(()=>{ 
// //     let result = cartItems.filter((element)=>{
// //         return element.name === item.name
// //     })
// //     if(result.length){
// //       setIsAdded(true)
// //     }else{
// //       setIsAdded(false)
// //     }
// //   },[cartItems])
// //   return (

// //     <View style={{ alignItems: "center", borderBottomColor: 'orange', borderBottomWidth: 2, padding: 5,marginBottom:60 }}>
// //        <Image style={{ width: 200, height: 200 }} source={{ uri: item.image }} />
// //       <Text style={{ fontSize: 24 }}>{item.product_name}</Text>
// //       <Text style={{ fontSize: 24 }}>{item.price}</Text>
// //       <Text style={{ fontSize: 24 }}>{item.description}</Text>

// //       {
// //         isAdded?
// //         <Button title='remove from  cart' onPress={() => handleRemoveFromCart(item)} />
// //         :
// //         <Button title='add to cart' color="black"  onPress={() => handleAddToCart(item)} />
// //       }

// //     </View>
// //   );
// // }

// // // const styles = StyleSheet.create({});

// //11
// // import { StyleSheet, Text, View, Image, Button } from 'react-native';
// // import React, { useEffect, useState } from 'react';
// // import { addToCart, removeFromCart } from './redux/actions';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { reducer } from './redux/reducer';

// // export default function Product(props) {
// //   const item = props.item;
// //   const dispatch = useDispatch();
// //   const cartItems = useSelector((state) => state.reducer.items);
// //   const [isAdded, setIsAdded] = useState(false);

// //   const handleAddToCart = (item) => {
// //     dispatch(addToCart(item));
// //   };

// //   const handleRemoveFromCart = (item) => {
// //     dispatch(removeFromCart(item._id));
// //   };

// //   useEffect(() => {

// //     let result = cartItems.filter((element) => {
// //       return element._id === item._id;
// //     });
// //     if (result.length) {
// //       setIsAdded(true);
// //     } else {
// //       setIsAdded(false);
// //     }
// //   }, [cartItems]);

// //   return (
// //     <View style={styles.card}>
// //       <Image style={styles.image} source={{ uri: item.image }} />
// //       <Text style={styles.productName}>{item.product_name}</Text>
// //       <Text style={styles.price}>${item.price}</Text>
// //       {/* <Text style={styles.description}>{item.description}</Text> */}

// //       {isAdded ? 
// //         <Button title="Remove from Cart" onPress={() => handleRemoveFromCart(item)} />
// //       : 
// //         <Button title="Add to Cart" color="black" onPress={() => handleAddToCart(item)} />
// //       }
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   card: {
// //     backgroundColor: '#fff',
// //     borderRadius: 10,
// //     shadowColor: '#000',
// //     shadowOpacity: 0.1,
// //     shadowRadius: 5,
// //     padding: 20,
// //     marginBottom: 20,
// //     marginHorizontal: 10,
// //     alignItems: 'center',
// //     borderBottomColor: 'green',
// //     borderBottomWidth: 2,
// //   },
// //   image: {
// //     width: 180,
// //     height: 180,
// //     resizeMode: 'contain', // Ensures the image scales within the box without distortion
// //     marginBottom: 10,
// //   },
// //   productName: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     color: '#333',
// //     marginBottom: 5,
// //   },
// //   price: {
// //     fontSize: 18,
// //     color: '#777',
// //     marginBottom: 10,
// //   },
// //   description: {
// //     fontSize: 14,
// //     color: '#555',
// //     textAlign: 'center',
// //     marginBottom: 15,
// //   },
// // });


// //22
// import { StyleSheet, Text, View, Image, Button } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import { addToCart, removeFromCart } from './redux/actions';
// import { useDispatch, useSelector } from 'react-redux';

// export default function Product(props) {
//     const item = props.item;
//     const dispatch = useDispatch();
//     const cartItems = useSelector((state) => state.reducer.items); // Access items correctly
//     const [isAdded, setIsAdded] = useState(false);

//     const handleAddToCart = (item) => {
//         dispatch(addToCart(item));
//     };

//     const handleRemoveFromCart = (item) => {
//         dispatch(removeFromCart(item._id));
//     };

//     useEffect(() => {
//         const result = cartItems.filter((element) => element._id === item._id);
//         setIsAdded(result.length > 0); // Update the isAdded state
//     }, [cartItems]);

//     return (
//         <View style={styles.card}>
//             <Image style={styles.image} source={{ uri: item.image }} />
//             <Text style={styles.productName}>{item.product_name}</Text>
//             <Text style={styles.price}>${item.price}</Text>

//             {isAdded ? (
//                 <Button title="Remove from Cart" onPress={() => handleRemoveFromCart(item)} />
//             ) : (
//                 <Button title="Add to Cart" color="black" onPress={() => handleAddToCart(item)} />
//             )}
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     card: {
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOpacity: 0.1,
//         shadowRadius: 5,
//         padding: 20,
//         marginBottom: 20,
//         marginHorizontal: 10,
//         alignItems: 'center',
//         borderBottomColor: 'green',
//         borderBottomWidth: 2,
//     },
//     image: {
//         width: 180,
//         height: 180,
//         resizeMode: 'contain',
//         marginBottom: 10,
//     },
//     productName: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#333',
//         marginBottom: 5,
//     },
//     price: {
//         fontSize: 18,
//         color: '#777',
//         marginBottom: 10,
//     },
// });


//33
// import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

// export default function Product(props) {
//     const item = props.item;
//     const [isAdded, setIsAdded] = useState(false);

//     const userId = props.userId;
//     console.log('from product.js: userID', userId);

//     useEffect(() => {
//         const loadCartItems = async () => {
//             try {
//                 const cartData = await AsyncStorage.getItem('cartItems');
//                 const cartItems = cartData ? JSON.parse(cartData) : [];
//                 const itemInCart = cartItems.find((element) => element.productId === item._id);
//                 setIsAdded(!!itemInCart);
//             } catch (error) {
//                 console.error('Error loading cart items:', error);
//             }
//         };

//         loadCartItems();
//     }, [item._id]);

//     const handleAddToCart = async () => {
//         try {
//             console.log(item._id);
//             console.log(item.product_name);
//             console.log(item.price);
//             console.log(item.image);
//             const newCartItem = {
//                 userId,
//                 productId: item._id,
//                 productName: item.product_name,
//                 price: item.price,
//                 quantity: 1,
//                 image: item.image ||'data:image/png;base64,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'
//             };

//             const response = await fetch('http://192.168.1.27:5000/api/cart', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(newCartItem),
//             });

//             if (response.ok) {
//                 const cartData = await AsyncStorage.getItem('cartItems');
//                 const cartItems = cartData ? JSON.parse(cartData) : [];
//                 cartItems.push(newCartItem);
//                 await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));

//                 setIsAdded(true);
//                 Alert.alert('Success', 'Item added to cart');
//             } else {
//                 throw new Error('Failed to add item to cart');
//             }
//         } catch (error) {
//             console.error('Error adding item to cart:', error);
//             Alert.alert('Error', 'Failed to add item to cart');
//         }
//     };

//     return (
//         <View style={styles.card}>
//             <View style={styles.imageContainer}>
//                 <Image style={styles.image} source={{ uri: item.image|| "data:image/png;base64,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"}} />
//                 <View style={styles.ratingContainer}>
//                     <Icon name="star" size={20} color="#FFD700" style={styles.starIcon} />
//                     <Text style={styles.ratingText}>{item.rating}</Text>
//                 </View>

//             </View>
//             <Text style={styles.productName}>{item.product_name}</Text>
//             <Text style={styles.price}>${item.price}</Text>

//             {/* {isAdded ? (
//                 <Button title="Remove from Cart" onPress={handleRemoveFromCart} />
//             ) : ( */}
//                 <Button title="Add to Cart" color="black" onPress={handleAddToCart} />
//             {/* )} */}
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     card: {
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOpacity: 0.1,
//         shadowRadius: 5,
//         padding: 20,
//         marginBottom: 20,
//         marginHorizontal: 10,
//         alignItems: 'center',
//         borderBottomColor: 'green',
//         borderBottomWidth: 2,
//     },
//     imageContainer: {
//         position: 'relative', // This will make the rating position relative to the image
//     },
//     image: {
//         width: 180,
//         height: 180,
//         resizeMode: 'contain',
//         marginBottom: 10,
//     },
//     ratingContainer: {
//         position: 'absolute',
//         bottom: 10,
//         left: 10,
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     starIcon: {
//         marginRight: 5,
//     },
//     ratingText: {
//         fontSize: 16,
//         color: '#333',
//     },
//     productName: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#333',
//         marginBottom: 5,
//     },
//     price: {
//         fontSize: 18,
//         color: '#777',
//         marginBottom: 10,
//     },
// });



import { StyleSheet, Text, View, Image, Button, Alert, Modal, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Product(props) {
    const item = props.item;
    const [isAdded, setIsAdded] = useState(false);
    const [isReviewsVisible, setIsReviewsVisible] = useState(false);
    const [reviews, setReviews] = useState([]); // State for storing reviews
    const userId = props.userId;

    useEffect(() => {
        const loadCartItems = async () => {
            try {
                const cartData = await AsyncStorage.getItem('cartItems');
                const cartItems = cartData ? JSON.parse(cartData) : [];
                const itemInCart = cartItems.find((element) => element.productId === item._id);
                setIsAdded(!!itemInCart);
            } catch (error) {
                console.error('Error loading cart items:', error);
            }
        };

        loadCartItems();
    }, [item._id]);

    const handleAddToCart = async () => {
        try {
            const newCartItem = {
                userId,
                productId: item._id,
                productName: item.product_name,
                price: item.price,
                quantity: 1,
                image: item.image || 'default_image_url',
            };

            const response = await fetch('http://192.168.1.27:5000/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCartItem),
            });

            if (response.ok) {
                const cartData = await AsyncStorage.getItem('cartItems');
                const cartItems = cartData ? JSON.parse(cartData) : [];
                cartItems.push(newCartItem);
                await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));

                setIsAdded(true);
                Alert.alert('Success', 'Item added to cart');
            } else {
                throw new Error('Failed to add item to cart');
            }
        } catch (error) {
            console.error('Error adding item to cart:', error);
            Alert.alert('Error', 'Failed to add item to cart');
        }
    };

    const fetchReviews = async () => {
        try {
            const response = await fetch(`http://192.168.1.27:5000/api/products/${item._id}`);  // Fetch product with reviews populated
            const product = await response.json();
            console.log(product);
            setReviews(product.reviews); // Set reviews directly from the fetched product data
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    const toggleReviews = () => {
        if (!isReviewsVisible) {
            fetchReviews(); // Fetch reviews only when opening the modal
        }
        setIsReviewsVisible(!isReviewsVisible);
    };

    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: item.image || 'default_image_url' }} />
                <View style={styles.ratingContainer}>
                    <Icon name="star" size={20} color="#FFD700" style={styles.starIcon} />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
                <TouchableOpacity onPress={toggleReviews} style={styles.commentIconContainer}>
                    <Icon name="comments" size={20} color="#333" />
                </TouchableOpacity>
            </View>
            <Text style={styles.productName}>{item.product_name}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <TouchableOpacity
                style={styles.addToCartButton}
                onPress={handleAddToCart}>
                <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>

            {/* Modal to display reviews */}
            <Modal visible={isReviewsVisible} transparent animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Reviews</Text>

                        {reviews.length === 0 ? (
                            <Text style={styles.noReviewsText}>No reviews available</Text>
                        ) : (
                            <FlatList
                                data={reviews}  // Directly pass the reviews array as the data prop
                                renderItem={({ item, index }) => (
                                    <View key={item._id || index} style={styles.reviewContainer}>
                                        <Text style={styles.reviewerName}>User: {item.user_id.user_name}</Text>
                                        <Text style={styles.reviewText}>{item.review_text}</Text>
                                        <View style={styles.starsContainer}>
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <Icon
                                                    key={i}
                                                    name="star"
                                                    size={20}
                                                    color={i < item.rating ? "#FFD700" : "#ccc"}
                                                />
                                            ))}
                                        </View>
                                    </View>
                                )}
                                keyExtractor={(item, index) => item._id || index.toString()}  // Use keyExtractor for unique keys
                            />
                        )}
                        <Button title="Close" onPress={toggleReviews} color="green" />
                    </View>
                </View>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        padding: 10,
        marginBottom: 20,
        marginHorizontal: 10,
        alignItems: 'center',
        borderBottomColor: 'green',
        borderBottomWidth: 2,
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: 180,
        height: 180,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    ratingContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    starIcon: {
        marginRight: 5,
    },
    ratingText: {
        fontSize: 16,
        color: '#333',
    },
    commentIconContainer: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    price: {
        fontSize: 18,
        color: '#777',
        marginBottom: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        height: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'green'
    },
    reviewContainer: {
        marginBottom: 10,
    },
    reviewerName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    reviewText: {
        fontSize: 16,
        color: '#333',
        // marginLeft: 5,
    },
    starsContainer: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    noReviewsText: {
        flex: 1,
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginTop: 20,
    },
    addToCartButton: {
        borderWidth:1.5,
        borderColor:'green',
        backgroundColor: 'white',  // Green background
        borderRadius: 10,          // Rounded corners
        paddingVertical: 10,       // Vertical padding
        paddingHorizontal: 20,     // Horizontal padding
        alignItems: 'center',      // Center the text inside the button
        justifyContent: 'center',  // Center the text vertically
        marginTop: 10,             // Margin from other elements
    },
    
    addToCartText: {
        color: 'black',             // White text color
        fontSize: 16,              // Text size
        fontWeight: 'bold',        // Bold text
    }
    

});
