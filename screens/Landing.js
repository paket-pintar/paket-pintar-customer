import React, { useState } from "react"
import { Text, View, StyleSheet, Button, TextInput } from "react-native"
import {MenuButton} from '../components/Buttons'

export default function Landing({ navigation }) {
  function gotToRegisterPage() {
    navigation.navigate("Register")
  }
  function goToLoginPage() {
    navigation.navigate("Login")
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerText}>Better Letter</Text>
      </View>

      <View style={styles.buttonGroup}>
        <View style={styles.buttonContainer}>
          <MenuButton
          text="Register"
            onPress={gotToRegisterPage}
          />
        </View>
        <View style={styles.buttonContainer}>
        <MenuButton
          text="Login"
            onPress={goToLoginPage}
          />
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#2623bf",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 2,
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 50,
  },
  buttonGroup: {
    flex: 2,
    alignSelf: "stretch",
  },
  button: {
    color: '#ddd',
    fontStyle: 'italic',
    borderRadius: 10,
    fontSize: 100,
  },
  buttonContainer: {
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 30,
  },
})
