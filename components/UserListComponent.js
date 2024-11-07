import { useNavigation } from '@react-navigation/native'; // Assuming you're using React Navigation
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'; // For user icon
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserList({ fetchUsers }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch((error) => Alert.alert("Error", error.message))
      .finally(() => setLoading(false));
  }, [fetchUsers]);

  const confirmDeleteUser = (userId) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this user?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", onPress: () => deleteUser(userId), style: "destructive" },
      ],
      { cancelable: true }
    );
  };

  const deleteUser = async (userId) => {
    try {
      let token = await AsyncStorage.getItem('userToken');
      const response = await fetch(`http://192.168.1.27:5000/api/users/${userId}`, {
        method: 'DELETE',
        headers:{
          authorization:`Bearer ${token}`,
        }
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      Alert.alert("Success", "User deleted successfully");
      fetchUsers();
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.userContainer}>
      <View style={styles.userInfoContainer}>
        {/* Add User Icon */}
        <Feather name="user" size={30} color="green" style={styles.userIcon} />
        
        <View style={styles.userDetails}>
          <Text style={styles.userText}>Name: {item.user_name}</Text>
          <Text style={styles.userText}>Email: {item.email}</Text>
          <Text style={styles.userText}>Role: {item.role_name}</Text>
          <Text style={styles.userText}>Phone: {item.phone_number}</Text>
        </View>
      </View>

      {/* Action buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('EditUser', { user: item })}
        >
          <Icon name="pencil" size={20} color="green" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => confirmDeleteUser(item._id)}
        >
          <Icon name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) {
    return <Text>Loading users...</Text>;
  }

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item._id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  userContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,
    borderWidth:1.5,
    borderColor:'green'
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userIcon: {
    marginRight: 15,
  },
  userDetails: {
    flex: 1,
  },
  userText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  deleteButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
