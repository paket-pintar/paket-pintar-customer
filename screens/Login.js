import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'
import * as SecureStore from 'expo-secure-store'

export default function Login({ navigation }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  async function login() {
    const userAuth = JSON.stringify({ email, password })
    let data = await SecureStore.setItemAsync('UserAuthStateKey', userAuth)
    dispatch({ type: 'SET_ISLOGIN', payload: true })
    // let data = await SecureStore.getItemAsync('UserAuthStateKey')
    // let data = await SecureStore.deleteItemAsync('UserAuthStateKey')
    // console.log(data)

    // navigation.navigate("MainPage")
  }

  return (
    <View style={styles.container}>
      <Text>Login page</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1.5, height: 30, width: 200, padding: 5, margin: 10 }}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Email address"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1.5, height: 30, width: 200, padding: 5, margin: 10 }}
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Create password"
      />
      <Button
        title="Submit"
        onPress={login}
      />
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
});