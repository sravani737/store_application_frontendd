// // import React from 'react';
// // import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
// // import Icon from 'react-native-vector-icons/Ionicons'; // Assuming you have installed react-native-vector-icons

// // export default function FinancialReport() {
// //   const handleViewReport = () => {
// //     Alert.alert("Financial Report", "View Financial Report functionality");
// //   };

// //   const handleGenerateReport = () => {
// //     Alert.alert("Financial Report", "Generate Financial Report functionality");
// //   };

// //   const handleExportReport = () => {
// //     Alert.alert("Financial Report", "Export Financial Report functionality");
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.header}>Financial Reports</Text>

// //       <TouchableOpacity style={styles.button} onPress={handleViewReport}>
// //         <Icon name="eye-outline" size={25} color="white" />
// //         <Text style={styles.buttonText}>View Financial Report</Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity style={styles.button} onPress={handleGenerateReport}>
// //         <Icon name="document-outline" size={25} color="white" />
// //         <Text style={styles.buttonText}>Generate Report</Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity style={styles.button} onPress={handleExportReport}>
// //         <Icon name="download-outline" size={25} color="white" />
// //         <Text style={styles.buttonText}>Export Report</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     padding: 20,
// //     marginTop: 20,
// //     backgroundColor: 'white',
// //     borderRadius: 10,
// //   },
// //   header: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     marginBottom: 20,
// //     textAlign: 'center',
// //     color: 'black',
// //   },
// //   button: {
// //     flexDirection: 'row', // Align icon and text side by side
// //     alignItems: 'center', // Vertically align icon and text
// //     justifyContent: 'center', // Center the content horizontally
// //     backgroundColor: '#0002',
// //     padding: 15,
// //     marginVertical: 5, // Space between buttons (3-5 units)
// //     borderRadius: 30, // Rounded button shape
// //     borderColor: 'green',
// //     borderWidth: 2,
// //     elevation: 2, // Adds a subtle shadow for depth
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 2,
// //   },
// //   buttonText: {
// //     fontSize: 16,
// //     color: 'black',
// //     fontWeight: 'bold',
// //     marginLeft: 10, // Space between icon and text
// //   },
// // });


// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';

// const sampleProducts = [
//   { id: 1, name: 'Product A', price: 100, cost: 70, created_at: '2024-09-26T09:39:00.000Z' },
//   { id: 2, name: 'Product B', price: 150, cost: 100, created_at: '2024-09-28T09:39:00.000Z' },
//   { id: 3, name: 'Product C', price: 200, cost: 120, created_at: '2024-10-01T09:39:00.000Z' },
// ];

// const GenerateFinancialReportScreen = () => {
//   const [report, setReport] = useState(null); // State to hold report data
//   const startDate = '2024-09-25T00:00:00.000Z'; // Replace with dynamic date input
//   const endDate = '2024-10-05T00:00:00.000Z'; // Replace with dynamic date input

//   const processReport = () => {
//     console.log('Processing Report...'); // Debugging Step 1

//     const filteredProducts = sampleProducts.filter(product => {
//       const createdAt = new Date(product.created_at);
//       return createdAt >= new Date(startDate) && createdAt <= new Date(endDate);
//     });

//     console.log('Filtered Products:', filteredProducts); // Debugging Step 2

//     const totalRevenue = filteredProducts.reduce((acc, product) => acc + product.price, 0);
//     const totalCost = filteredProducts.reduce((acc, product) => acc + product.cost, 0);
//     const totalProfit = totalRevenue - totalCost;

//     console.log('Total Revenue:', totalRevenue); // Debugging Step 3
//     console.log('Total Cost:', totalCost);
//     console.log('Total Profit:', totalProfit);

//     setReport({
//       totalRevenue,
//       totalCost,
//       totalProfit,
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Generate Financial Report</Text>
//       <Button title="Generate Report" onPress={processReport} />

