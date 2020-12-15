import React from 'react'
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import { HistoryCard } from '../components/';

export default function History({ navigation }) {
  const { loading, history } = useSelector(state => state)

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerText}>Packages History</Text>
        {
          history.map(pack => {
            return (
              <HistoryCard
                key={pack.id}
                pack={pack}
              />
            )
          })
        }
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