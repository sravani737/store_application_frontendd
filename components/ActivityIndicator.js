import { StyleSheet, Text, View ,ActivityIndicator, Button} from 'react-native'
import React, { useState } from 'react'

export default function Activityindicator() {
    const [loader,setLoader]=useState(false)

    const Display=()=>{
        setLoader(true)

        setTimeout(()=>{
            setLoader(false)
        },3000)
    }
   
  return (
    <View>
     <ActivityIndicator size={100} color={"red"} animating={loader}/>
     <Button title='show indicator' onPress={Display}/>
    </View>
  )
}

const styles = StyleSheet.create({})