
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Modal, TextInput, Alert, TouchableOpacity, ScrollView } from 'react-native';

const OrdersScreen = ({ userId }) => {
    const [orders, setOrders] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(`http://192.168.1.27:5000/api/orders/${userId}`);
                const result = await response.json();
                if (response.ok) {
                    setOrders(result.orders);
                }
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, [userId]);

    const openReviewModal = (productId) => {
        setSelectedProductId(productId);
        setModalVisible(true);
    };

    const closeReviewModal = () => {
        setModalVisible(false);
        setRating(0);
        setReviewText('');
    };

    const handleReviewSubmit = async () => {
        if (rating === 0 || !reviewText) {
            Alert.alert("Error", "Please select a rating and enter a review");
            return;
        }

        try {
            const response = await fetch(`http://192.168.1.27:5000/api/reviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    product_id: selectedProductId,
                    user_id: userId,
                    rating,
                    review_text: reviewText,
                }),
            });

            if (response.ok) {
                Alert.alert("Success", "Review added successfully");
                closeReviewModal();
            } else {
                Alert.alert("Error", "Failed to add review");
            }
        } catch (error) {
            console.error("Error submitting review:", error);
            Alert.alert("Error", "Something went wrong");
        }
    };

    const renderStarInput = () => (
        <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity key={star} onPress={() => setRating(star)}>
                    <Text style={star <= rating ? styles.filledStar : styles.emptyStar}>★</Text>
                </TouchableOpacity>
            ))}
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>My Orders</Text>
            <FlatList
                data={orders}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.orderContainer}>
                        <View style={styles.orderInfo}>
                            <Text style={styles.orderId}>Order ID: {item._id}</Text>
                            <Text style={styles.orderStatus}>Status: {item.status}</Text>
                            <Text style={styles.orderDate}>Date: {new Date(item.createdAt).toLocaleDateString()}</Text>
                        </View>
                        <Text style={styles.orderAmount}>Total: ₹{item.totalAmount.toFixed(2)}</Text>
                        {item.items.map((orderItem, index) => (
                            <View key={index} style={styles.productContainer}>
                                <Text style={styles.productNameContainer}>
                                    <Text style={styles.productName}>{orderItem.product.product_name}</Text>
                                </Text>
                                <Text style={styles.productPrice}>₹{orderItem.product.price}</Text>
                                <TouchableOpacity
                                    style={styles.reviewButton}
                                    onPress={() => openReviewModal(orderItem.product._id)}
                                >
                                    <Text style={styles.reviewButtonText}>Add Review</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                )}
            />
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeReviewModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Add Your Review</Text>
                        {renderStarInput()}
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Write your review"
                            multiline
                            numberOfLines={4}
                            value={reviewText}
                            onChangeText={setReviewText}
                        />
                        <TouchableOpacity style={styles.submitButton} onPress={handleReviewSubmit}>
                            <Text style={styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton} onPress={closeReviewModal}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6',
        padding: 15,
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#2F4F4F',
        textAlign: 'center',
        marginVertical: 8,
    },
    orderContainer: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        borderLeftWidth: 4,
        borderLeftColor: '#2F4F4F',
    },
    orderInfo: {
        marginBottom: 8,
    },
    orderId: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    orderStatus: {
        fontSize: 15,
        color: '#888',
    },
    orderDate: {
        fontSize: 14,
        color: '#888',
    },
    orderAmount: {
        fontSize: 17,
        fontWeight: '700',
        color: '#333',
        marginVertical: 10,
    },
    productContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
    },
    productNameContainer:{
      flex:1,

    },
    productName: {
        fontSize: 15,
        fontWeight: '500',
        color: '#444',
    },
    productPrice: {
        fontSize: 14,
        color: '#666',
        paddingRight:30
    },
    reviewButton: {
        backgroundColor: '#2F4F4F',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 5,
    },
    reviewButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '85%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#2F4F4F',
        textAlign: 'center',
    },
    input: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#fafafa',
        marginBottom: 10,
    },
    textArea: {
        height: 80,
        textAlignVertical: 'top',
    },
    starsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    filledStar: {
        color: 'gold',
        fontSize: 30,
    },
    emptyStar: {
        color: '#ccc',
        fontSize: 30,
    },
    submitButton: {
        backgroundColor: '#2F4F4F',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 5,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cancelButton: {
        backgroundColor: '#ff5c5c',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 5,
    },
    cancelButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default OrdersScreen;
