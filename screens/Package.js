import React, { useState } from 'react'
import { Text, View, StyleSheet, Button, TextInput, ScrollView } from 'react-native'
import { PackageCard } from '../components/'

export default function Package({ navigation }) {

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerText}>Your Packages</Text>
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </View>
    </ScrollView>
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
  headerText: {
    fontSize: 25,
    marginBottom: 15,
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