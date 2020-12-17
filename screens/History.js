import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, RefreshControl, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPackages } from '../actions';
import { HistoryCard } from '../components/';
import LoadingPackage from './LoadingPackage';

export default function History({ navigation }) {
  const { loading, history, access_token } = useSelector(state => state)
  const dispatch = useDispatch()
  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = useCallback(() => {
    // console.log(access_token, 'refetching');
    dispatch(fetchPackages(access_token))
  })

  if (loading) {
    return (
      <LoadingPackage />
    )
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <ScrollView
        style={{ alignSelf: 'stretch' }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.container}>
          <Text style={styles.headerText}>Packages History</Text>
          {
            (history.length === 0)
              ?
              <View style={styles.noPackageContainer}>
                <Image style={styles.image} source={require('../assets/emptyBox.png')} />
                <Text style={styles.noPackText}>There is no claimed packages yet...</Text>
              </View>

              :
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