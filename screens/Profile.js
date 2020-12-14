import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Text, View, StyleSheet, Button, TextInput } from "react-native"
import { MenuButtonInv, MenuButton } from "../components/Buttons"

import * as SecureStore from "expo-secure-store"

export default function Profile({ navigation }) {
  const { isLogin } = useSelector((state) => state)
  const dispatch = useDispatch()

  async function logout() {
    await SecureStore.deleteItemAsync("UserAuthStateKey")
    dispatch({ type: "SET_ISLOGIN", payload: false })
    // navigation.navigate("Landing")
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.textName}>John Doe</Text>
        <Text style={styles.textEmail}>john_doe@mail.com</Text>
        <Text style={styles.textUnit}>9A/D1</Text>
      </View>
      <View style={styles.buttonGroup}>
      <MenuButton text="Logout" onPress={logout} />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2623bf",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 40,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    padding: 20,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  buttonGroup: {
    flex:1,
    justifyContent:'flex-end',
    alignSelf: 'stretch',
    marginHorizontal: 40,
  },
  textHeader: {},
  textName: {
    textAlign: 'center',
    color: '#000',
    fontSize: 40,
    marginBottom: 30,
  },
  textUnit: {
    textAlign: 'center',   
    color: '#000',
    fontSize: 20,
  },
  textEmail: {
    textAlign: 'center',
    color: '#000',
    fontSize: 20,
  },
})
