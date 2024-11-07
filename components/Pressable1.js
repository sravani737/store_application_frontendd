import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

export default function Pressable1() {
  return (
    <View>
        <Pressable
         onPress={()=>{console.warn('normal click')}}
         onLongPress={()=>{console.warn('Long click')}}
         onPressIn={()=>{console.warn('pressin')}}
         onPressOut={()=>{console.warn('pressOut')}}
        >
        <Text style={styles.press}>pressable</Text>
        </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  press:{
    color:'white',
    backgroundColor:'red',
    padding:10,
    textAlign:'center',
    marginTop:425,
    fontSize:30,
    borderRadius:10,
    margin:10,
    shadowColor:'black',
    shadowOpacity:50,
    elevation:10,
    borderColor:'black',
    borderWidth:1,
  }
})