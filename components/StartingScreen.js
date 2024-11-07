import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Backg from './Backg'
import Btn from './Btn'
import { green, black } from './Constans'
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icons




export default function Phome(props) {
  return (

    <Backg>
      <View style={{ flex: 1, marginHorizontal: 40, marginVertical: 100 ,}}>
        <Text style={{ color: 'white', fontSize: 35, marginBottom: 2 ,fontWeight:'bold'}}>Let's Start</Text>
        <Text style={{ color: 'black', fontSize: 50, marginBottom: 200 }}>Shopping..</Text>
        
        <Btn bgColor={green} textColor={black}
          btnLabel={
            <View style={{flexDirection:'row',alignItems:'center',paddingVertical:1}}>
              <Icon name="sign-in" size={20} color={black} style={{marginRight:10}}/>
              <Text style={{ color: black, fontSize: 20 }}>Login</Text>
            </View>

          } Press={() => props.navigation.navigate('Plogin')} 
          />
          
          <Btn 
          bgColor={black} 
          textColor={green}
          btnLabel={
            <View style={{ flexDirection: 'row', alignItems: 'center',paddingVertical:1}}>
              <Icon name="user-plus" size={20} color={green} style={{ marginRight: 10 }} /> 
              <Text style={{ color: green, fontSize: 18 }}>Signup</Text>
            </View>
          } Press={() => props.navigation.navigate('Psignup')} />
      </View>

    </Backg>

  )
}

const styles = StyleSheet.create({})