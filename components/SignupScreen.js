import React, { useState } from 'react';
import { Alert, View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Btn from './Btn';
import Backg from './Backg';
import Pfield from './Pfield';
import { green } from './Constans';
import CustomAlert from './CustomAlert'; // Import your custom alert

export default function Psignup(props) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  
  // State for controlling custom alert visibility
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertIsPositive, setAlertIsPositive] = useState(true);

  // Validation for each field
  const validateFields = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/g;

    // Full name validation
    if (userName.length < 4) {
      newErrors.userName = 'Full name must be at least 4 characters long.';
    }

    // Email validation
    if (!emailPattern.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Phone number validation
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      newErrors.phoneNumber = 'Contact number must be 10 digits.';
    }

    // Password validation
    if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long.';
    } else if (!specialCharPattern.test(password)) {
      newErrors.password = 'Password must contain at least one special character.';
    }

    // Confirm password validation with trimmed values
    if (password.trim() !== confirmPassword.trim()) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle signup
  const handleSignup = async () => {
    // Perform validation
    if (!validateFields()) return;
    try {
      const response = await axios.post('http://192.168.1.27:5000/api/users/register', {
        user_name: userName,
        phone_number: phoneNumber,
        email,
        password,
        confirmPassword,
      });

      // On successful signup
      setAlertTitle('Signup Successful');
      setAlertMessage(response.data.message);
      setAlertIsPositive(true);
      setAlertVisible(true); // Show success alert
      console.log("Navigating to login screen...");
      props.navigation.navigate('Plogin'); // Navigate to login screen on success
    } catch (error) {
      // On error during signup
      setAlertTitle('Signup Failed');
      setAlertMessage(error.response ? error.response.data.message : error.message);
      setAlertIsPositive(false);
      setAlertVisible(true); // Show error alert
    }
  };

  // Close the alert
  const closeAlert = () => {
    setAlertVisible(false);
  };

  return (
    <Backg>
      <View style={{ alignItems: 'center', width: 460 }}>
        <Text style={{ color: 'black', fontSize: 60, fontWeight: 'bold', marginVertical: 2 }}>
          Signup
        </Text>
        <View style={{ backgroundColor: 'white', height: 800, width: 460, borderTopLeftRadius: 120, paddingTop: 50, alignItems: 'center' }}>
          <Text style={{ color: 'grey', fontSize: 19, fontWeight: 'bold', marginBottom: 25 }}>
            Create a new Account
          </Text>

          {/* Full Name Field */}
          <Pfield
            placeholder='Full Name'
            value={userName}
            onChangeText={(text) => setUserName(text)}
          />
          {errors.userName && <Text style={styles.errorText}>{errors.userName}</Text>}

          {/* Email Field */}
          <Pfield
            placeholder='Email'
            keyboardType='email-address'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          {/* Contact Number Field */}
          <Pfield
            placeholder='Contact Number'
            keyboardType='number-pad'
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
          {errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}

          {/* Password Field */}
          <Pfield
            placeholder='Password'
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

          {/* Confirm Password Field */}
          <Pfield
            placeholder='Confirm Password'
            secureTextEntry
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

          {/* Terms and Conditions */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', width: '80%', marginBottom: 20 }}>
            <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 16 }}>
              By Signing in, you agree to our{' '}
            </Text>
            <Text style={{ color: green, fontWeight: 'bold', fontSize: 16 }}>Terms & Conditions</Text>
            <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 16 }}> and </Text>
            <Text style={{ color: green, fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>Privacy Policy</Text>
          </View>

          {/* Sign Up Button */}
          <Btn textColor='white' bgColor={green} btnLabel='SignUp' Press={handleSignup} />

          {/* Already have an Account? */}
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Already have an Account? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Plogin')}>
              <Text style={{ color: green, fontWeight: 'bold', fontSize: 16 }}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Custom Alert */}
      <CustomAlert 
        visible={alertVisible} 
        onClose={closeAlert} 
        title={alertTitle} 
        message={alertMessage} 
        isPositive={alertIsPositive} 
      />
    </Backg>
  );
}

const styles = {
  errorText: {
    color: 'red',
    fontSize: 12,
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginBottom: 5,
    marginTop: 2,
  },
};
