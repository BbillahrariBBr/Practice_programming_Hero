import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import Home from './components/Home'

export default function App() {
  const [name, SetName] = useState("");
  const [confirm, SetConfirm] = useState(false)
  const handleName = (e) => {
    SetName(e.nativeEvent.text)
  };
  return (
    <View style={styles.app}>
      <Home />
      <Image style={styles.logo} source={require("./images/logo.jpg")} />
      <Image style={styles.logo}
        source={{ uri: "https://logos.flamingtext.com/Name-Logos/Treva-design-china-name.png" }} />
      <TextInput placeholder='Write Your Name' style={styles.inputText} onChange={handleName} />
      <Button title='Confirm' onPress={() => SetConfirm(true)} />
      <Button title='Clear' onPress={() => {
        SetConfirm(false);
        SetName = "";
      }} />
      {confirm && name}
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
  inputText: {
    borderWidth: 1,
    borderColor: "red",
  }
})