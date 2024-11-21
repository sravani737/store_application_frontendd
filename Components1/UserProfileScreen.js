import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Toast from 'react-native-toast-message'; // Import the Toast library
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserList = ({ navigation, userId }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false); // Toggle edit mode

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log(userId);
        let token = await AsyncStorage.getItem('userToken');
        const response = await fetch(`http://192.168.1.27:5000/api/users/${userId}`,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        });
        const data = await response.json();

        if (response.ok) {
          setUserName(data.user_name);
          setEmail(data.email);
          setPhoneNumber(data.phone_number);
          setLoading(false);
        } else {
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: data.message || 'Failed to fetch user data',
          });
          setLoading(false);
        }
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Unable to fetch user data',
        });
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleUpdate = async () => {
    try {
      let token = await AsyncStorage.getItem('userToken');
      console.log('----------------------------------')
      console.log('updating user details for user:'+userId);
      console.log('----------------------------------')
      const response = await fetch(`http://192.168.1.27:5000/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
       
           Authorization:`Bearer ${token}`
          
        },
        body: JSON.stringify({ user_name: userName, email, phone_number: phoneNumber }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('----------------------------------')
      console.log('updatated user details for user:'+userId);
      console.log('----------------------------------')
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Profile updated successfully!',
        });
        setIsEditing(false); // Exit edit mode after successful update
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: data.message || 'Failed to update user details',
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Unable to update user details',
      });
    }
  };

  const handleLogout = () => {
    navigation.navigate('Plogin');
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <Icon name="user-circle" size={70} color="white" />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.email}>{email}</Text>
            <Text style={styles.phoneNumber}>{phoneNumber}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => setIsEditing(!isEditing)} style={styles.editIcon}>
          <Icon name="pencil" size={25} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Editable Form */}
      {isEditing && (
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={userName}
            onChangeText={setUserName}
            placeholder="Username"
          />
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Phone Number"
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TouchableOpacity style={styles.button} onPress={handleUpdate}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Actions */}
      {!isEditing && (
        <View style={styles.actionsContainer} >
          <TouchableOpacity style={styles.action} onPress={() => navigation.navigate('Orders',{userId})}>
            <Icon name="list-alt" size={30} color="#2F4F4F" />
            <Text style={styles.actionText}>My Orders</Text>
            <Feather name="chevron-right" size={25} color="green" style={styles.feather} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={() => navigation.navigate('AboutUs',{userId})}>
            <Feather name="info" size={30} color="#2F4F4F" />
            <Text style={styles.actionText}>About us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action}onPress={() => navigation.navigate('Settings',{userId})}>
            <Feather name="tool" size={30} color="#2F4F4F" />
            <Text style={styles.actionText}>Settings</Text>
          </TouchableOpacity>
          {/* Add more options as needed */}
        </View>
      )}

      {/* Logout Button */}
      {!isEditing && (
        <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
        <Icon name="sign-out" size={25} color="#2F4F4F" /> 
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
      )}

      {/* Toast notification component */}
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#2F4F4F',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius:10
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  userInfo: {
    marginLeft: 15,
  },
  userName: {
    ffontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  email: {
    fontSize: 16,
    color: 'white',
  },
  phoneNumber: {
    fontSize: 15,
    color: '#fff',
  },
  editIcon: {
    padding: 10,
  },
  form: {
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    borderWidth:1,
    borderRadius:10,
    borderColor:'#2F4F4F',
    marginHorizontal:5

  },
  buttonText: {
    fontSize:16,
    color: '#2F4F4F',
    marginHorizontal:'5%',
  },
  logoutButton: {
    flexDirection:'row',
    backgroundColor: 'white',
    borderWidth:1,
    borderColor:'#2F4F4F',
  },
  actionsContainer: {
    padding: 20,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  actionText: {
    marginLeft: 20,
    fontSize: 16,
    color: '#333',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  feather: {
    marginLeft: 270,
    fontWeight: 'bold',
  },
});

export default UserList;

