import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { getDateTime } from '../helpers/dateConverter'

export default function HistoryCard({ pack }) {

  return (
    <View style={styles.box}>
      <Text style={styles.textHead}><Text style={styles.textHeadFrom}>From : </Text>{pack.sender}</Text>
      <Text style={styles.textContentDate}>Received : {getDateTime(pack.updatedAt)}</Text>
      <View style={styles.box_inner}>
        <Text style={styles.textContentDescription}>{pack.description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 40
  },
  box: {
    alignSelf: 'stretch',
    backgroundColor: '#E2E2E2',
    borderRadius: 10,
    padding: 20,
    margin: 5
  },
  textHead: {
    color: '#000',
    fontSize: 18,
  },
  textHeadFrom: {
    color: '#000',
  },
  textContent: {
    color: '#000'
  },
  textContentDescription: {
    color: '#000',
    fontSize: 15,

  },
  textContentDate: {
    color: '#000'
  },
  box_inner: {
    padding: 5,
    paddingLeft: 10
  }
});