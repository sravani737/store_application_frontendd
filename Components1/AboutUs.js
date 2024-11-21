import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function AboutUsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Welcome to Vsit!</Text>

      <Text style={styles.paragraph}>
        At <Text style={styles.boldText}>Vsit</Text>, we're passionate about bringing you quality groceries and beverages, sourced from trusted suppliers and curated to meet your everyday needs. Our mission is to make shopping convenient, affordable, and enjoyable for our customers.
      </Text>

      <Text style={styles.subheader}>Who We Are</Text>
      <Text style={styles.paragraph}>
        Founded in 2024, <Text style={styles.boldText}>Vsit</Text> started as a small local business with a commitment to quality and customer satisfaction. Today, we have expanded our services to bring a wider selection of products right to your doorstep. From fresh produce to popular beverages, we’re here to ensure you have everything you need in one place.
      </Text>

      <Text style={styles.subheader}>Our Vision</Text>
      <Text style={styles.paragraph}>
        To be a reliable destination for quality products, ensuring that each of our customers enjoys a seamless shopping experience. We focus on creating a store that not only meets but exceeds your expectations, from product selection to customer service.
      </Text>

      <Text style={styles.subheader}>Why Choose Us?</Text>
      <Text style={styles.paragraph}>
        - <Text style={styles.boldText}>Quality Products:</Text> We prioritize quality in every item we offer, ensuring freshness and top standards.{"\n"}
        - <Text style={styles.boldText}>Affordable Prices:</Text> We strive to offer competitive pricing so you get the best value for your money.{"\n"}
        - <Text style={styles.boldText}>Convenience:</Text> With a simple, user-friendly app, shopping has never been easier. Browse, select, and order from the comfort of your home.{"\n"}
        - <Text style={styles.boldText}>Customer Service:</Text> Our team is always ready to assist you. We value your feedback and continuously improve our services based on your needs.
      </Text>

      <Text style={styles.subheader}>Our Promise</Text>
      <Text style={styles.paragraph}>
        We believe in building long-lasting relationships with our customers. Whether you’re here for weekly groceries or to try a new beverage, we promise to make your experience with <Text style={styles.boldText}>Vsit</Text> positive, reliable, and satisfying every time.
      </Text>

      <Text style={styles.footer}>Thank you for choosing Vsit – where quality meets convenience!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  subheader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#16a085',
    marginTop: 15,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    color: '#34495e',
    lineHeight: 24,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 16,
    color: '#8e44ad',
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
