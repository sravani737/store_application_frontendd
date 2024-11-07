// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import Backg from './Backg'
// import { green } from './Constans'
// import Pfield from './Pfield'
// import Btn from './Btn'

// export default function Plogin(props) {
//   return (
//     <Backg>
//       <View style={{ alignItems: 'center', width: 460 }}>
//         <Text style={{
//           color: 'black',
//           fontSize: 60, fontWeight: 'bold',
//           marginVertical: 2
//         }}>Login</Text>
//         <View style={{
//           backgroundColor: 'white',
//           height: 800, width: 460,
//           borderTopLeftRadius: 130, paddingTop: 80, alignItems: 'center'
//         }}>
//           <Text style={{
//             fontSize: 40, color: green,
//             fontWeight: 'bold'
//           }}>
//             Welcome Back
//           </Text>
//           <Text style={{
//             color: 'grey', fontSize: 19,
//             fontWeight: 'bold', marginBottom: 25
//           }}>Login to your account</Text>
//           <Pfield placeholder='Email/UserName' keyboardType={'email-address'} />
//           <Pfield placeholder='password' secureTextEntry={true} />
//           <View style={{
//             alignItems: 'flex-end', width: '78%',
//             paddingRight: 16, marginBottom: 200
//           }}>
//             <Text style={{ color: green, fontWeight: 'bold', fontSize: 16 }}>Forgot Password ?</Text>
//           </View>
//           <Btn textColor='white' bgColor={green} btnLabel='Login' Press={() => alert('logged IN')} />
//           <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
//             <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Don't have an Account ?</Text>
//             <TouchableOpacity onPress={() => props.navigation.navigate('Psignup')}>
//               <Text style={{ color: green, fontWeight: 'bold', fontSize: 16 }}>SignUp</Text>
//             </TouchableOpacity>
//           </View>

//         </View>
//       </View>
//     </Backg>
//   )
// }

// const styles = StyleSheet.create({})


//11
// import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
// import React, { useState } from 'react';
// import Backg from './Backg';
// import { green } from './Constans';
// import Pfield from './Pfield';
// import Btn from './Btn';
// import Main from '../Components1/Main';

// export default function Plogin(props) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Function to handle login
//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch('http://192.168.1.27:5000/api/users/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: email,
//           password: password,
//           // rolename:role_name,
//         }),
//       });

//       const data = await response.json();

//       if (data.status === 'success') {
//         Alert.alert("Success", "Logged in successfully");
//         const userId = data.user._id;
//         console.log(data.user._id)
//         if (data.user.role_name === 'admin') {
//              // Navigate to admin dashboard
//               props.navigation.navigate('AdminDashboard');

//         }else{
//            // dispatch(setUserId(userId));
//           props.navigation.navigate('Main',{ userId });

//         }       

//       } else {
//         Alert.alert("Error", data.message);
//       }
//     }catch (error) {
//       console.error("Error logging in:", error);
//       Alert.alert("Error", "Something went wrong. Please try again later.");
//     }
//      finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Backg>
//       <View style={{ alignItems: 'center', width: 460 }}>
//         <Text style={{
//           color: 'black',
//           fontSize: 60, fontWeight: 'bold',
//           marginVertical: 2
//         }}>Login</Text>
//         <View style={{
//           backgroundColor: 'white',
//           height: 800, width: 460,
//           borderTopLeftRadius: 130, paddingTop: 80, alignItems: 'center'
//         }}>
//           <Text style={{
//             fontSize: 40, color: green,
//             fontWeight: 'bold'
//           }}>
//             Welcome Back
//           </Text>
//           <Text style={{
//             color: 'grey', fontSize: 19,
//             fontWeight: 'bold', marginBottom: 25
//           }}>Login to your account</Text>

//           {/* Email Field */}
//           <Pfield 
//             placeholder='Email/UserName' 
//             keyboardType={'email-address'}
//             value={email}
//             onChangeText={(text) => setEmail(text)}
//           />

//           {/* Password Field */}
//           <Pfield 
//             placeholder='Password' 
//             secureTextEntry={true}
//             value={password}
//             onChangeText={(text) => setPassword(text)}
//           />

