// //Feedback Effect: When pressed, it applies a visual "highlight" effect, typically by darkening or changing the background color of the wrapped child element.
// import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
// import React from 'react'

// export default function Buttons() {
//   return (
//     <View style={styles.main}>
//         <TouchableHighlight >
//              <Text style={styles.button}>Button</Text>
//         </TouchableHighlight>
//         <TouchableHighlight>
//              <Text style={[styles.button,styles.success]}>Success</Text>
//         </TouchableHighlight>
//         <TouchableHighlight>
//              <Text style={[styles.button,styles.primary]}>primary</Text>
//         </TouchableHighlight>
//         <TouchableHighlight>
//              <Text style={[styles.button,styles.error]}>error</Text>
//         </TouchableHighlight>
//         <TouchableHighlight>
//              <Text style={[styles.button,styles.warning]}>warning</Text>
//         </TouchableHighlight>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     main:{
//         // flex:1
//     },
//     button:{
//         color:"white",
//         backgroundColor:"grey",
//         margin:10,
//         textAlign:'center',
//         borderRadius:10,
//         padding:10,
//         shadowColor:'black',
//         shadowOpacity:10,
//         elevation:20,

//     },
//     success:{
//         backgroundColor:'green'
//     },
//     primary:{
//         backgroundColor:'blue'
//     },
//     error:{
//         backgroundColor:'red'
//     },
//     warning:{
//         backgroundColor:'orange'
//     }

// })