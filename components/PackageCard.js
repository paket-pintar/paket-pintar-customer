import React, { useState } from 'react'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'

export default function PackageCard() {

  return (
    <View style={styles.box}>
      <Text style={styles.textHead}><Text style={styles.textHeadFrom}>From : </Text>Tokopedia</Text>
        <Text style={styles.textContentDate}>Saturday, 11/12/2020</Text>
      <View style={styles.box_inner}>
        <Text style={styles.textContentDescription}>Box besar Hitam dari JNE</Text>
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
    alignSelf: 'stretch',
    backgroundColor: '#2623bf',
    borderRadius: 10,
    padding: 20,
    margin: 5
  },
  textHead: {
    color: '#00e5ff',
    fontSize: 18,
  },
  textHeadFrom: {
    color: '#8685e6',
  },
  textContent: {
    color: '#fff'
  },
  textContentDescription: {
    color: '#fff',
    fontSize: 15,

  },
  textContentDate: {
    color: '#8685e6'
  },
  box_inner: {
    padding: 5,
    paddingLeft: 10
  }
});