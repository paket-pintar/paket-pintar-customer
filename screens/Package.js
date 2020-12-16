import React, { useState, useRef } from 'react'
import { Text, View, StyleSheet, Button, TextInput, ScrollView, Image } from 'react-native'
import { PackageCard } from '../components/'
import { useDispatch, useSelector } from 'react-redux'

export default function Package({ navigation, route }) {
  const { loading, packages, access_token } = useSelector(store => store)
  const dispatch = useDispatch()

  // React.useEffect(() => {
  //   // const user = SecureStore.getItemAsync('UserAuthStateKey')
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

  if (packages.length === 0 ) {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerText}>Your Packages</Text>

        <View style={styles.noPackageContainer}>
          <Image style={styles.image} source={require('../assets/emptyBox.png')} />

          <Text style={styles.noPackText}>No New Packages for You...</Text>

        </View>
      </View>
    </ScrollView>
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
  },
  noPackageContainer: {
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  noPackText: {
    fontSize: 15,
    marginTop: 20,
  }

});