import React, { useState, useRef } from 'react'
import { Text, View, StyleSheet, Button, TextInput, ScrollView, Image, SafeAreaView, RefreshControl } from 'react-native'
import { PackageCard } from '../components/'
import { useDispatch, useSelector } from 'react-redux'
import * as Notifications from 'expo-notifications';
import { fetchPackages } from '../actions';
import LoadingPackage from './LoadingPackage';

export default function Package({ navigation, route }) {
  const { loading, packages, access_token } = useSelector(store => store)
  const dispatch = useDispatch()
  const [notification, setNotification] = useState(false);
  const [refreshing, setRefreshing] = useState(false)
  const notificationListener = useRef();
  const responseListener = useRef();

  React.useEffect(() => {
    // const user = SecureStore.getItemAsync('UserAuthStateKey')
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      // console.log('notification: >>>>>>>>', notification.request.content);
      // console.log('qwerty');
      setNotification(notification);
      // console.log('listener foreground packages :', access_token);
      dispatch(fetchPackages(access_token))
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      // console.log('response foreground >>>>>>>>', response);
      // setNotification(notification);
      // console.log('listener packages:', access_token);
      dispatch(fetchPackages(access_token))
    });
  }, [])

  const onRefresh = React.useCallback(() => {
    // console.log(access_token, 'refetching');
    dispatch(fetchPackages(access_token))
  })

  if (loading) {
    return (
      <LoadingPackage />
    )
  }

  if (packages.length === 0) {
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
            <Text style={styles.headerText}>Your Packages</Text>
            <View style={styles.noPackageContainer}>
              <Image style={styles.image} source={require('../assets/emptyBox.png')} />
              <Text style={styles.noPackText}>No New Packages for You...</Text>
            </View>
          </View>
        </ScrollView>
      </View>
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
          <Text style={styles.headerText}>Your Packages</Text>
          {/* <Text>{ JSON.stringify(packages) }</Text> */}
          {
            packages.map(pack => {
              return (
                <PackageCard
                  key={pack.id}
                  pack={pack}
                />
              )
            })
          }
          {/* <PackageCard /> */}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 40,
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