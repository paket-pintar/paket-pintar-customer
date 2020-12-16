import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import { useDispatch, useSelector } from 'react-redux'
import { MenuButtonInv, LogoutButton } from "../components/Buttons"
import * as SecureStore from "expo-secure-store"
import { Feather } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function QRCodePage({ navigation }) {
  const { QRValue, user } = useSelector(store => store)
  const dispatch = useDispatch()

  async function logout() {
    await SecureStore.deleteItemAsync("UserAuthStateKey")
    dispatch({ type: 'SET_LOGOUT' })
    navigation.navigate("Landing")
  }

  function goToPackage() {
    navigation.navigate("Package")
  }

  return (
    <View style={styles.container}>
      <View style={ styles.headerContainer }>
        <Text style={styles.headerTitle}>Hello</Text>
        <View style={ styles.headerItemContainer }>
          <Text style={ styles.headerItemText }>{ user.name }</Text>
          <Text style={ styles.headerItemText }>{ user.unit }</Text>
        </View>
      </View>
      <Text style={ styles.titleText }>Summary</Text>
      <TouchableOpacity style={styles.summaryButton} onPressOut={goToPackage}>
        <Feather name="mail" size={50} color="blue" />
        <Text style={ styles.summaryText }> 2 New Packages</Text>
      </TouchableOpacity>
      <Text style={ styles.titleText }>Your QRCode</Text>
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
      <View style={styles.buttonGroup}>
        <LogoutButton text="Logout" onPress={logout} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 30,
    color: '#fff',
  },
  headerContainer: {
    padding: 20,
    justifyContent: 'center',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    width: '100%',
    height: 150,
    backgroundColor: '#345eeb',
    margin: 10,
  },
  headerItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  headerItemText: {
    color: 'gold',
    fontSize: 16,
  },
  titleText: {
    textAlign: 'left',
    fontSize: 18,
    marginTop: 10,
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
  summaryButton: {
    width: 350,
    paddingVertical: 14,
    paddingHorizontal: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  summaryText: {
    fontSize: 20
  },
  qrCode: {
    padding: 20
  },
  buttonGroup: {
    // flex: 1,
    // justifyContent: 'flex-end',
    // alignSelf: 'stretch',
    // marginHorizontal: 40,
    marginTop: 15,
    width: '90%',
  },
});