import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

export const Login = (props) => {
    // const name = 'sravani'
    const age = 22
    const [name,setName] = useState("");
    return (
        <View>
            <Text style={{
                color: 'white', margin: 50, backgroundColor: 'green',
                padding: 30, paddingLeft: 90, fontSize: 30,
                borderRadius: 10
            }}>Login Screen
                <View style={{ paddingTop: 10, paddingLeft: 24, color: 'black' }}>
                    <TextInput onChangeText={(text)=>setName(text)}  placeholder='enter name' style={{borderColor:'white',borderWidth:2,paddingLeft:25,color:'white'}}/>
                    <Button title='goto home page' color={'green'} onPress={() => props.navigation.navigate('Home',{name,age})} />
                </View>
            </Text>


        </View>
    )
}