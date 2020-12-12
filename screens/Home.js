import React, { useState } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native'

export default function Home({ navigation }) {

  function pushNotification() {
    navigation.navigate("PushNotification")
  }
  function goToPakage() {
    navigation.navigate("Package")
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>You have 2 package waiting!</Text>
        <Button title="test push notification" onPress={pushNotification} />
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={goToPakage} style={styles.button}>
          <Text style={styles.buttonText}>Check Your Package</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#000'
  },
  buttonText: {
    fontSize: 15,
    color: '#000',
  },
});