import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import 'react-native-get-random-values';

// import globalStyles from '../../components/BgStyle.js';
 
const SelectLocationScreen = () => {
  const navigation = useNavigation();
  route = useRoute();
//   const previousScreen = route.params?.previousScreen;
//   console.log('PreviousScreen: '+previousScreen);
 
 
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={25} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Select a Location</Text>
      </View>
 
      {/* Custom Search Bar with Location Icon */}
      <GooglePlacesAutocomplete
        placeholder="Search for a location"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          const location = {
            name: data.description,
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
          };
          // Navigate to confirmation screen with location details
          navigation.navigate('ConfirmLocation', {
            location,
            // previousScreen: previousScreen,
          });
        }}
        query={{
          key: 'AIzaSyAfHizK8CCyEyAYTnXJS4KoDPg5d0ipiHA',
          language: 'en',
        }}
        fetchDetails={true}
        styles={{
          textInputContainer: styles.textInputContainer,
          textInput: styles.searchInput,
          listView: styles.listView,
        }}
        // Icon inside search bar
        renderLeftButton={() => (
          <Icon
            name="location-outline"
            size={20}
            color="#000"
            style={styles.locationIcon}
          />
        )}
        renderRow={data => (
          <View style={styles.row}>
            <Icon
              name="location-outline"
              size={20}
              color="#000"
              style={styles.resultIcon}
            />
            <Text style={styles.resultText}>{data.description}</Text>
          </View>
        )}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#000',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#2F4F4F',
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    position: 'relative',
  },
  searchInput: {
    flex: 1,
    paddingLeft: 40,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  locationIcon: {
    position: 'absolute',
    left: 10,
    top: 11,
    zIndex: 1,
    color:'#2F4F4F'
  },
  listView: {
    backgroundColor: 'white',
    maxHeight: 200,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  resultIcon: {
    marginRight: 10,
  },
  resultText: {
    fontSize: 16,
  },
});
 
export default SelectLocationScreen;