//       {report ? (
//         <View style={styles.reportContainer}>
//           <Text>Total Revenue: {report.totalRevenue}</Text>
//           <Text>Total Cost: {report.totalCost}</Text>
//           <Text>Total Profit: {report.totalProfit}</Text>
//         </View>
//       ) : (
//         <Text>No report generated yet.</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: 'white',
//     borderRadius: 10,
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   reportContainer: {
//     marginTop: 20,
//   },
// });

// export default GenerateFinancialReportScreen;

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FinancialReportScreen = () => {
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const screenWidth = Dimensions.get('window').width;

  // Fetch all orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        let token = await AsyncStorage.getItem('userToken');
        const response = await axios.get(`http://192.168.1.27:5000/api/orders`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setOrderData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  // Filter data based on date range
  const filterByDate = () => {
    const filtered = orderData.filter(order => {
      const orderDate = new Date(order.createdAt);
      return orderDate >= startDate && orderDate <= endDate;
    });
    setFilteredData(filtered);
  };

  // Calculate totals for each order
  const calculateTotals = (items) => {
    let totalSpending = 0, totalProfit = 0, totalLoss = 0;
    items.forEach(item => {
      const sellingPrice = item.product.price * item.quantity;
      const actualCost = item.product.actual_price * item.quantity;
      totalSpending += sellingPrice;

      const difference = sellingPrice - actualCost;
      if (difference >= 0) totalProfit += difference;
      else totalLoss += Math.abs(difference);
    });
    return { totalSpending, totalProfit, totalLoss };
  };

  // Group data by date and aggregate profit/loss
  const groupDataByDate = (orders) => {
    const aggregatedData = {};

    orders.forEach((order) => {
      const date = new Date(order.createdAt).toLocaleDateString();
      const { totalProfit, totalLoss } = calculateTotals(order.items);

      if (!aggregatedData[date]) {
        aggregatedData[date] = { profit: 0, loss: 0 };
      }

      // Aggregate profit and loss
      aggregatedData[date].profit += totalProfit;
      aggregatedData[date].loss += totalLoss;
    });

    return aggregatedData;
  };

  // Prepare data for the chart
  const aggregatedData = groupDataByDate(filteredData);
  const dates = Object.keys(aggregatedData);
  const profits = dates.map((date) => aggregatedData[date].profit);
  const losses = dates.map((date) => aggregatedData[date].loss);

  const chartData = {
    labels: dates,
    datasets: [
      {
        data: profits,
        color: () => `rgba(0, 128, 0, 1)`,
        strokeWidth: 2,
      },
      {
        data: losses,
        color: () => `rgba(255, 0, 0, 1)`,
        strokeWidth: 2,
      }
    ],
  };

  if (loading) return <ActivityIndicator size="large" color="#00ff00" />;

  return (
    <View style={styles.container}>
      {/* Date Pickers */}
      <View style={styles.datePickerContainer}>
        <Button title="Select Start Date" onPress={() => setShowStartPicker(true)} color='black' />
        <Button title="Select End Date" onPress={() => setShowEndPicker(true)} color='black' />
        {showStartPicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowStartPicker(false);
              if (selectedDate) setStartDate(selectedDate);
            }}
          />
        )}
        {showEndPicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowEndPicker(false);
              if (selectedDate) setEndDate(selectedDate);
            }}
          />
        )}
        <Button title="Filter" onPress={filterByDate} color='green' />
      </View>

      {/* Financial Chart */}
      <Text style={styles.chartTitle}>Profit/Loss Over Selected Period</Text>
      <LineChart
        data={chartData}
        width={screenWidth - 30}
        height={220}
        yAxisSuffix=" ₹"
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />

      {/* Order Data */}
      <FlatList
        data={filteredData}
        keyExtractor={(order) => order._id}
        renderItem={({ item }) => {
          const { totalSpending, totalProfit, totalLoss } = calculateTotals(item.items);
          return (
            <View style={styles.orderContainer}>
              <Text style={styles.date}>Transaction Date: {new Date(item.createdAt).toLocaleDateString()}</Text>
              <Text style={styles.total}>Total Spending: ₹{totalSpending.toFixed(2)}</Text>
              {totalProfit > 0 && <Text style={styles.profit}>Profit: ₹{totalProfit.toFixed(2)}</Text>}
              {totalLoss > 0 && <Text style={styles.loss}>Loss: -₹{totalLoss.toFixed(2)}</Text>}
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    borderRadius: 10,
  },
  chartTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  orderContainer: {
    marginBottom: 10,
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 16,
    color: 'green',
  },
  profit: {
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
  },
  loss: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default FinancialReportScreen;


