// import React from 'react';
// import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';

// const products = [
//   {
//     id: '1',
//     name: 'Diet Coke Can (Buy 6 @ 15% Off)',
//     quantity: '6 x 300 ml',
//     price: '₹204',
//     originalPrice: '₹240',
//     discount: '36% OFF',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82ug2wsnPPrxYAsAaiEAVGLbDGtjTptr-1w&s',
//   },
//   {
//     id: '2',
//     name: 'Coca Cola (Pack Of 3)',
//     quantity: '3 x 750 ml',
//     price: '₹89',
//     originalPrice: '₹120',
//     discount: '25.83% OFF',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTolhOTb0sD5ne-yZsj8c9ha9WpNfAO52faMdgAlwT4kMrg5hLuBlXOodCcp_5uB6QOukQ&usqp=CAU', // Replace with actual image link
//   },
//   {
//     id: '3',
//     name: 'Thums Up',
//     quantity: '2 ltr',
//     price: '₹75',
//     originalPrice: '₹95',
//     discount: '21.05% OFF',
//     image: 'data:image/jpeg;base64,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', // Replace with actual image link
//   },
// ];

// const CoolDrinksScreen = () => {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Purely Green Sips Section */}
//       <View style={styles.sectionContainer}>
//         <Text style={styles.sectionTitle}>Purely Green Sips</Text>
//         <View style={styles.bannerContainer}>
//           <Image
//             style={styles.bannerImage}
//             source={{ uri: 'https://www.tetley.in/sites/g/files/gfwrlq186/files/Green-Tea-Home-Page_0.jpg' }} // Replace with actual banner image link
//           />
//           <TouchableOpacity style={styles.orderButton}>
//             <Text style={styles.orderButtonText}>Order Now</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Cool Drinks Everyday Section */}
//       <View style={styles.sectionContainer}>
//         <View style={styles.headerContainer}>
//           <Text style={styles.sectionTitle}>Cool Drinks Everyday</Text>
//           <TouchableOpacity>
//             <Text style={styles.viewAll}>View All</Text>
//           </TouchableOpacity>
//         </View>

//         <FlatList
//           horizontal
//           data={products}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View style={styles.productCard}>
//               <View style={styles.discountBadge}>
//                 <Text style={styles.discountText}>{item.discount}</Text>
//               </View>
//               <Image source={{ uri: item.image }} style={styles.productImage} />
//               <Text style={styles.productName}>{item.name}</Text>
//               <Text style={styles.productQuantity}>{item.quantity}</Text>
//               <Text style={styles.productPrice}>{item.price}</Text>
//               <Text style={styles.originalPrice}>{item.originalPrice}</Text>
//             </View>
//           )}
//           showsHorizontalScrollIndicator={false}
//         />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   sectionContainer: {
//     marginVertical: 10,
//     paddingHorizontal: 5,
//   },
//   bannerContainer: {
//     position: 'relative',
//     marginTop: 10,
//   },
//   bannerImage: {
//     width: '100%',
//     height: 150,
//     borderRadius: 10,
//     resizeMode: 'cover',
//   },
//   orderButton: {
//     position: 'absolute',
//     bottom: 10,
//     left: 20,
//     backgroundColor: '#000',
//     paddingVertical: 5,
//     paddingHorizontal: 15,
//     borderRadius: 20,
//   },
//   orderButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   viewAll: {
//     fontSize: 14,
//     color: '#0066cc',
//   },
//   productCard: {
//     width: 150,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     marginHorizontal: 8,
//     padding: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     elevation: 2,
//   },
//   discountBadge: {
//     position: 'absolute',
//     backgroundColor: '#ffd700',
//     paddingHorizontal: 5,
//     paddingVertical: 5,
//     top: 5,
//     left: 5,
//     borderRadius: 5,
//   },
//   discountText: {
//     fontSize: 15,
//     fontWeight: 'bold',
//   },
//   productImage: {
//     height: 95,
//     resizeMode: 'contain',
//     marginVertical: 10,
//   },
//   productName: {
//     fontSize: 14,
//     fontWeight: '600',
//     marginVertical: 5,
//   },
//   productQuantity: {
//     fontSize: 12,
//     color: '#777',
//   },
//   productPrice: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 5,
//   },
//   originalPrice: {
//     fontSize: 12,
//     textDecorationLine: 'line-through',
//     color: '#999',
//   },
// });

// export default CoolDrinksScreen;



import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const products = [
    {
        id: '1',
        name: 'Diet Coke Can (Buy 6 @ 15% Off)',
        quantity: '6 x 300 ml',
        price: '₹204',
        originalPrice: '₹240',
        discount: '36% OFF',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82ug2wsnPPrxYAsAaiEAVGLbDGtjTptr-1w&s',
    },
    {
        id: '2',
        name: 'Coca Cola (Pack Of 3)',
        quantity: '3 x 750 ml',
        price: '₹89',
        originalPrice: '₹120',
        discount: '25.83% OFF',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTolhOTb0sD5ne-yZsj8c9ha9WpNfAO52faMdgAlwT4kMrg5hLuBlXOodCcp_5uB6QOukQ&usqp=CAU',
    },
    {
        id: '3',
        name: 'Thums Up',
        quantity: '2 ltr',
        price: '₹75',
        originalPrice: '₹95',
        discount: '21.05% OFF',
        image: 'data:image/jpeg;base64,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',
    },
];

const ProductList = () => {
    return (
        <ScrollView>
            {/* Purely Green Sips Section */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Purely Green Sips</Text>
                <View style={styles.bannerContainer}>
                    <Image
                        style={styles.bannerImage}
                        source={{ uri: 'https://www.tetley.in/sites/g/files/gfwrlq186/files/Green-Tea-Home-Page_0.jpg' }} // Replace with actual banner image link
                    />
                    <TouchableOpacity style={styles.orderButton}>
                        <Text style={styles.orderButtonText}>Order Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.productContainer}>
                        <View style={styles.imageContainer}>
                            <View style={styles.discountBadge}>
                                <Text style={styles.discountText}>{item.discount}</Text>
                            </View>
                            <Image source={{ uri: item.image }} style={styles.image} />
                        </View>
                        <View style={styles.productDetails}>
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.productQuantity}>{item.quantity}</Text>
                            <View style={styles.priceContainer}>
                                <Text style={styles.productPrice}>{item.price}</Text>
                                <Text style={styles.productOriginalPrice}>{item.originalPrice}</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    sectionContainer: {
        marginVertical: 10,
        paddingHorizontal: 5,
    },
    bannerContainer: {
        position: 'relative',
        marginTop: 10,
    },
    bannerImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    orderButton: {
        position: 'absolute',
        bottom: 10,
        left: 20,
        backgroundColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    orderButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    productContainer: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 5,
        elevation: 3,
    },
    imageContainer: {
        marginRight: 10,
        flexDirection: 'column', // Ensures the badge and image stack properly
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    discountBadge: {
        backgroundColor: 'red',
        paddingVertical: 3,
        paddingHorizontal: 5,
        borderRadius: 5,
        alignSelf: 'flex-start', // Aligns the badge to the top-left of the product container
        marginBottom: 5, // Creates space between the badge and the image
    },
    discountText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    productDetails: {
        flex: 1,
        justifyContent: 'center',
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    productQuantity: {
        fontSize: 14,
        color: '#888',
        marginVertical: 5,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginRight: 10,
    },
    productOriginalPrice: {
        fontSize: 14,
        color: '#888',
        textDecorationLine: 'line-through',
    },
});

export default ProductList;

