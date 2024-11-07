import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


const Tab = createBottomTabNavigator();
export default function TabNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen  name='login' component={Login}/>
        <Tab.Screen  name='signup' component={Signup}/>
      </Tab.Navigator>
    </NavigationContainer>
      
  )
}

const Login =() =>{
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center',}}>
      <Text style={{fontSize:30,color:'green'}}>Login</Text>
    </View>
  )
}

const Signup =() =>{
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center',}}>
      <Text style={{fontSize:30,color:'green'}}>Signup </Text>
    </View>
  )
}
const styles = StyleSheet.create({})