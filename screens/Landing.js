import React, { useState } from 'react'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'

export default function Landing({ navigation }) {

  function gotToRegisterPage() {
    navigation.navigate("Register")
  }
  function goToLoginPage() {
    navigation.navigate("Login")
  }

  return (
    <View style={styles.container}>
      <Text>Landing page</Text>
      <Text>Paket Pintar</Text>
      <View style={styles.button}>
        <Button
          title="Register"
          color="#007AFF"
          onPress={gotToRegisterPage} />
      </View>
      <View style={styles.button}>
        <Button style={styles.button} title="Login" onPress={goToLoginPage} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 10,
    margin: 10,
    paddingTop: 10
  }
});