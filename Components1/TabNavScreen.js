// import { StyleSheet, Text, View ,Image,ScrollView,Button} from 'react-native'
// import React from 'react'
// import  FontAwesome from 'react-native-vector-icons/FontAwesome';  // Import the icon library
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {NavigationContainer} from '@react-navigation/native'
// import  {createNativeStackNavigator} from '@react-navigation/native-stack'
// import ProductWrapper from './HomeScreen';
// import UserList from './UserProfileScreen';
// import Groceries from './GroceriesScreen';
// import Cart from './CartScreen';
// // import TabNav from './TabNav';


// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();


// // Define the Tab Navigation for the ProductWrapper page
// function ProductWrapperTabs({userId}) {

//   console.log(userId + ' fromproductWrapperTabs')
//   return (
//     <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ color, size }) => {
//         let iconName;

//         // Define the icons for each tab
//         if (route.name === 'ProductWrapper') {
//           iconName = 'home'; // Home icon for ProductWrapper
//         } else if (route.name === 'Groceries') {
//           iconName = 'shopping-basket'; // Groceries icon
//         } else if (route.name === 'Profile') {
//           iconName = 'user'; // Profile icon
//         }else if (route.name === 'Cart'){
//           iconName = 'shopping-cart';
//         }

//         // Return the icon
//         return <FontAwesome name={iconName} size={size} color={color} />;
//       },
//     })}
//     tabBarOptions={{
//       activeTintColor: 'black',    // Active tab color
//       inactiveTintColor: 'gray',    // Inactive tab color
//     }}
//   >

//       <Tab.Screen name="ProductWrapper" options={{ title: 'Home' }}>
//         {(props) => <ProductWrapper {...props} userId={userId} />}
//       </Tab.Screen>
//       <Tab.Screen name="Groceries" component={Groceries} />
//       <Tab.Screen name="Profile">
//         {(props) => <UserList {...props} userId={userId} />}
//       </Tab.Screen>
//       <Tab.Screen name="Cart" component={Cart} />
//       {(props) => <Cart {...props} userId={userId} />}

//     </Tab.Navigator>
//   );
// }
// export default function Main({route}) {

//   const { userId } = route.params;
//   console.log(userId)
//   return (

// <Stack.Navigator>

//   <Stack.Screen name='Home'>
//   {props => <ProductWrapperTabs {...props} userId={userId} />}   
//     </Stack.Screen>

//   {/* <Stack.Screen name='User'>
//   {props => <UserList {...props} userId={userId} />} 

//   </Stack.Screen> */}
// <Stack.Screen name="Groceries" component={Groceries}/>

// </Stack.Navigator>
// // {/* <Tab.Navigator>
// //        <Tab.Screen name="TabNav" component={TabNav}/>
// // </Tab.Navigator> */}

//   )
// }

// const styles = StyleSheet.create({})

// import { StyleSheet } from 'react-native';
// import React from 'react';
// import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import the icon library
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import UserList from './UserProfileScreen';
// import Groceries from './GroceriesScreen';
// import CartScreen from './CartScreen';
// import { useSelector } from 'react-redux';
// import SearchScreen from '../components/SearchScreen';
// import ProductWrapper from '../Components1/HomeScreen'
// import Payment from './Payment';
// import Orders from './Orders';


// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// // Define the Tab Navigation for the ProductWrapper page
// function ProductWrapperTabs({ userId }) {
//   console.log('from main only : usrId',userId);
// const cartCount = useSelector((state) => state.reducer.items.length); // Select the cart count from the Redux store
//   console.log('cartCount :',cartCount)
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           let iconName;

//           // Define the icons for each tab
//           if (route.name === 'ProductWrapper') {
//             iconName = 'home'; // Home icon for ProductWrapper
//           } else if (route.name === 'Groceries') {
//             iconName = 'shopping-basket'; // Groceries icon
//           } else if (route.name === 'Profile') {
//             iconName = 'user'; // Profile icon
//           } else if (route.name === 'Cart') {
//             iconName = 'shopping-cart';
//           }else if (route.name === 'Search'){
//             iconName = 'search';
//           }

//           // Return the icon
//           return <FontAwesome name={iconName} size={size} color={color} />;
//         },
//         tabBarBadge: route.name === 'Cart' ? cartCount : null, // Display badge if on Cart tab
//       })}
//       tabBarOptions={{
//         activeTintColor: 'black', // Active tab color
//         inactiveTintColor: 'gray', // Inactive tab color
//       }}
//     >
//       <Tab.Screen name="ProductWrapper" options={{ title: 'Home' }}>
//         {(props) => <ProductWrapper {...props} userId={userId} />}
//       </Tab.Screen>
//       <Tab.Screen name="Groceries">
//         {(props)=> < Groceries {...props} userId={userId}/>}
//         </Tab.Screen>
//       <Tab.Screen name="Profile">
//         {(props) => <UserList {...props} userId={userId} />}
//       </Tab.Screen>

