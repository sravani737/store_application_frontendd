import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function EditUser({ route, navigation }) {
  const { user } = route.params;
  const [userName, setUserName] = useState(user.user_name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role_name);
  const [phone, setPhone] = useState(user.phone_number);

  const updateUser = async () => {
    try {
      let token = await AsyncStorage.getItem('userToken');
      const response = await fetch(`http://192.168.1.27:5000/api/users/${user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          authorization:`Bearer ${token}`
        },
        body: JSON.stringify({
          user_name: userName,
          email: email,
          role_name: role,
          phone_number: phone,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update user');
      }

      Alert.alert('Success', 'User updated successfully');
      navigation.goBack(); // Navigate back to the admin dashboard
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit User</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Role"
        value={role}
        onChangeText={setRole}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.updateButton} onPress={updateUser}>
        <Text style={styles.buttonText}>Update User</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  updateButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
