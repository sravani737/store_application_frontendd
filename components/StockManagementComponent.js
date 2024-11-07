import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assuming you have installed react-native-vector-icons
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AddProductScreen from './AddProductScreen';  // Import your AddProductScreen
import DeleteProductScreen from './DeleteProductScreen';
import ViewStockLevelsScreen from './ViewStockLevelsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
 
      <Stack.Navigator initialRouteName="StockManagement">
        <Stack.Screen name="StockManagement" component={StockManagement} />
        <Stack.Screen name="AddProductScreen" component={AddProductScreen} />
        <Stack.Screen name="ViewStockLevelsScreen" component={ViewStockLevelsScreen} />
        <Stack.Screen name="DeleteProductScreen" component={DeleteProductScreen} />
      </Stack.Navigator>
  
  );
}

function StockManagement({navigation}) {
  const handleAddStock = () => {
    navigation.navigate('AddProductScreen');
  };

  const handleEditStock = () => {
    Alert.alert("Stock Management", "coming Soon");
  };

  const handleRemoveStock = () => {
    navigation.navigate('DeleteProductScreen');
  };

  const handleViewStock = () => {
    navigation.navigate('ViewStockLevelsScreen');
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Stock Management</Text> */}

      <TouchableOpacity style={styles.button} onPress={handleAddStock}>
        <Icon name="add-circle-outline" size={25} color="#000000" />
        <Text style={styles.buttonText}>Add New Stock</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleEditStock}>
        <Icon name="create-outline" size={25} color="#000000" />
        <Text style={styles.buttonText}>Edit Stock</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleRemoveStock}>
        <Icon name="trash-outline" size={25} color="#000000" />
        <Text style={styles.buttonText}>Remove Stock</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleViewStock}>
        <Icon name="eye-outline" size={25} color="#000000" />
        <Text style={styles.buttonText}>View Stock Levels</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
    //backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  button: {
    flexDirection: 'row', // Align icon and text side by side
    alignItems: 'center', // Vertically align icon and text
    justifyContent: 'center', // Center the content horizontally
    backgroundColor: 'green',
    padding: 15,
    marginVertical: 5, // Space between buttons (3-5 units)
    borderRadius: 10, // Rounded button shape
    borderColor: 'black',
    borderWidth: 1.5,
    elevation: 2, // Adds a subtle shadow for depth
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10, // Space between icon and text
  },
});
