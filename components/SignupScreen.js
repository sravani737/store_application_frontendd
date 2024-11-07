// //  import { StyleSheet, TouchableOpacity,} from 'react-native'
// // // import React from 'react'
import Backg from './Backg'
// // // import { green } from './Constans'
// // // import Pfield from './Pfield'
// // // import Btn from './Btn'

// // // export default function Psignup(props) {
// // //   return (
// // //     <Backg>
// // //       <View style={{ alignItems: 'center', width: 460 }}>
// // //         <Text style={{
// // //           color: 'white',
// // //           fontSize: 60, fontWeight: 'bold',
// // //           marginVertical: 2
// // //         }}>Signup</Text>
// // //         <View style={{
// // //           backgroundColor: 'white',
// // //           height: 800, width: 460,
// // //           borderTopLeftRadius: 130, paddingTop: 50, alignItems: 'center'
// // //         }}>
// // //           <Text style={{
// // //             color: 'grey', fontSize: 19,
// // //             fontWeight: 'bold', marginBottom: 25
// // //           }}>Create a new Account</Text>

// // //           <Pfield placeholder='FullName' />
// // //           <Pfield placeholder='Email/UserName' keyboardType={'email-address'} />
// // //           <Pfield placeholder='Contact Number' keyboardType={'number-pad'} />
// // //           <Pfield placeholder='Password' secureTextEntry={true} />
// // //           <Pfield placeholder='Confirm Password' secureTextEntry={true} />

// // //           {/* Terms & Conditions and Privacy Policy Text */}
// // //           <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', width: '80%', marginBottom: 20 }}>
// // //             <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 16 }}>
// // //               By Signing in, you agree to our{' '}
// // //             </Text>
// // //             <Text style={{ color: green, fontWeight: 'bold', fontSize: 16 }}>
// // //               Terms & Conditions
// // //             </Text>
// // //             <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 16 }}> and </Text>
// // //             <Text style={{ color: green, fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>Privacy Policy</Text>
// // //           </View>

// // //           <Btn textColor='white' bgColor={green} btnLabel='SignUp' Press={() => {
// // //             alert('Account Created');
// // //             props.navigation.navigate('Plogin');
// // //           }} />

// // //           {/* Already have an Account */}
// // //           <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
// // //             <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Already have an Account ? </Text>
// // //             <TouchableOpacity onPress={() => props.navigation.navigate('Plogin')}>
// // //               <Text style={{ color: green, fontWeight: 'bold', fontSize: 16 }}>Sign In</Text>
// // //             </TouchableOpacity>
// // //           </View>
// // //         </View>
// // //       </View>
// // //     </Backg>
// // //   )
// // // }

// // // const styles = StyleSheet.create({})
// import React, { useState } from 'react';
// import { Alert, View, Text } from 'react-native';
// import axios from 'axios';
// import Btn from './Btn';
// import Pfield from './Pfield';
// import { green } from './Constans';

// export default function Psignup(props) {
//   const [userName, setUserName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSignup = async () => {
//     if (password !== confirmPassword) {
//       Alert.alert('Error', 'Passwords do not match');
//       return;
//     }

//     try {
//       const response = await axios.post('http://192.168.1.27:5000/api/users/register', {
//         user_name: userName,
//         phone_number: phoneNumber,
//         email,
//         password,
//         confirmPassword,
//       });
//       Alert.alert('Success', response.data.message);
//       props.navigation.navigate('Plogin'); // Navigate to login screen on success
//     } catch (error) {
//       Alert.alert('Error', error.response ? error.response.data.message : error.message);
//     }
//   };

//   return (
//     <Backg>
//       <View style={{ alignItems: 'center', width: 460 }}>
//         <Text style={{ color: 'black', fontSize: 60, fontWeight: 'bold', marginVertical: 2 }}>
//           Signup
//         </Text>
//         <View style={{ backgroundColor: 'white', height: 800, width: 460, borderTopLeftRadius: 130, paddingTop: 50, alignItems: 'center' }}>
//           <Text style={{ color: 'grey', fontSize: 19, fontWeight: 'bold', marginBottom: 25 }}>
//             Create a new Account
//           </Text>