//       <Tab.Screen name="Cart">
//         {(props) => <CartScreen {...props} userId={userId} />} 
//       </Tab.Screen>
//       <Tab.Screen name='Search' component={SearchScreen}/>


//     </Tab.Navigator>
//   );
// }

// export default function Main({ route }) {
//   const { userId } = route.params;
//   console.log("from Mainscreen userId: ",userId);
//   return (

//     <Stack.Navigator>
//       <Stack.Screen  name="Home"  
//         options={{ headerShown: false }}>
//         {(props) => <ProductWrapperTabs {...props} userId={userId} />}
//       </Stack.Screen>
//       <Stack.Screen name="Groceries">
//       {(props) => <Groceries {...props} userId={userId} />}
//         </Stack.Screen>
//       <Stack.Screen name='PaymentScreen' >
//       {(props) => <Payment {...props} userId={userId} />}
//       </Stack.Screen>
      
    
//       <Stack.Screen name='CartScreen' component={CartScreen}/>
      
//       <Stack.Screen name="Orders" component={Orders} />
//       {/* Add other screens as needed */}
//     </Stack.Navigator>

//   );
// }

// const styles = StyleSheet.create({});




import { StyleSheet,Image,View ,Text} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';  // To connect Redux store
import UserList from './UserProfileScreen';
import Groceries from './GroceriesScreen';
import CartScreen from './CartScreen';
import Payment from './PaymentScreen';
import Orders from './OrdersScreen';
import ProductWrapper from './HomeScreen';
import HomeScreen from './HomeScreen';
import AboutUsScreen from './AboutUs';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Define the Tab Navigation for the ProductWrapper page
function ProductWrapperTabs({ userId }) {
  const cartCount = useSelector((state) => state.reducer.items.length); // Updated path for the cart reducer
  return (
    <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      let iconName;
      if (route.name === 'ProductWrapper') iconName = 'home';
      else if (route.name === 'Groceries') iconName = 'shopping-basket';
      else if (route.name === 'Profile') iconName = 'user';
      else if (route.name === 'Cart') iconName = 'shopping-cart';
      else if (route.name === 'Search') iconName = 'search';

      return <FontAwesome name={iconName} size={size} color={color} />;
    },
    tabBarBadge: route.name === 'Cart' ? cartCount : null, // Only Cart tab gets the badge
    tabBarActiveTintColor: '#2F4F4F',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: { display: 'flex' },
  })}
>
<Tab.Screen
  name="ProductWrapper"
  options={{
    headerTitle: () => (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={require('../components/img/my.png')} 
          style={{ width: 40, height: 40, marginRight: 8 }}
          resizeMode="cover" 
        />
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#2F4F4F' }}>GrocerEase</Text>
      </View>
    ),
    headerStyle: {
      backgroundColor: 'white', 
    },
  }}
>
  {(props) => <ProductWrapper {...props} userId={userId} />}
</Tab.Screen>

  <Tab.Screen name="Groceries">
    {(props) => <Groceries {...props} userId={userId} />}
  </Tab.Screen>
  <Tab.Screen name="Profile">
    {(props) => <UserList {...props} userId={userId} />}
  </Tab.Screen>
  <Tab.Screen name="Cart">
    {(props) => <CartScreen {...props} userId={userId} />} 
  </Tab.Screen>
</Tab.Navigator>

  );
}

export default function Main({ route }) {
  const { userId } = route.params; // Receive userId from previous navigation
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" 
       options={{
       headerShown: false,
        }}
      >
        {(props) => <ProductWrapperTabs {...props} userId={userId} />}
      </Stack.Screen>
      <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="Groceries">
        {(props) => <Groceries {...props} userId={userId} />}
      </Stack.Screen>
      <Stack.Screen name="CartScreen">
        {(props) => <CartScreen {...props} userId={userId} />}
      </Stack.Screen>
      <Stack.Screen name="Payment">
        {(props) => <Payment {...props} userId={userId} />} 
      </Stack.Screen>
      <Stack.Screen name="Orders">
        {(props) => <Orders {...props} userId={userId} />} 
      </Stack.Screen>
      <Stack.Screen name="Profile">
        {(props) => <UserList {...props} userId={userId} />}
      </Stack.Screen>
      <Stack.Screen name="AboutUs">
        {(props) => <AboutUsScreen {...props} userId={userId} />}
      </Stack.Screen>
      <Stack.Screen name="Settings">
        {(props) => <SettingsScreen {...props} userId={userId} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
