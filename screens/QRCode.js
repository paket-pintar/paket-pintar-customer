import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import { useDispatch, useSelector } from 'react-redux'
import { MenuButtonInv, MenuButton } from "../components/Buttons"
import * as SecureStore from "expo-secure-store"
import { Feather } from '@expo/vector-icons'; 

export default function QRCodePage({ navigation }) {
  const { QRValue, user } = useSelector(store => store)
  const dispatch = useDispatch()

  async function logout() {
    await SecureStore.deleteItemAsync("UserAuthStateKey")
    dispatch({ type: 'SET_LOGOUT' })
    navigation.navigate("Landing")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Hello</Text>
      <Text>{ user.name }</Text>
      <Text>{ user.unit }</Text>
      <Text style={ styles.titleText }>Summary</Text>
      <View style={styles.summaryContainer}>
        <Feather name="mail" size={40} color="blue" />
        <Text style={ styles.summaryText }> 2 New Packages</Text>
      </View>
      <Text style={ styles.titleText }>Your QRCode</Text>
      <View style={styles.qrContainer}>
        <QRCode
          value={QRValue}
          size={250}
          style={styles.qrCode}
          color="black"
          backgroundColor="white" />
      </View>
      <View style={styles.buttonGroup}>
        <MenuButton text="Logout" onPress={logout} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
  },
  titleText: {
    textAlign: 'left',
    fontSize: 18
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
  summaryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    width: 300,
    height: 80,
    backgroundColor: '#fff',
    margin: 10,
    paddingHorizontal: 20,
  },
  summaryText: {
    fontSize: 20
  },
  qrCode: {
    padding: 20
  }
});