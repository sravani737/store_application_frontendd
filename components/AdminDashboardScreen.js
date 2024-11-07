// // import { StyleSheet, Text, View, FlatList, ActivityIndicator, Alert } from 'react-native';
// // import React, { useEffect, useState } from 'react';
// // import { green } from './Constans'; // Import your color constants

// // export default function AdminDashboard(props) {
// //   const [users, setUsers] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5000/api/users');
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch users');
// //         }
// //         const data = await response.json();
// //         setUsers(data);
// //         console.log("Fetched users:", data);
// //       } catch (error) {
// //         Alert.alert("Error", error.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchUsers();
// //   }, []);

// //   const renderItem = ({ item }) => (
// //     <View style={styles.userContainer}>
// //       <Text style={styles.userText}>Name: {item.user_name}</Text>
// //       <Text style={styles.userText}>Email: {item.email}</Text>
// //       <Text style={styles.userText}>Role: {item.role_name}</Text>  
// //       <Text style={styles.userText}>Role: {item.phone_number}</Text>
// //     </View>
// //   );
  
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.header}>Admin Dashboard</Text>
// //       <FlatList
// //         data={users}
// //         renderItem={renderItem}
// //         keyExtractor={(item) => item._id.toString()} 
// //       />
// //     </View>
// //   );
// // }
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: 'white',
// //     padding: 20,
// //   },
// //   header: {
// //     fontSize: 32,
// //     fontWeight: 'bold',
// //     color: green,
// //     marginBottom: 20,
// //     textAlign: 'center',
// //   },
// //   userContainer: {
// //     backgroundColor: '#f8f8f8',
// //     padding: 15,
// //     borderRadius: 10,
// //     marginBottom: 10,
// //     shadowColor: '#000',
// //     shadowOffset: {
// //       width: 0,
// //       height: 1,
// //     },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 1.41,
// //     elevation: 2,
// //   },
// //   userText: {
// //     fontSize: 16,
// //     color: 'black',
// //   },
// //   loadingContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// // })

// // import { Alert } from 'react-native';
// import { StyleSheet, Text, View, FlatList, ActivityIndicator, Alert, Button, TouchableOpacity } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import { green } from './Constans'; // Import your color constants
// import { useNavigation } from '@react-navigation/native'; // Assuming you're using React Navigation

// export default function AdminDashboard(props) {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigation = useNavigation();

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch('http://192.168.1.27:5000/api/users');
//       if (!response.ok) {
//         throw new Error('Failed to fetch users');
//       }
//       const data = await response.json();
//       setUsers(data);
//       console.log("Fetched users:", data);
//     } catch (error) {
//       Alert.alert("Error", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };


// const confirmDeleteUser = (userId) => {
//   Alert.alert(
//     "Confirm Delete",
//     "Are you sure you want to delete this user?",
//     [
//       {
//         text: "Cancel",
//         onPress: () => console.log("Delete Cancelled"),
//         style: "cancel",
//       },
//       {
//         text: "Delete",
//         onPress: () => deleteUser(userId),
//         style: "destructive",
//       },
//     ],
//     { cancelable: true }
//   );
// };

// const deleteUser = async (userId) => {
//     console.log(userId)
//     try {
//       const response = await fetch(`http://192.168.1.5:5000/api/users/${userId}`, {
//         method: 'DELETE',
//       });
//       if (!response.ok) {
//         throw new Error('Failed to delete user');
//       }
//       Alert.alert("Success", "User deleted successfully");
//       fetchUsers(); // Refresh the user list
//     } catch (error) {
//       Alert.alert("Error", error.message);
//     }
//   };

//   const navigateToSignup = () => {
//     props.navigation.navigate('Psignup'); // Replace 'Signup' with your actual signup page name
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.userContainer}>
//       <Text style={styles.userText}>Name: {item.user_name}</Text>
//       <Text style={styles.userText}>Email: {item.email}</Text>
//       <Text style={styles.userText}>Role: {item.role_name}</Text>
//       <Text style={styles.userText}>Phone: {item.phone_number}</Text>
//       <View style={styles.actionButtons}>
//         <TouchableOpacity 
//           style={styles.editButton}
//           onPress={() => navigation.navigate('EditUser', { user: item })} // Assuming you have an EditUser screen
//         >
//           <Text style={styles.buttonText}>Edit</Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={styles.deleteButton}
//           onPress={() => confirmDeleteUser(item._id)}>
//           <Text style={styles.buttonText}>Delete</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color={green} />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Admin Dashboard</Text>
//       <Button title="Add New User" color={green} onPress={navigateToSignup} />
//       <FlatList
//         data={users}
//         renderItem={renderItem}
//         keyExtractor={(item) => item._id.toString()}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 20,
//   },
//   header: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: green,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   userContainer: {
//     backgroundColor: '#f8f8f8',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     elevation: 2,
//   },
//   userText: {
//     fontSize: 16,
//     color: 'black',
//   },
//   actionButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   editButton: {
//     backgroundColor: green,
//     padding: 10,
//     borderRadius: 5,
//   },
//   deleteButton: {
//     backgroundColor: 'red',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });




import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer,} from '@react-navigation/native';
import {Alert} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import UserList from './UserListComponent'; // Your UserList component
import StockManagement from './StockManagementComponent'; // Stock management
import FinancialReport from './FinancialReportComponent'; // Financial reports
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const fetchUsers = useCallback(async () => {
    try {
      //get the token
      const token = await AsyncStorage.getItem('userToken');
      console.log(token);
      if (!token) {
        throw new Error('No token found. Please log in again.');
      }
      const response = await fetch('http://192.168.1.27:5000/api/users',{
        method:'GET',
        headers:{
          'content-type':'application/json',
          Authorization:  `Bearer ${token}`,
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      return data;
    } catch (error) { 
      Alert.alert('Error', error.message);
    }
  }, []);

  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Users') {
              iconName = 'user';
            } else if (route.name === 'Stocks') {
              iconName = 'shopping-cart';
            } else if (route.name === 'Reports') {
              iconName = 'line-chart';
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Stocks" component={StockManagement}   options={{ headerShown: false }}/>
        <Tab.Screen name="Users" >
          {() => <UserList fetchUsers={fetchUsers} />}
        </Tab.Screen>
       
        <Tab.Screen name="Reports" component={FinancialReport} />
      </Tab.Navigator>
   
  );
}

