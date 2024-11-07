import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {WebView} from 'react-native-webview'

export default function Npm() {
  return (<WebView source={{uri:'https://reactnative.dev/docs/touchableopacity'}}/>)
}

const styles = StyleSheet.create({})