import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Home from './components/Home'

export default function App() {
  return (
    <View style={styles.app}>
      <Home />
      <Image style={styles.logo} source={require("./images/logo.jpg")} />
      <Image style={styles.logo}
        source={{ uri: "https://logos.flamingtext.com/Name-Logos/Treva-design-china-name.png" }} />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
  logo: {
    height: 50,
    width: 100,
  },
})