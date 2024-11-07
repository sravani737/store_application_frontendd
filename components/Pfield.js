import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { green } from './Constans'

export default function Pfield(props) {
    return (
        <TextInput
            {...props}
            style={{
                borderRadius: 100, backgroundColor: 'rgb(220,220,220)',
                color: green, paddingHorizontal: 10,
                width:'80%',marginBottom:25,fontSize:17
            }}
            placeholderTextColor={green} >

        </TextInput>
    )
}

const styles = StyleSheet.create({})