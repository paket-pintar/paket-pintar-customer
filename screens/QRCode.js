import React, { useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default function QRCode({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>QRCode page</Text>
      <Image
        style={{ width: 220, height: 220 }}
        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/220px-QR_code_for_mobile_English_Wikipedia.svg.png" }} />
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