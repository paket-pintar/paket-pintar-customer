import React, { useState } from "react"
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native"
import { MenuButtonInv, MenuButton } from "../components/Buttons"

export default function Home({ navigation }) {
  function pushNotification() {
    navigation.navigate("PushNotification")
  }
  function goToPakage() {
    navigation.navigate("Package")
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerCircle}>
          <Text style={styles.headerText}>2</Text>
        </View>
          <Text style={styles.headerSubText}>New Packages</Text>
      </View>

      <View style={styles.buttonGroup}>
        <MenuButton text="test push notification" onPress={pushNotification} />
        <MenuButton text="Check Your Package" onPress={goToPakage} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2623bf",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "stretch",
  },
  headerCircle: {
    height: 100,
    width: 100,
    backgroundColor: "#00e5ff",
    justifyContent: "center",
    borderRadius: 150,
  },
  headerText: {
    color: '#3648d3',
    fontWeight: 'bold',
    textAlign: "center",
    fontSize: 40,
    textAlignVertical: "center",
    padding: 10,
  },
  headerSubText: {
    color: '#fff',
    fontSize: 25,
    padding: 20,
    fontWeight: 'bold',
  },
  buttonGroup: {
    flex: 1,
    alignSelf: "stretch",
    marginHorizontal: 40,
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "#000",
  },
  buttonText: {
    fontSize: 15,
    color: "#000",
  },
})
