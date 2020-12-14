import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'
import * as SecureStore from 'expo-secure-store'

export default function Profile({ navigation }) {

  const { isLogin } = useSelector(state => state)
  const dispatch = useDispatch()

  async function logout() {
    await SecureStore.deleteItemAsync('UserAuthStateKey')
    dispatch({ type: 'SET_ISLOGIN', payload: false })
    // navigation.navigate("Landing")
  }

  return (
    <View style={styles.container}>
      <Text>Profile page</Text>
      <View style={styles.box}>
        <Text style={styles.text}>Name: John Doe</Text>
        <Text style={styles.text}>Address: 9A/D1</Text>
        <Text style={styles.text}>Email: john_doe@mail.com</Text>
        <Text style={styles.text}>Phone: 08123456789</Text>
      </View>
      <Button title="Logout" onPress={logout} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 40
  },
  box: {
    padding: 20,
    margin: 10,
    backgroundColor: 'grey',
    borderRadius: 10
  },
  text: {
    margin: 10,
    fontSize: 15
  }
});