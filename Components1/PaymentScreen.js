// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { useSelector } from 'react-redux';

// export default function Payment({ navigation }) {
//   const { totalAmount } = useSelector((state) => state.cart);
//   const gst = totalAmount * 0.18;
//   const deliveryCharges = 50;
//   const finalAmount = totalAmount + gst + deliveryCharges;

//   const handlePayment = () => {
//     // Simulate a successful payment
//     navigation.navigate('Orders');
//   };

//   return (
//     <View>
//       <Text>Total Amount: ${totalAmount}</Text>
//       <Text>GST (18%): ${gst.toFixed(2)}</Text>
//       <Text>Delivery Charges: ${deliveryCharges}</Text>
//       <Text>Final Amount: ${finalAmount.toFixed(2)}</Text>
//       <Button title="Make Payment" onPress={handlePayment} />
//     </View>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// const PaymentScreen = ({ navigation, route }) => {
//     const { cartItems, totalAmount, userId } = route.params;
//     const [gst, setGst] = useState(0);
//     const [deliveryCharge, setDeliveryCharge] = useState(50); // Flat delivery charge
//     const [grandTotal, setGrandTotal] = useState(0);

//     useEffect(() => {
//         const gstAmount = totalAmount * 0.04;  // 4% GST
//         setGst(gstAmount);
//         setGrandTotal(totalAmount + gstAmount + deliveryCharge);
//     }, [totalAmount, deliveryCharge]);

//     const handlePayment = async () => {
//         try {
//             console.log(userId + " from payment screen");
//             console.log(cartItems);
//             // Dummy payment process, replace with actual payment gateway later
            
//             const response = await fetch('http://192.168.1.27:5000/api/orders', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     cartItems,
//                     totalAmount: grandTotal,
//                     userId
//                 }),
//             });

//             const result = await response.json();
//             if (response.ok) {
//                 Alert.alert('Payment Successful', 'Your order has been placed successfully!');
             
//                 // Delete cart after successful payment
//                 const deleteCartResponse = await fetch(`http://192.168.1.27:5000/api/cart/${userId}`, {
//                     method: 'DELETE',
//                 });
    
//                 if (deleteCartResponse.ok) {
//                     console.log('Cart items deleted successfully');
//                 } else {
//                     console.error('Failed to delete cart items');
//                 }
                 
//                 navigation.navigate('Orders');
//             } else {
//                 Alert.alert('Payment Failed', result.message);
//             }
//         } catch (error) {
//             console.error('Payment error:', error);
//             Alert.alert('Payment Failed', 'Something went wrong with your payment.');
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.header}>Payment Summary</Text>

//             <View style={styles.summaryBox}>
//                 <View style={styles.amountContainer}>
//                     <Text style={styles.label}>Total Amount:</Text>
//                     <Text style={styles.value}>₹{totalAmount.toFixed(2)}</Text>
//                 </View>

//                 <View style={styles.amountContainer}>
//                     <Text style={styles.label}>GST (4%):</Text>
//                     <Text style={styles.value}>₹{gst.toFixed(2)}</Text>
//                 </View>

//                 <View style={styles.amountContainer}>
//                     <Text style={styles.label}>Delivery Charges:</Text>
//                     <Text style={styles.value}>₹{deliveryCharge.toFixed(2)}</Text>
//                 </View>

//                 <View style={styles.divider} />

//                 <View style={styles.amountContainer}>
//                     <Text style={styles.totalLabel}>Grand Total:</Text>
//                     <Text style={styles.totalValue}>₹{grandTotal.toFixed(2)}</Text>
//                 </View>
//             </View>

//             <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
//                 <Text style={styles.buttonText}>Proceed to Payment</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#f8f8f8',
//     },
//     header: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#333',
//         textAlign: 'center',
//         marginVertical: 20,
//     },
//     summaryBox: {
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         padding: 20,
//         elevation: 3,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 5,
//         marginVertical: 10,
//     },
//     amountContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginVertical: 10,
//     },
//     label: {
//         fontSize: 16,
//         color: '#555',
//     },
//     value: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#333',
//     },
//     divider: {
//         borderBottomWidth: 1,
//         borderBottomColor: '#e0e0e0',
//         marginVertical: 10,
//     },
//     totalLabel: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#333',
//     },
//     totalValue: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#1e8e3e',
//     },
//     paymentButton: {
//         backgroundColor: '#1e8e3e',
//         borderRadius: 8,
//         paddingVertical: 15,
//         alignItems: 'center',
//         marginTop: 20,
//     },
//     buttonText: {
//         fontSize: 18,
//         color: '#fff',
//         fontWeight: 'bold',
//     },
// });

// export default PaymentScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ActivityIndicator, Modal, FlatList } from 'react-native';
import axios from 'axios';
import { getLocations } from '../components/locationApi';

