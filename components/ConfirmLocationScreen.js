import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons'; // For back button
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios'; // For reverse geocoding
import {addLocation} from './locationApi';
 
const ConfirmLocationScreen = ({route}) => {
  const {location} = route.params;
  const navigation = useNavigation();
  route = useRoute();
  const previousScreen = route.params?.previousScreen;
  console.log('PreviousScreen: '+previousScreen);
 
  const [region, setRegion] = useState({
    latitude: location.latitude,
    longitude: location.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
 
  const [markerLocation, setMarkerLocation] = useState({
    latitude: location.latitude,
    longitude: location.longitude,
  });
 
  const [address, setAddress] = useState(location.name);
  const [loading, setLoading] = useState(false); // Loading state
 
  // Function to handle continuous map drag (smooth marker movement)
  const onRegionChange = region => {
    // Update marker position along with map movement
    setMarkerLocation({
      latitude: region.latitude,
      longitude: region.longitude,
    });
  };
 
  // Function to handle region change complete (fetch address after stop moving)
  const onRegionChangeComplete = async region => {
    setLoading(true); // Start loading
 
    // Fetch the address for the new location (reverse geocoding)
    try {
      const apiKey = 'AIzaSyAfHizK8CCyEyAYTnXJS4KoDPg5d0ipiHA';
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${region.latitude},${region.longitude}&key=${apiKey}`,
      );
      const fullAddress =
        response.data.results[0]?.formatted_address || 'Unknown location';
      setAddress(fullAddress);
    } catch (error) {
      console.error('Error fetching new address:', error);
      setAddress('Unable to fetch address');
    } finally {
      setLoading(false); // End loading
    }
  };
 
  // Function to confirm and add the selected location
  const confirmLocation = async () => {
    try {
      const response = await addLocation({
        latitude: markerLocation.latitude,
        longitude: markerLocation.longitude,
        fullAddress: address,
      });
      // Check if the location already exists in the database
      if (
        response.message ===
        'Location already exists, no need to store it again'
      ) {
        console.log('Location already exists, skipping storage.');
        Alert.alert(
          'Duplicate Location',
          'This location is already saved in your list of addresses.',
        );
      } else {
        console.log('New location stored.');
        Alert.alert('Success', 'Location added successfully');
      }
 
      if(previousScreen === 'BookingForm'){
        navigation.navigate('BookingForm');
      }
      else {
        navigation.goBack();
      }
    } catch (error) {
      console.error('Error adding location:', error);
    }
  };
 
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={25} color="#000" />
      </TouchableOpacity>
 
      {/* Map displaying the selected location */}
      <MapView
        style={styles.map}
        initialRegion={region}
        onRegionChange={onRegionChange} // Update marker position while dragging
        onRegionChangeComplete={onRegionChangeComplete} // Fetch new address after stopping dragging
      >
        <Marker
          coordinate={markerLocation}
          draggable={false} // Marker moves along with the map, no need for dragging
        />
      </MapView>
 
      {/* Location Details and Confirm Button */}
      <View style={styles.infoContainer}>
        {/* Display loader while fetching the address */}
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Text style={styles.addressText}>{address}</Text>
        )}
        {/* Submit button */}
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={confirmLocation}>
          <Text style={styles.confirmButtonText}>Confirm Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  infoContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderTopWidth:1,
    borderColor:'grey',
    borderRadius:1
  },
  addressText: {
    fontSize: 18,
    marginBottom: 10,
    color:'#2F4F4F'
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 1,
    padding: 10,
  },
  confirmButton: {
    backgroundColor: '#2F4F4F',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
 
export default ConfirmLocationScreen;