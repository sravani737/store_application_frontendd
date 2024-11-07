import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

export const Home = (props) => {
    const { name, age } = props.route.params
    return (
        <View>
            <Text style={{
                color: 'white', margin: 50, backgroundColor: 'green',
                padding: 30, paddingLeft: 90, fontSize: 30,
                borderRadius: 10
            }}>home Screen
                {/* <View style={{paddingTop:10,paddingLeft:24}}>
          <Button title='goto home page' onPress={()=>{Login}}/>
          </View> */}
                
            </Text>
            <Text style={{
                color: 'white', margin: 50, backgroundColor: 'green',
                padding: 10, paddingLeft: 110, fontSize: 30,
                borderRadius: 10
            }}>{name}</Text>
            <Text style={{
                color: 'white', margin: 50, backgroundColor: 'green',
                padding: 10, paddingLeft: 150, fontSize: 30,
                borderRadius: 10
            }}>{age}</Text>
        </View>
    )
}