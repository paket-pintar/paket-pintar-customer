import React, { useState } from 'react'
import { Text, View, StyleSheet, Button, TextInput, ScrollView, FlatList } from 'react-native'
import { HistoryCard } from '../components/';

export default function History({ navigation }) {

  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.headerText}>Packages History</Text>
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
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