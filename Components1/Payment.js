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

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const PaymentScreen = ({ navigation, route }) => {
    const { cartItems, totalAmount, userId } = route.params;
    const [gst, setGst] = useState(0);
    const [deliveryCharge, setDeliveryCharge] = useState(50); // Flat delivery charge
    const [grandTotal, setGrandTotal] = useState(0);

    useEffect(() => {
        const gstAmount = totalAmount * 0.04;  // 4% GST
        setGst(gstAmount);
        setGrandTotal(totalAmount + gstAmount + deliveryCharge);
    }, [totalAmount, deliveryCharge]);

    const handlePayment = async () => {
        try {
            console.log(userId + " from payment screen");
            console.log(cartItems);
            // Dummy payment process, replace with actual payment gateway later
            
            const response = await fetch('http://192.168.1.27:5000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cartItems,
                    totalAmount: grandTotal,
                    userId
                }),
            });

            const result = await response.json();
            if (response.ok) {
                Alert.alert('Payment Successful', 'Your order has been placed successfully!');
             
                // Delete cart after successful payment
                const deleteCartResponse = await fetch(`http://192.168.1.27:5000/api/cart/${userId}`, {
                    method: 'DELETE',
                });
    
                if (deleteCartResponse.ok) {
                    console.log('Cart items deleted successfully');
                } else {
                    console.error('Failed to delete cart items');
                }
                 
                navigation.navigate('Orders');
            } else {
                Alert.alert('Payment Failed', result.message);
            }
        } catch (error) {
            console.error('Payment error:', error);
            Alert.alert('Payment Failed', 'Something went wrong with your payment.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Payment Summary</Text>

            <View style={styles.summaryBox}>
                <View style={styles.amountContainer}>
                    <Text style={styles.label}>Total Amount:</Text>
                    <Text style={styles.value}>₹{totalAmount.toFixed(2)}</Text>
                </View>

                <View style={styles.amountContainer}>
                    <Text style={styles.label}>GST (4%):</Text>
                    <Text style={styles.value}>₹{gst.toFixed(2)}</Text>
                </View>

                <View style={styles.amountContainer}>
                    <Text style={styles.label}>Delivery Charges:</Text>
                    <Text style={styles.value}>₹{deliveryCharge.toFixed(2)}</Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.amountContainer}>
                    <Text style={styles.totalLabel}>Grand Total:</Text>
                    <Text style={styles.totalValue}>₹{grandTotal.toFixed(2)}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
                <Text style={styles.buttonText}>Proceed to Payment</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginVertical: 20,
    },
    summaryBox: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        marginVertical: 10,
    },
    amountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        color: '#555',
    },
    value: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        marginVertical: 10,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    totalValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1e8e3e',
    },
    paymentButton: {
        backgroundColor: '#1e8e3e',
        borderRadius: 8,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default PaymentScreen;
