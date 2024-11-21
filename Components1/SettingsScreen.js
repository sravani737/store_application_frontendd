// SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [language, setLanguage] = useState('English');

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleNotifications = () => setIsNotificationsEnabled(!isNotificationsEnabled);
  const changeLanguage = () => setLanguage(language === 'English' ? 'Spanish' : 'English'); // Simplified for demo

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {/* Dark Mode Toggle */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </View>

      {/* Notifications Toggle */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={toggleNotifications}
          thumbColor={isNotificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </View>

      {/* Language Selection */}
      <TouchableOpacity style={styles.settingItem} onPress={changeLanguage}>
        <Text style={styles.settingText}>Language</Text>
        <View style={styles.languageContainer}>
          <Text style={styles.languageText}>{language}</Text>
          <Icon name="chevron-forward-outline" size={20} color="#333" />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingText: {
    fontSize: 18,
    color: '#333',
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageText: {
    fontSize: 16,
    color: '#333',
    marginRight: 5,
  },
});
