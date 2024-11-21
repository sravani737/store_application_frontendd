import axios from 'axios';
const API_URL = 'http://192.168.1.27:5000/api/address';

// Add Location
export const addLocation = async (locationData) => {
  try {
    const userId = await getUserIdFromToken();
    console.log(userId);
    if (!userId) {
      throw new Error('User not authenticated');
    }

    // Attach userId to the request data
    const response = await axios.post(
      `${API_URL}/add`,
      { ...locationData, userId },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Failed to add location. Please try again.'
    );
  }
};


// Get Locations
export const getLocations = async () => {
  try {
    const userId = await getUserIdFromToken();
    console.log(userId);
    if (!userId) {
      throw new Error('User not authenticated');
    }
    const response = await axios.get(`${API_URL}/locations`, {
      params: { userId },
      withCredentials: true,
    });

    if (response.data && Array.isArray(response.data.locations)) {
      if (response.data.locations.length === 0) {
        console.log("No locations found.");
        return [];
      }
      return response.data.locations;
    } else {
      throw new Error("Invalid response format from locations API");
    }
  } catch (error) {
    console.log('Error fetching locations:', error);
    throw new Error(error.response?.data.message || 'Failed to fetch locations.');
  }
};


// Update Location
export const updateLocation = async (locationData) => {
  try {
    const response = await axios.put(`${API_URL}/${locationData.locationId}`, locationData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || 'Failed to update location.');
  }
};


// Delete Location
export const deleteLocation = async (locationId) => {
  try {
    const response = await axios.delete(`${API_URL}/${locationId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || 'Failed to delete location.');
  }
};

import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

export const getUserIdFromToken = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
      console.log('Generated Token:', token);

      const decodedToken = jwtDecode(token);
      return decodedToken.userId; // Assuming the token payload contains `userId`
    }
    return null;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};
