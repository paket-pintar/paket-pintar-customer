import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Text, View, StyleSheet, Button, TextInput } from "react-native"
import { MenuButtonInv } from "../components/Buttons"

import * as SecureStore from "expo-secure-store"

export default function Login({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  async function login() {
    const userAuth = JSON.stringify({ email, password })
    let data = await SecureStore.setItemAsync("UserAuthStateKey", userAuth)
    dispatch({ type: "SET_ISLOGIN", payload: true })
    // let data = await SecureStore.getItemAsync('UserAuthStateKey')
    // let data = await SecureStore.deleteItemAsync('UserAuthStateKey')
    // console.log(data)

    // navigation.navigate("MainPage")
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>LOGIN</Text>
      </View>
      <View style={styles.groupContainer}>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email address"
        />
        <TextInput
          style={styles.textInput}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Create password"
        />
      </View>
      <View style={styles.groupContainer}>
        <MenuButtonInv text="Login" onPress={login} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
  },
  headerText: {
    fontSize: 25,
    alignSelf: 'center',
    letterSpacing: 3,
    color: '#2623bf',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  groupContainer: {
    // backgroundColor: '#ddd',
    alignSelf: 'stretch',
    marginHorizontal: 30,
    marginTop: 30
  },
  textInput: {
    height: 35,
    borderRadius: 9,
    borderColor: "gray",
    borderWidth: 1.5,
    padding: 8,
    fontSize: 15,
    margin: 10,
  }
})
