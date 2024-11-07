import React, { useState, useEffect, useRef } from 'react';
import { View, Dimensions, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

// Get screen dimensions
const { height, width } = Dimensions.get('window');

// Replace with your image URLs or local image imports
const imageData = [
  require('../components/img/freedelivery.jpg'),
  require('../components/img/c1.webp'),
  require('../components/img/c2.webp'),
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  // Autoplay interval setup
  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current) {
        const nextIndex = (currentIndex + 1) % imageData.length;
        flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
        setCurrentIndex(nextIndex);
      }
    }, 3000); // Change the interval duration as needed (3000 ms = 3 seconds)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  const handleScroll = (event) => {
    const x = event.nativeEvent.contentOffset.x;
    setCurrentIndex(Math.round(x / width));
  };

  return (
    <View style={styles.container}>
      <View style={styles.carousel}>
        <FlatList
          ref={flatListRef}
          data={imageData}
          horizontal
          pagingEnabled
          onScroll={handleScroll}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View style={styles.itemContainer} key={index}>
              <TouchableOpacity style={styles.item}>
                <Image source={item} style={styles.image} />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.dotsContainer}>
        {imageData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                width: currentIndex === index ? 30 : 8,
                height: currentIndex === index ? 10 : 8,
                borderRadius: currentIndex === index ? 15 : 4,
                backgroundColor: currentIndex === index ? 'black' : 'gray',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, // Adjust this based on your home page layout
  },
  carousel: {
    height: height * 0.25, // Increased to occupy more height
    marginBottom: 10,
    borderRadius: 10, // Add borderRadius here
    overflow: 'hidden', // Make sure overflow is set to hidden
  },
  itemContainer: {
    width: width, // Occupy full screen width
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: width, // Ensure the item occupies the full screen width
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Use cover to maintain aspect ratio
  },
  dotsContainer: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    marginLeft: 5,
  },
});

export default Carousel;
