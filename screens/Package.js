import React, { useState } from 'react'
import { Text, View, StyleSheet, Button, TextInput, ScrollView } from 'react-native'
import { PackageCard } from '../components/'
import * as SecureStore from "expo-secure-store"
import { useDispatch, useSelector } from 'react-redux'
// import { fetchPackages } from '../actions';

export default function Package({ navigation, route }) {
  // const access_token = useSelector(store => store.access_token)
  const { loading, packages } = useSelector(store => store)

  // const dispatch = useDispatch()

  // React.useEffect(() => {
  //   const user = SecureStore.getItemAsync('UserAuthStateKey')
  //   // dispatch(fetchPackages(access_token))
  // }, [])

  // function refreshPage() {
  // ambil token dari local storage atau store
  // dispatch(fetchPackages(access_token))
  // }

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Your Packages</Text>
        <Text>Loading your data...</Text>
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerText}>Your Packages</Text>
        {/* <Text>{ JSON.stringify(packages) }</Text> */}
        {
          packages.map(pack => {
            return (
              <PackageCard
                key={pack.id}
                pack={pack}
              />
            )
          })
        }
        {/* <PackageCard /> */}
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