//           <Pfield placeholder='FullName' value={userName} onChangeText={setUserName} />
//           <Pfield placeholder='Email' keyboardType='email-address' value={email} onChangeText={setEmail} />
//           <Pfield placeholder='Contact Number' keyboardType='number-pad' value={phoneNumber} onChangeText={setPhoneNumber} />
//           <Pfield placeholder='Password' secureTextEntry={true} value={password} onChangeText={setPassword} />
//           <Pfield placeholder='Confirm Password' secureTextEntry={true} value={confirmPassword} onChangeText={setConfirmPassword} />

//           <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', width: '80%', marginBottom: 20 }}>
//             <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 16 }}>
//               By Signing in, you agree to our{' '}
//             </Text>
//             <Text style={{ color: green, fontWeight: 'bold', fontSize: 16 }}>
//               Terms & Conditions
//             </Text>
//             <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 16 }}> and </Text>
//             <Text style={{ color: green, fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>Privacy Policy</Text>
//           </View>

//           <Btn textColor='white' bgColor={green} btnLabel='SignUp' Press={handleSignup} />

//           <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
//             <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Already have an Account ? </Text>
//             <TouchableOpacity onPress={() => props.navigation.navigate('Plogin')}>
//               <Text style={{ color: green, fontWeight: 'bold', fontSize: 16 }}>Sign In</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </Backg>
//   );
// }

import React, { useState } from 'react';
import { Alert, View, Text ,TouchableOpacity} from 'react-native';
import axios from 'axios';
import Btn from './Btn';
import Pfield from './Pfield';
import { green } from './Constans';

export default function Psignup(props) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Password validation function
  const validatePassword = (password) => {
    const minLength = 8;
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/g;

    if (password.length < minLength) {
      return 'Password must be at least 8 characters long.';
    }
    if (!specialCharPattern.test(password)) {
      return 'Password must contain at least one special character.';
    }
    return null;
  };

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      Alert.alert('Error', passwordError);
      return;
    }

    try {
      const response = await axios.post('http://192.168.1.27:5000/api/users/register', {
        user_name: userName,
        phone_number: phoneNumber,
        email,
        password,
        confirmPassword,
      });
      Alert.alert('Success', response.data.message);
      props.navigation.navigate('Plogin'); // Navigate to login screen on success
    } catch (error) {
      Alert.alert('Error', error.response ? error.response.data.message : error.message);
    }
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

          <Pfield placeholder='FullName' value={userName} onChangeText={setUserName} />
          <Pfield placeholder='Email' keyboardType='email-address' value={email} onChangeText={setEmail} />
          <Pfield placeholder='Contact Number' keyboardType='number-pad' value={phoneNumber} onChangeText={setPhoneNumber} />
          <Pfield placeholder='Password' secureTextEntry={true} value={password} onChangeText={setPassword} />
          <Pfield placeholder='Confirm Password' secureTextEntry={true} value={confirmPassword} onChangeText={setConfirmPassword} />

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', width: '80%', marginBottom: 20 }}>
            <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 16 }}>
              By Signing in, you agree to our{' '}
            </Text>
            <Text style={{ color: green, fontWeight: 'bold', fontSize: 16 }}>
              Terms & Conditions
            </Text>
            <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 16 }}> and </Text>
            <Text style={{ color: green, fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>Privacy Policy</Text>
          </View>

          <Btn textColor='white' bgColor={green} btnLabel='SignUp' Press={handleSignup} />

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Already have an Account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Plogin')}>
              <Text style={{ color: green, fontWeight: 'bold', fontSize: 16 }}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Backg>
  )
}

// import React, { useState } from 'react';
// import { Alert, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import axios from 'axios';
// import Btn from './Btn';
// import Pfield from './Pfield';
// import { green } from './Constans';
// import { RadioButton } from 'react-native-paper';