//           <View style={{
//             alignItems: 'flex-end', width: '78%',
//             paddingRight: 16, marginBottom: 200
//           }}>
//             <Text style={{ color: green, fontWeight: 'bold', fontSize: 16 }}>Forgot Password ?</Text>
//           </View>

//           <Btn 
//             textColor='white' 
//             bgColor={green} 
//             btnLabel={loading ? 'Loading...' : 'Login'}
//             Press={handleLogin} 
//           />

//           <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
//             <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Don't have an Account ?</Text>
//             <TouchableOpacity onPress={() => props.navigation.navigate('Psignup')}>
//               <Text style={{ color: green, fontWeight: 'bold', fontSize: 16 }}>SignUp</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </Backg>
//   );
// }

// const styles = StyleSheet.create({});

//22
// import { StyleSheet, Text, TouchableOpacity, Button,View, Alert } from 'react-native';
// import React, { useState } from 'react';
// import Backg from './Backg';
// import { green } from './Constans';
// import Pfield from './Pfield';
// import Btn from './Btn';
// // Removed Main import since it’s not used

// export default function Plogin(props) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Function to handle login
//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch('http://192.168.1.27:5000/api/users/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: email,
//           password: password,
//         }),
//       });

//       const data = await response.json();

//       if (data.status === 'success') {
//         Alert.alert("Success", "Logged in successfully");
//         const userId = data.user._id; // Get user ID from response
//         console.log(userId); // Log user ID for debugging

//         if (data.user.role_name === 'admin') {
//           // Navigate to admin dashboard
//           props.navigation.navigate('AdminDashboard');
//         } else {
//           // Navigate to Main and pass userId
//           props.navigation.navigate('Main', { userId }); // Pass userId through navigation
//         }
//       } else {
//         Alert.alert("Error", data.message);
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//       Alert.alert("Error", "Something went wrong. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Backg>
//       <View style={{ alignItems: 'center', width: 460 }}>
//         <Text style={{
//           color: 'black',
//           fontSize: 60, fontWeight: 'bold',
//           marginVertical: 2
//         }}>Login</Text>
//         <View style={{
//           backgroundColor: 'white',
//           height: 800, width: 460,
//           borderTopLeftRadius: 130, paddingTop: 80, alignItems: 'center'
//         }}>
//           <Text style={{
//             fontSize: 40, color: green,
//             fontWeight: 'bold'
//           }}>
//             Welcome Back
//           </Text>
//           <Text style={{
//             color: 'grey', fontSize: 19,
//             fontWeight: 'bold', marginBottom: 25
//           }}>Login to your account</Text>

//           {/* Email Field */}
//           <Pfield 
//             placeholder='Email/UserName' 
//             keyboardType={'email-address'}
//             value={email}
//             onChangeText={(text) => setEmail(text)}
//           />

//           {/* Password Field */}
//           <Pfield 
//             placeholder='Password' 
//             secureTextEntry={true}
//             value={password}
//             onChangeText={(text) => setPassword(text)}
//           />

//           <View style={{
//             alignItems: 'flex-end', width: '78%',
//             paddingRight: 16, marginBottom: 200
//           }}>
//             <Text style={{ color: green, fontWeight: 'bold', fontSize: 16 }}>Forgot Password?</Text>
//           </View>

//           <Btn 
//             textColor='white' 
//             bgColor={green} 
//             btnLabel={loading ? 'Loading...' : 'Login'}
//             Press={handleLogin} 
//           />

//           <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
//             <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Don't have an Account?</Text>
//             <TouchableOpacity onPress={() => props.navigation.navigate('Psignup')}>
//               <Text style={{ color: green, fontWeight: 'bold', fontSize: 16 }}>SignUp</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </Backg>
//   );
// }

// const styles = StyleSheet.create({});



// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import React, { useState } from 'react';
// import Backg from './Backg';
// import { green } from './Constans';
// import Pfield from './Pfield';
// import Btn from './Btn';
// import CustomAlert from './CustomAlert'; // Import CustomAlert component

// export default function Plogin(props) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [alertVisible, setAlertVisible] = useState(false);
//   const [alertTitle, setAlertTitle] = useState('');
//   const [alertMessage, setAlertMessage] = useState('');
//   const [isPositive, setIsPositive] = useState(true); // State to control alert type

