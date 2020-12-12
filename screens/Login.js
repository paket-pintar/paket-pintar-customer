import React, { useState } from 'react'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'

export default function Login({ navigation }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function login() {
    navigation.navigate("MainPage")
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