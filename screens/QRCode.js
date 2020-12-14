import React, { useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import QRCode from 'react-native-qrcode-svg'

export default function QRCodePage({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>QRCode page</Text>
      <QRCode 
        value="ini ngetes"
        size={250}
        color="black"
        backgroundColor="white"/>
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