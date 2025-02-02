import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Phome from './StartingScreen'
import Plogin from './LoginScreen'
import Psignup from './SignupScreen'
import Main from '../Components1/Main'
import AdminDashboard from './AdminDashboardScreen'
import EditUser from './EditUsesrScreen'
import Product from '../Components1/Product'

const Stack = createNativeStackNavigator();
export default function Pro() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='Phome' component={Phome}/>
                <Stack.Screen name="Plogin" component={Plogin}/>
                <Stack.Screen name="Psignup" component={Psignup}/>
                <Stack.Screen name="Main"  component={Main}/>
                <Stack.Screen name="AdminDashboard" component={AdminDashboard}/>
                <Stack.Screen name="EditUser" component={EditUser}/>
                <Stack.Screen name='products' component={Product}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
