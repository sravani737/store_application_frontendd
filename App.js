
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux';
// import Activityindicator from './components/ActivityIndicator'
// import Buttons from './components/Buttons'
// import RadioButtons from './components/RadioButtons'
// import DynamicButton from './components/DynamicButton'
// import Modals from './components/Modals'
// import Pressable from './components/Pressable1'
// import Npm from './components/Npm'
// import StackNav from './components/StackNav'
// import StackNav from './components/StackNav' 
// import TabNav from './components/TabNav'
import Pro from './components/Pro'
import store from './Components1/redux/store'
// import Api01 from './components/Api01'
import Main from './Components1/Main'
import Carousel from './Components1/Carousel'
import GenerateFinancialReportScreen from './components/GenerateFinancialReportScreen'
import ViewStockLevelsScreen from './components/ViewStockLevelsScreen'
import DeleteProductScreen from './components/DeleteProductScreen'
import AddProductScreen from './components/AddProductScreen'

export default function App() {
  return (
    <View style={{flex:1}}>
      <Pro/>
    
    {/* <TabNav/> */}
       {/* <Main/> */}
   
{/* <AddProductScreen/> */}
{/* <DeleteProductScreen/> */}
    {/* <Carousel/> */}
    {/* <ViewStockLevelsScreen/> */}
    {/* <GenerateFinancialReportScreen/> */}
     </View>
  )
}

// const styles = StyleSheet.create({})