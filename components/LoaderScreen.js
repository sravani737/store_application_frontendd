import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const LoaderScreen = ({ navigation, route }) => {
  const { userId } = route.params; // Get userId from params

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('CartScreen', { userId }); // Pass userId to CartScreen
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation, userId]);

  return (
    <View style={styles.container}>
      <Image
        source={require('./img/shopping.gif')} // Replace with your GIF path
        style={styles.loader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    width: 100,
    height: 100,
  },
});

export default LoaderScreen;
