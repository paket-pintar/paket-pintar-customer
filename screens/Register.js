import React, { useState } from 'react'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'

export default function Register({ navigation }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullname, setFullname] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')

  function register() {
    navigation.navigate("MainPage")
  }

  return (
    <View style={styles.container}>
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
      <Text>{"\n\n"}Fullname</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1.5, height: 30, width: 200, padding: 5, margin: 10 }}
        value={fullname}
        onChangeText={text => setFullname(text)}
        placeholder="Fullname"
      />
      <Text>Address</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1.5, height: 30, width: 200, padding: 5, margin: 10 }}
        value={address}
        onChangeText={text => setAddress(text)}
        placeholder="Address"
      />
      <Text>Phone</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1.5, height: 30, width: 200, padding: 5, margin: 10 }}
        value={phone}
        onChangeText={text => setPhone(text)}
        placeholder="Phone number"
      />
      <Button
        title="Submit"
        onPress={register}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1
  }
});