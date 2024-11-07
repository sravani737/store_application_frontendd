import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Btn({bgColor, btnLabel, textColor,Press}) {
    return (
        <TouchableOpacity
        onPress={Press} style={{ backgroundColor:bgColor, 
        borderRadius:40, 
        // height:50,
        alignItems: 'center' ,
        width:350,
        paddingVertical:7,
        marginBottom:30
        }}>
            <Text style={{ color: textColor, 
                fontSize: 20,
                  }}>{btnLabel}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})