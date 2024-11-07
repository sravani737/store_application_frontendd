import { StyleSheet, Text, View ,Button, TextInput} from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Login } from './Login'
import { Home } from './Home'

const Stack = createNativeStackNavigator();
export default function StackNav() {
  const Click = ()=>{
    console.warn('left btn pressed')
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name='Login' component={Login}
         options={{
          statusBarColor:'black',
          headerTitle:()=><Button title='Left' onPress={Click}/>,
          headerRight:()=> <Input /> ,
          title:'User Login',
          headerStyle:{
            backgroundColor:'green'
          },
          headerTintColor:'white'
         }}/>
         <Stack.Screen name='Home' component={Home}
          options={{
            title:'Home Page',
            headerStyle:{
              backgroundColor:'green'
            },
            headerTintColor:'white'
           }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Input = ()=>{
  return(<TextInput placeholder='name'/>)
}



const styles = StyleSheet.create({})