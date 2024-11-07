import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Backg({ children }) {
  return (
    <View>
      <ImageBackground
        source={require('./img/shop.jpg')}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle} // Adding this to modify the image itself
      >
        {/* Overlay to increase brightness */}
        <View style={styles.overlay} />
        
        {/* Content on top of the image */}
        <View style={styles.content}>
          {children}
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    height: 1000,
    width: 450,
    borderRadius: 0,
    overflow: 'hidden', // Ensures content stays within the rounded corners
  },
  imageStyle: {
    borderRadius:0, // Applies the borderRadius to the image itself
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Fills the entire ImageBackground
    backgroundColor: '#2F4F4F', // Semi-transparent white overlay
    // borderTopLeftRadius:100,
    // borderBottomRightRadius:400
  },
  content: {
    position: 'absolute',
    top:50,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center', // Centers the children vertically
    alignItems: 'center', // Centers the children horizontally
  },
})
