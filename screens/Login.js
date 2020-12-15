import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Text, View, StyleSheet, TextInput } from "react-native"
import { MenuButtonInv } from "../components/Buttons"
// import axios from '../config/axios'
import { fetchPackages, fetchLogin, fetchRegisterExpoToken } from '../actions';
import * as SecureStore from "expo-secure-store"

import { registerForPushNotificationsAsync } from '../helpers/notification'


export default function Login({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  async function submitLogin() {
    // console.log(email, password)
    try {
      const { data: user } = await fetchLogin(email, password)
      // isi access_token, email, id, name, unit
      const userAuth = JSON.stringify(user)
      // console.log(user);
      const createdExpoToken = await registerForPushNotificationsAsync()
      // console.log('createdExpoToken', createdExpoToken);

      // isi registerTokenSuccessMessage => "msg": "Register user token success!"
      const registerTokenSuccessMessage = await fetchRegisterExpoToken(user.id, user.access_token, createdExpoToken)
      // console.log('registerTokenSuccessMessage', registerTokenSuccessMessage.data);
      dispatch(fetchPackages(user.access_token))
      dispatch({ type: "SET_LOGIN", payload: true, user })

      await SecureStore.setItemAsync("UserAuthStateKey", userAuth)

    } catch (err) {
      if (err.response?.data) {
        console.log(err.response.data);
      } else {
        console.log(err);
      }
    }
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
          secureTextEntry={true}
          style={styles.textInput}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Create password"
        />
      </View>
      <View style={styles.groupContainer}>
        <MenuButtonInv text="Login" onPress={submitLogin} />
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
