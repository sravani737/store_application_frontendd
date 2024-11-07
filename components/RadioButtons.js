import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

export default function RadioButtons() {
    const [selectedColor, setSelectedColor] = useState(1);  // State to track selected radio button
const [Color,setColor] = useState(true)
    return (
        <View style={styles.main}>
            {/* Radio Button 1 */}
            <TouchableOpacity onPress={() => setSelectedColor(1)}>
                <View style={styles.wrapper}>
                    <View style={styles.radio}>
                        {selectedColor === 1 ? <View style={styles.radioBg}></View> : null}
                    </View>
                    <Text style={styles.radioText}>Radio 1</Text>
                </View>
            </TouchableOpacity>

            {/* Radio Button 2 */}
            <TouchableOpacity onPress={() => setColor(!Color)}>
                <View style={styles.wrapper}>
                    <View style={styles.radio}>
                        {Color === true? <View style={styles.radioBg}></View> : null}
                    </View>
                    <Text style={styles.radioText}>Radio 2</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5', // Added a background color for better visibility
    },
    radioText: {
        fontSize: 20,
        marginLeft: 10,  // Space between radio and text
    },
    radio: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 2,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,  // Add some space between buttons
    },
    radioBg: {
        backgroundColor: 'red',
        height: 28,
        width: 28,
        borderRadius: 14,  // Half of the height/width to make it a circle
    },
});
// import React, {useState} from 'react';
// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// const App = () => {
//   const [count, setCount] = useState(0);
//   const onPress = () => setCount(prevCount => prevCount + 1);

//   return (
//     <View style={styles.container}>
//       <View style={styles.countContainer}>
//         <Text>Count: {count}</Text>
//       </View>
//       <TouchableOpacity style={styles.button} onPress={onPress}>
//         <Text>Press Here</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 10,
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10,
//   },
//   countContainer: {
//     alignItems: 'center',
//     padding: 10,
//   },
// });

// export default App;