const PaymentScreen = ({ navigation, route }) => {
    const { cartItems, totalAmount, userId } = route.params;
    const [gst, setGst] = useState(0);
    const [deliveryCharge, setDeliveryCharge] = useState(50);
    const [grandTotal, setGrandTotal] = useState(0);
    const [userAddress, setUserAddress] = useState(null);
    const [addresses, setAddresses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isProcessing, setIsProcessing] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const fetchUserAddresses = async () => {
            try {
                const gstAmount = totalAmount * 0.04;
                setGst(gstAmount);
                setGrandTotal(totalAmount + gstAmount + deliveryCharge);

                const locations = await getLocations();
                setAddresses(locations || []);
            } catch (error) {
                Alert.alert('Error', 'Failed to fetch addresses. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchUserAddresses();
    }, [totalAmount, deliveryCharge]);

    const handleAddressSelection = (address) => {
        setUserAddress(address);
        setModalVisible(false);
    };

    const handlePayment = async () => {
        if (!userAddress) {
            Alert.alert('Error', 'Please select a delivery address.');
            return;
        }

        setIsProcessing(true);
        try {
            const response = await fetch('http://192.168.1.27:5000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cartItems,
                    totalAmount: grandTotal,
                    userId,
                    address: userAddress.fullAddress,
                }),
            });

            const result = await response.json();
            if (response.ok) {
                Alert.alert('Payment Successful', 'Your order has been placed!');
                await fetch(`http://192.168.1.27:5000/api/cart/${userId}`, { method: 'DELETE' });
                navigation.navigate('ProductWrapper');
            } else {
                Alert.alert('Payment Failed', result.message);
            }
        } catch (error) {
            Alert.alert('Payment Failed', 'An error occurred. Please try again.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Payment Summary</Text>

            {loading ? (
                <ActivityIndicator size="large" color="#6a1b9a" />
            ) : (
                <View style={styles.addressCard}>
                    <Text style={styles.addressLabel}>Delivery Address:</Text>
                    {userAddress ? (
                        <Text style={styles.addressText}>{userAddress.fullAddress}</Text>
                    ) : (
                        <Text style={styles.addressText}>Please select an address</Text>
                    )}
                    <TouchableOpacity style={styles.chooseAddressButton} onPress={() => setModalVisible(true)}>
                        <Text style={styles.chooseAddressText}>Choose Address</Text>
                    </TouchableOpacity>
                </View>
            )}

            <View style={styles.summaryCard}>
                <View style={styles.amountRow}>
                    <Text style={styles.label}>Total Amount:</Text>
                    <Text style={styles.value}>₹{totalAmount.toFixed(2)}</Text>
                </View>

                <View style={styles.amountRow}>
                    <Text style={styles.label}>GST (4%):</Text>
                    <Text style={styles.value}>₹{gst.toFixed(2)}</Text>
                </View>

                <View style={styles.amountRow}>
                    <Text style={styles.label}>Delivery Charges:</Text>
                    <Text style={styles.value}>₹{deliveryCharge.toFixed(2)}</Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.amountRow}>
                    <Text style={styles.totalLabel}>Grand Total:</Text>
                    <Text style={styles.totalValue}>₹{grandTotal.toFixed(2)}</Text>
                </View>
            </View>

            <TouchableOpacity
                style={[styles.paymentButton, isProcessing && styles.disabledButton]}
                onPress={handlePayment}
                disabled={isProcessing}
            >
                {isProcessing ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>Proceed to Payment</Text>
                )}
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.modalHeader}>Select Delivery Address</Text>
                    <FlatList
                        data={addresses}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.addressItem}
                                onPress={() => handleAddressSelection(item)}
                            >
                                <Text style={styles.addressText}>{item.fullAddress}</Text>
                            </TouchableOpacity>
                        )}
                    />
                    <TouchableOpacity style={styles.addAddressButton} onPress={()=>navigation.navigate('SelectLocationScreen')}>
                        <Text style={styles.addAddressText}> + Add New Address</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: 'white' },
    header: { fontSize: 26, fontWeight: '600', textAlign: 'center', marginBottom: 20, color: '#2F4F4F' },
    addressCard: { backgroundColor: '#fff', padding: 20, borderRadius: 12, marginBottom: 15, elevation: 4 },
    addressLabel: { fontSize: 16, color: '#555', fontWeight: '500' },
    addressText: { fontSize: 16, color: '#333', marginTop: 5 },
    chooseAddressButton: { marginTop: 10, backgroundColor: '#2F4F4F', padding: 10, borderRadius: 8, alignItems: 'center' },
    chooseAddressText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
    summaryCard: { backgroundColor: '#fff', padding: 20, borderRadius: 12, elevation: 4, marginVertical: 10 },
    amountRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 },
    label: { fontSize: 16, color: '#444' },
    value: { fontSize: 16, color: '#444' },
    totalLabel: { fontSize: 18, fontWeight: '600', color: 'red' },
    totalValue: { fontSize: 18, fontWeight: '600', color: 'red' },
    divider: { borderBottomColor: '#eee', borderBottomWidth: 1, marginVertical: 10 },
    paymentButton: { backgroundColor: '#2F4F4F', padding: 10, borderRadius: 12, alignItems: 'center', marginTop: 20 },
    disabledButton: { backgroundColor: '#9e9e9e' },
    buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
    modalContainer: { flex: 1, padding: 20, backgroundColor: '#fff' },
    modalHeader: { fontSize: 22, fontWeight: '600', textAlign: 'center', marginBottom: 20, color: 'green' },
    addressItem: { padding: 15, backgroundColor: '#aaaa', marginBottom: 10, borderRadius: 8 },
    addAddressButton: { backgroundColor: 'white', padding: 10, borderRadius: 8, alignItems: 'center', marginTop: 10 },
    addAddressText: { color: 'red', fontWeight: 'bold', fontSize: 16 },
});

export default PaymentScreen;