// export default function Psignup(props) {
//   const [userName, setUserName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [userType, setUserType] = useState('User'); // User by default
//   const [secretText, setSecretText] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   // Password validation function
//   const validatePassword = (password) => {
//     const minLength = 8;
//     const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/g;

//     if (password.length < minLength) {
//       return 'Password must be at least 8 characters long.';
//     }
//     if (!specialCharPattern.test(password)) {
//       return 'Password must contain at least one special character.';
//     }
//     return null;
//   };

//   const handleSignup = async () => {
//     if (password !== confirmPassword) {
//       Alert.alert('Error', 'Passwords do not match');
//       return;
//     }

//     const passwordError = validatePassword(password);
//     if (passwordError) {
//       Alert.alert('Error', passwordError);
//       return;
//     }

//     if (userType === 'Admin' && secretText !== 'Text1243') {
//       Alert.alert('Invalid Admin Secret Text');
//       return;
//     }

//     try {
//       const response = await axios.post('http://192.168.1.27:5000/api/users/register', {
//         user_name: userName,
//         phone_number: phoneNumber,
//         email,
//         password,
        
//       });

//       Alert.alert('Success', response.data.message);
//       props.navigation.navigate('Plogin'); // Navigate to login screen on success
//     } catch (error) {
//       Alert.alert('Error', error.response ? error.response.data.message : error.message);
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ backgroundColor: 'white' }}>
//       <View style={{ alignItems: 'center', width: 460 }}>
//         <Text style={{ color: 'black', fontSize: 60, fontWeight: 'bold', marginVertical: 2 }}>
//           Signup
//         </Text>
//         <View style={{ backgroundColor: 'white', height: 800, width: 460, borderTopLeftRadius: 130, paddingTop: 50, alignItems: 'center' }}>
//           <Text style={{ color: 'grey', fontSize: 19, fontWeight: 'bold', marginBottom: 25 }}>
//             Create a new Account
//           </Text>

//           {/* Full Name Field */}
//           <Pfield placeholder='FullName' value={userName} onChangeText={setUserName} />

//           {/* Email Field */}
//           <Pfield placeholder='Email' keyboardType='email-address' value={email} onChangeText={setEmail} />

//           {/* Phone Number Field */}
//           <Pfield placeholder='Contact Number' keyboardType='number-pad' value={phoneNumber} onChangeText={setPhoneNumber} />

//           {/* Password Field */}
//           <Pfield placeholder='Password' secureTextEntry={!showPassword} value={password} onChangeText={setPassword} />

//           {/* Confirm Password Field */}
//           <Pfield placeholder='Confirm Password' secureTextEntry={!showPassword} value={confirmPassword} onChangeText={setConfirmPassword} />

//           {/* Toggle Show Password */}
//           <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//             <Text>{showPassword ? 'Hide Password' : 'Show Password'}</Text>
//           </TouchableOpacity>

//           {/* Role Selection */}
//           <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
//             <Text style={{ fontSize: 16 }}>Sign up as:</Text>
//             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//               <Text>User</Text>
//               <RadioButton
//                 value="User"
//                 status={userType === 'User' ? 'checked' : 'unchecked'}
//                 onPress={() => setUserType('User')}
//               />
//               <Text>Admin</Text>
//               <RadioButton
//                 value="Admin"
//                 status={userType === 'Admin' ? 'checked' : 'unchecked'}
//                 onPress={() => setUserType('Admin')}
//               />
//             </View>
//           </View>

//           {/* Admin Secret Text Field */}
//           {userType === 'Admin' && (
//             <Pfield placeholder='Secret Text' value={secretText} onChangeText={setSecretText} />
//           )}

//           {/* Signup Button */}
//           <Btn textColor='white' bgColor={green} btnLabel='SignUp' Press={handleSignup} />

//           {/* Navigate to Sign In */}
//           <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
//             <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Already have an Account ? </Text>
//             <TouchableOpacity onPress={() => props.navigation.navigate('Plogin')}>
//               <Text style={{ color: green, fontWeight: 'bold', fontSize: 16 }}>Sign In</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }





