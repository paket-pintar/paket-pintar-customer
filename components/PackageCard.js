import React, { useState } from 'react'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'
import { getDateTime, getMomentDate } from '../helpers/dateConverter'

export default function PackageCard({ pack }) {
  // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <View style={styles.box}>
      <Text style={styles.textHead}><Text style={styles.textHeadFrom}>From : </Text>{pack.sender}</Text>
      <Text style={styles.textContentDate}>Arrived : {getMomentDate(pack.createdAt)}</Text>
      <View style={styles.box_inner}>
        <Text style={styles.textContentDescription}>{pack.description}</Text>
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
    backgroundColor: '#345eeb',
    borderRadius: 10,
    padding: 20,
    margin: 5
  },
  textHead: {
    color: '#ffb531',
    fontSize: 18,
  },
  textHeadFrom: {
    color: '#a9c9f7',
  },
  textContent: {
    color: '#fff'
  },
  textContentDescription: {
    color: '#fff',
    fontSize: 15,

  },
  textContentDate: {
    color: '#a9c9f7'
  },
  box_inner: {
    padding: 5,
    paddingLeft: 10
  }
});