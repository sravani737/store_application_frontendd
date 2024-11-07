// import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
// import React from 'react';

// export default function PaymentScreen({ route, navigation }) {
//   const { totalPrice, cartItems, userId } = route.params;
//   const GST = 20;
//   const finalAmount = totalPrice + GST;

//   const renderCartItem = ({ item }) => {
//     return (
//       <View style={styles.cartItem}>
//         <Image source={{ uri: item.image }} style={styles.image} />
//         <View style={styles.details}>
//           <Text style={styles.itemName}>{item.name}</Text>
//           <Text style={styles.priceText}>Price: ${item.price}</Text>
//           <Text style={styles.quantityText}>Quantity: {item.quantity}</Text>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Order Summary</Text>

//       {/* Render Cart Items */}
//       {cartItems.length > 0 ? (
//         <FlatList
//           data={cartItems}
//           renderItem={renderCartItem}
//           keyExtractor={(item) => item._id} // Assuming each item has a unique _id
//         />
//       ) : (
//         <Text style={styles.emptyCartText}>Your cart is empty.</Text>
//       )}

//       {/* Payment Summary */}
//       <View style={styles.summaryContainer}>
//         <Text style={styles.summaryText}>Total Price: ${totalPrice}</Text>
//         <Text style={styles.summaryText}>GST: ${GST}</Text>
//         <Text style={styles.finalAmountText}>Final Amount: ${finalAmount}</Text>
//       </View>

//       {/* Continue Button */}
//       <TouchableOpacity style={styles.button} onPress={() => {/* Continue to payment logic */}}>
//         <Text style={styles.buttonText}>Continue to Payment</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#F4F4F9',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   cartItem: {
//     flexDirection: 'row',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 10,
//     padding: 16,
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   image: {
//     width: 80,
//     height: 80,
//     borderRadius: 10,
//   },
//   details: {
//     flex: 1,
//     paddingLeft: 16,
//   },
//   itemName: {
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   priceText: {
//     fontSize: 16,
//     color: '#888',
//   },
//   quantityText: {
//     fontSize: 16,
//     color: '#888',
//   },
//   summaryContainer: {
//     backgroundColor: '#FFFFFF',
//     padding: 16,
//     borderRadius: 10,
//     marginVertical: 20,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   summaryText: {
//     fontSize: 18,
//     marginBottom: 8,
//   },
//   finalAmountText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#28A745',
//     marginTop: 10,
//   },
//   button: {
//     backgroundColor: '#28A745',
//     padding: 16,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   emptyCartText: {
//     textAlign: 'center',
//     fontSize: 16,
//     color: '#888',
//   },
// });
