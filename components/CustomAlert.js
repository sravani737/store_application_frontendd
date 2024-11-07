import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons'; // Ensure you have this library installed or use any icon library you prefer.

const CustomAlert = ({ visible, onClose, title, message, isPositive }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={[styles.alertContainer, { borderColor: isPositive ? 'green' : 'red' }]}>
          {/* Display check mark or cross mark based on response type */}
          <View style={styles.iconContainer}>
            {isPositive ? (
              <MaterialIcons name="check-circle" size={40} color="green" />
            ) : (
              <MaterialIcons name="cancel" size={40} color="red" />
            )}
          </View>
          <Text style={[styles.alertTitle, { color: isPositive ? 'green' : 'red' }]}>{title}</Text>
          <Text style={styles.alertMessage}>{message}</Text>
          <TouchableOpacity onPress={onClose} style={[styles.closeButton, { backgroundColor: isPositive ? 'green' : 'red' }]}>
            <Text style={styles.closeButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertContainer: {
    width: '70%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    // borderWidth: 2,
  },
  iconContainer: {
    marginBottom: 10,
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  alertMessage: {
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    padding: 10,
    borderRadius: 15,
    width: '50%',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
