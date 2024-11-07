// // //In React Native, a Modal is a native UI component used to display content that pops up over the rest of the UI. It's great for pop-ups, dialogs, and other overlay effects. React Native provides a Modal component that renders its content inside a native view. It also has properties for controlling visibility, animations, and more.   Modal component:===>This is the primary component used to display a modal. It's wrapped around the content you want to display.#animationType="slide": Defines the modal's animation when it appears (options include slide, fade, and none).#transparent={true}: Makes the background behind the modal transparent.#visible={modalVisible}: Controls the visibility of the modal.#onRequestClose(): Function called when the modal is requested to close (like the back button on Android).
import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Modals() {
    const [show,setShow]=useState(false)
    return (
        <View style={styles.main}>
            <View style={styles.button}>
                <Button title='Show Modal' onPress={()=>setShow(true)}/>
            </View>
            <Modal transparent={true}
            visible={show}>
                <View style={styles.centeredview}>
                    <View style={styles.modalview}>
                        <Text style={styles.text}>hello this is pop up</Text>
                        <View style={styles.button2}>
                        <Button title='close modal' color={'red'} onPress={()=>setShow(false)}/>
                        </View>
             
                    </View>
                </View>
            </Modal>
        </View>


    )
}

const styles = StyleSheet.create({
    button: {
        margin:50
        // alignItems:'baseline',
        // // flex:1,
        // justifyContent:'flex-end'
    },
    main:{
        margin:100,
        flexDirection:'column'
    },
    text:{
        fontSize:30,
        backgroundColor:'white',
        textAlign:'center'
    },
    modalview:{
        padding:40,
        shadowColor:"black",
        shadowOpacity:40,
        elevation:20,

    },
    button2:{
          borderWidth:1,
    }
})





// import React, { useState } from 'react';
// import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <View style={styles.centeredView}>
//       {/* Button to trigger Modal */}
//       <TouchableOpacity
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </TouchableOpacity>

//       {/* Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello, I am a Modal!</Text>

//             {/* Close Modal Button */}
//             <TouchableOpacity
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}
//             >
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     // flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     // marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });

// export default App;
