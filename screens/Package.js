import React, { useState } from 'react'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'

export default function Package({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>Package page</Text>
      <View style={styles.box}>
        <Text>From: Tokopedia</Text>
        <View style={styles.box_inner}>
          <Text>Arrived: Saturday, 11/12/2020</Text>
          <Text>Description: Big box</Text>
        </View>
      </View>
      <View style={styles.box}>
        <Text>From: Tokopedia</Text>
        <View style={styles.box_inner}>
          <Text>Arrived: Saturday, 11/12/2020</Text>
          <Text>Description: Big box</Text>
        </View>
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
    backgroundColor: '#ddd',
    padding: 20,
    margin: 10
  },
  box_inner: {
    padding: 5,
    paddingLeft: 15
  }
});