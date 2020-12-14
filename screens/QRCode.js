import React, { useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import QRCode from 'react-native-qrcode-svg'

export default function QRCodePage({ navigation }) {

  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerText}>Scan Your QR</Text> */}
      <View style={styles.qrContainer}>
        <QRCode 
          value="ini ngetes"
          size={250}
          style={styles.qrCode}
          color="black"
          backgroundColor="white"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2623bf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
  },
  qrContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    margin: 10,
  },
  qrCode : {
    padding: 20
  }
});