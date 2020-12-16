import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'

export default function LoadingPackage() {

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#blue" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
})