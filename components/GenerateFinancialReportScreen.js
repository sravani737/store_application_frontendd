import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const GenerateFinancialReportScreen = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const handleGenerateReport = () => {
    // Handle report generation logic here
    console.log('Generating report from', startDate, 'to', endDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generate Financial Report</Text>
      
      <Button title="Select Start Date" onPress={() => setShowStartDatePicker(true)} />
      {showStartDatePicker && (
        <DateTimePicker
          value={startDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setStartDate(selectedDate || startDate);
            setShowStartDatePicker(false);
          }}
        />
      )}

      <Button title="Select End Date" onPress={() => setShowEndDatePicker(true)} />
      {showEndDatePicker && (
        <DateTimePicker
          value={endDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setEndDate(selectedDate || endDate);
            setShowEndDatePicker(false);
          }}
        />
      )}

      <Button title="Generate Report" onPress={handleGenerateReport} />

      <Text style={styles.summary}>
        Report will be generated from {startDate.toLocaleDateString()} to {endDate.toLocaleDateString()}.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  summary: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default GenerateFinancialReportScreen;
