// ReviewForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReviewForm = ({ productId, fetchReviews }) => {
  const [rating, setRating] = useState('');
  const [reviewText, setReviewText] = useState('');

  const submitReview = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.post(
        `http://192.168.1.27:5000/api/reviews`,
        { product_id: productId, rating: parseFloat(rating), review_text: reviewText },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      Alert.alert('Success', 'Review submitted successfully');
      setRating('');
      setReviewText('');
      fetchReviews(); // Refresh reviews after adding
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to submit review');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Rating (1-5)"
        keyboardType="numeric"
        value={rating}
        onChangeText={setRating}
      />
      <TextInput
        placeholder="Review Text"
        value={reviewText}
        onChangeText={setReviewText}
      />
      <Button title="Submit Review" onPress={submitReview} />
    </View>
  );
};

export default ReviewForm;