//   // Function to show the custom alert with title, message, and type
//   const showAlert = (title, message, positive = true) => {
//     setAlertTitle(title);
//     setAlertMessage(message);
//     setIsPositive(positive);
//     setAlertVisible(true);
//   };

//   // Function to handle login
//   const handleLogin = async () => {
//     if (!email || !password) {
//       showAlert("Error", "Please enter both email and password", false);
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch('http://192.168.1.27:5000/api/users/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (data.status === 'success') {
//         showAlert("Success", "Logged in successfully", true);
//         const userId = data.user._id;
//         console.log(userId); 

//         setTimeout(() => {
//           setAlertVisible(false);
//           if (data.user.role_name === 'admin') {
//             props.navigation.navigate('AdminDashboard');
//           } else {
//             props.navigation.navigate('Main', { userId });
//           }
//         }, 1500);
//       } else {
//         showAlert("Error", data.message, false);
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//       showAlert("Error", "Something went wrong. Please try again later.", false);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Backg>
//       <View style={{ alignItems: 'center', width: 460 }}>
//         <Text style={{ color: 'black', fontSize: 60, fontWeight: 'bold', marginVertical: 2 }}>Login</Text>
//         <View style={{ backgroundColor: 'white', height: 800, width: 460, borderTopLeftRadius: 130, paddingTop: 80, alignItems: 'center' }}>
//           <Text style={{ fontSize: 40, color: green, fontWeight: 'bold' }}>Welcome Back</Text>
//           <Text style={{ color: 'grey', fontSize: 19, fontWeight: 'bold', marginBottom: 25 }}>Login to your account</Text>

//           <Pfield 
//             placeholder='Email/UserName' 
//             keyboardType={'email-address'}
//             value={email}
//             onChangeText={(text) => setEmail(text)}
//           />

//           <Pfield 
//             placeholder='Password' 
//             secureTextEntry={true}
//             value={password}
//             onChangeText={(text) => setPassword(text)}
//           />

//           <View style={{ alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200 }}>
//             <Text style={{ color: green, fontWeight: 'bold', fontSize: 16 }}>Forgot Password?</Text>
//           </View>

//           <Btn 
//             textColor='white' 
//             bgColor={green} 
//             btnLabel={loading ? 'Loading...' : 'Login'}
//             Press={handleLogin} 
//           />

//           <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
//             <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Don't have an Account? </Text>
//             <TouchableOpacity onPress={() => props.navigation.navigate('Psignup')}>
//               <Text style={{ color: green, fontWeight: 'bold', fontSize: 16 }}>SignUp</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>

//       {/* Custom Alert Modal */}
//       <CustomAlert 
//         visible={alertVisible} 
//         onClose={() => setAlertVisible(false)} 
//         title={alertTitle} 
//         message={alertMessage} 
//         isPositive={isPositive} // Pass isPositive to CustomAlert
//       />
//     </Backg>
//   );
// }

// const styles = StyleSheet.create({});


import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import Backg from './Backg';
import { green } from './Constans';
import Pfield from './Pfield';
import Btn from './Btn';
import CustomAlert from './CustomAlert';


import AsyncStorage from '@react-native-async-storage/async-storage'; // To store the login token




export default function Plogin(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [isPositive, setIsPositive] = useState(true); // State to control alert type



  // Function to show the custom alert with title, message, and type
  const showAlert = (title, message, positive = true) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setIsPositive(positive);
    setAlertVisible(true);
  };
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
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
          setAlertVisible(false);
          if (data.user && data.user.role_name === 'admin') {
            props.navigation.navigate('AdminDashboard');
          } else {
            props.navigation.navigate('Main', { userId: data.user._id });
          }
        }, 1500);
      } else {
        showAlert("Error", data.message || "Something went wrong", false);
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
            placeholder='Email/UserName'
            keyboardType={'email-address'}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          {/* Password Field */}
          <Pfield
            placeholder='Password'
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <View style={{
            alignItems: 'flex-end', width: '78%',
            paddingRight: 16, marginBottom: 200
          }}>
            <Text style={{ color: green, fontWeight: 'bold', fontSize: 16 }}>Forgot Password ?</Text>
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

      <CustomAlert
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
        title={alertTitle}
        message={alertMessage}
        isPositive={isPositive} // Pass isPositive to CustomAlert
      />
    </Backg>
  );
}

const styles = StyleSheet.create({});
