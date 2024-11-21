import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Backg from './Backg';
import { green } from './Constans';
import Pfield from './Pfield';
import Btn from './Btn';
import AsyncStorage from '@react-native-async-storage/async-storage'; // To store the login token
import CustomAlert from './CustomAlert'; // Import the CustomAlert component

export default function Plogin(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(''); // State to hold email error message
  const [passwordError, setPasswordError] = useState(''); // State to hold password error message

  // States for custom alert
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertIsPositive, setAlertIsPositive] = useState(true);

  // Function to show the custom alert with title, message, and type
  const showAlert = (title, message, positive = true) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setAlertIsPositive(positive);
    setAlertVisible(true);
  };

  const handleLogin = async () => {
    // Clear previous error messages
    setEmailError('');
    setPasswordError('');

    if (!email || !password) {
      if (!email) setEmailError('Email is required');
      if (!password) setPasswordError('Password is required');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://192.168.1.27:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json(); // Ensure that the response body is parsed as JSON

      console.log("Data:", data); // Log the parsed data

      // Handle token and user info only if the login is successful
      if (data.token) {
        // Store token or user info in AsyncStorage
        await AsyncStorage.setItem('userToken', data.token);
        console.log("Token stored successfully.");

        showAlert('Success', "Logged in Successfully", true);

        // Navigate based on user role
        setTimeout(() => {
          if (data.user && data.user.role_name === 'admin') {
            props.navigation.navigate('AdminDashboard');
          } else {
            props.navigation.navigate('Main', { userId: data.user._id });
          }
        }, 1500);
      } else {
        // If login fails, set error message for both fields
        if (data.message.includes("Password doesn’t match")) {
          setPasswordError(data.message); // Display password error
        } else if (data.message.includes("No user exists with this email ID")) {
          setEmailError(data.message); // Display email error
        } else {
          showAlert("Error", data.message || "Something went wrong", false);
        }
      }
    } catch (error) {
      console.log("Login Error:", error);
      showAlert("Error", "Something went wrong. Please try again later.", false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Backg>
      <View style={{ alignItems: 'center', width: 460 }}>
        <Text style={{
          color: 'black',
          fontSize: 60, fontWeight: 'bold',
          marginVertical: 2
        }}>Login</Text>
        <View style={{
          backgroundColor: 'white',
          height: 800, width: 460,
          borderTopLeftRadius: 130, paddingTop: 80, alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 40, color: green,
            fontWeight: 'bold'
          }}>
            Welcome Back
          </Text>
          <Text style={{
            color: 'grey', fontSize: 19,
            fontWeight: 'bold', marginBottom: 25
          }}>Login to your account</Text>

          {/* Email Field */}
          <Pfield
            placeholder='Email'
            keyboardType={'email-address'}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          {emailError && <Text style={styles.ErrorText}>{emailError}</Text>} 

          {/* Password Field */}
          <Pfield
            placeholder='Password'
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          {passwordError && <Text style={styles.ErrorText}>{passwordError}</Text>} 

          <View style={{
            alignItems: 'flex-end', width: '78%',
            paddingRight: 16, marginBottom: 200
          }}>
            {/* <Text style={{ color: green, fontWeight: 'bold', fontSize: 16 }}>Forgot Password ?</Text> */}
          </View>

          <Btn
            textColor='white'
            bgColor={green}
            btnLabel={loading ? 'Loading...' : 'Login'}
            Press={handleLogin}
          />

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Don't have an Account ?</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Psignup')}>
              <Text style={{ color: green, fontWeight: 'bold', fontSize: 16 }}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Custom Alert for Login Success or Failure */}
      <CustomAlert
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
        title={alertTitle}
        message={alertMessage}
        isPositive={alertIsPositive}
      />
    </Backg>
  );
}

const styles = StyleSheet.create({
  ErrorText: {
    color: 'red',
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 50, 
  }
});
