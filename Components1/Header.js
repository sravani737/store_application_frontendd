// // import { StyleSheet, Text, View, } from 'react-native'
// // import React, { useEffect,useState } from 'react'
// // import {useSelector} from 'react-redux'

// // export default function Header() {

// //   const cartData = useSelector((state)=>state.reducer)
// //   const [cartItems,setCartItems] = useState(0)


// //   useEffect(()=>{
// //     // console.log(cartData)
// //     setCartItems(cartData.length)
// //   },[cartData])
// //   return (
// //     <View>

// //       <Text style={{fontSize:20,textAlign:'right',
// //         paddingBottom:5,backgroundColor:'orange'}}>

// // <Text style={{paddingBottom:5}}>cart:</Text>
// //         <View style={{backgroundColor:'yellow',
// //           borderRadius:15,height:40,width:40}}>
// //           <Text style={{fontSize:30,marginLeft:13}}>
// //           {cartItems}
// //           </Text>
// //         </View>
// //      </Text>
// //     </View>
// //   )
// // }

// // const styles = StyleSheet.create({})

// import { StyleSheet, Text, View } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

// export default function Header() {
//   const cartData = useSelector((state) => state.reducer.items);
//   const [cartItems, setCartItems] = useState(0);

//   useEffect(() => {
//     setCartItems(cartData.length);
//   }, [cartData]);

//   return (
//     <View style={styles.headerContainer}>
//       {/* Cart Label */}
//       {/* <Text style={styles.cartLabel}>Cart</Text> */}
      
//       {/* Cart Counter */}
//       <View style={styles.cartCounter}>
//         <Text style={styles.cartCountText}>{cartItems}</Text>
//       </View>
//     </View>
//   );
//  }

// const styles = StyleSheet.create({
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: 'green',
//   },
//   cartLabel: {
//     fontSize: 22,
//     color: 'white',
//     fontWeight: 'bold',
//     marginLeft:"80%"
//   },
//   cartCounter: {
//     backgroundColor: 'white',
//     borderRadius: 20,
//     height: 40,
//     width: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cartCountText: {
//     fontSize: 20,
//     color: 'green',
//     fontWeight: 'bold',
//   },
// });
