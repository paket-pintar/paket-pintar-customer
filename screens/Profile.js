import React, { useState } from 'react'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'

export default function Profile({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>Profile page</Text>
      <View style={styles.box}>
        <Text style={styles.text}>Name: John Doe</Text>
        <Text style={styles.text}>Address: 9A/D1</Text>
        <Text style={styles.text}>Email: john_doe@mail.com</Text>
        <Text style={styles.text}>Phone: 08123456789</Text>
      </View>
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