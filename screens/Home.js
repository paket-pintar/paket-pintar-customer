import React from 'react'
import { View, StyleSheet, Text, ScrollView, SafeAreaView, RefreshControl } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import { useDispatch, useSelector } from 'react-redux'
import { MenuButtonInv, LogoutButton } from "../components/Buttons"
import * as SecureStore from "expo-secure-store"
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler'
import GlobalStyles from '../GlobalStyles';
import { fetchPackages } from '../actions'

export default function Home({ navigation }) {
  const { QRValue, user, packages, access_token } = useSelector(store => store)
  const [ refreshing, setRefreshing] = React.useState(false)
  const dispatch = useDispatch()

  async function logout() {
    await SecureStore.deleteItemAsync("UserAuthStateKey")
    dispatch({ type: 'SET_LOGOUT' })
    navigation.navigate("Landing")
  }

  function goToPackage() {
    navigation.navigate("Package")
  }

  function setPackagesNull() {
    dispatch({ type: 'SET_PACKAGES_NULL' })
  }
  
  const onRefresh = React.useCallback(() => {
    console.log(access_token, 'refetching');
    // setRefreshing(true)

    // wait(2000).then(() => {
      // setRefreshing(false)
      dispatch(fetchPackages(access_token))
    // })
  })

  return (
    // <View style={styles.container}>
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.headerContainerView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Hello</Text>
          <View style={styles.headerItemContainer}>
            <Text style={styles.headerItemText}>{user.name}</Text>
            <Text style={styles.headerItemText}>{user.unit}</Text>
          </View>
        </View>

        <Text style={styles.titleText}>Summary</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.summaryButton} onPressOut={goToPackage}>
            <Feather name="mail" size={50} color="blue" />
            <Text style={styles.summaryText}> {packages.length} New Packages</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.titleText}>Your QRCode</Text>
        <View style={styles.container}>
          <View style={styles.qrContainer}>
            {/* <Text>{ QRValue }</Text> */}
            {
              QRValue
                ? <QRCode
                  value={QRValue}
                  size={250}
                  style={styles.qrCode}
                  color="black"
                  backgroundColor="white" />
                : <Text>QR Code</Text>
            }
          </View>
        </View>
        <View style={styles.buttonGroup}>
          <LogoutButton text="Logout" onPress={logout} />
        </View>
        <View style={styles.buttonGroup}>
          <LogoutButton text="Set Packages Null" onPress={setPackagesNull} />
        </View>
      </ScrollView>
    {/* </View> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    paddingTop: 20,
    fontSize: 30,
    color: '#fff',
  },
  headerContainerView: {
    alignSelf: 'stretch',
  },
  headerContainer: {
    alignSelf: 'stretch',
    padding: 20,
    justifyContent: 'center',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    width: '100%',
    height: 150,
    backgroundColor: '#345eeb',
  },
  headerItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 1,
  },
  headerItemText: {
    color: 'gold',
    fontSize: 18,
  },
  titleText: {
    textAlign: 'left',
    color: '#686868',
    fontSize: 18,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  qrContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: '90%',
    height: 300,
    backgroundColor: '#fff',
    margin: 10,
  },
  buttonContainer: {
    marginHorizontal: 'auto',
  },
  summaryButton: {
    paddingVertical: 14,
    paddingHorizontal: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 20
  },
  summaryText: {
    fontSize: 20
  },
  qrCode: {
    padding: 20
  },
  buttonGroup: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 30,
    width: '40%',
  },
});