import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native'

export function MenuButton(props) {
  return(
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text
          style={styles.buttonText}>{props.text}</Text>
      </View>

    </TouchableOpacity>
  )
}
export function MenuButtonInv(props) {
  return(
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.buttonInv}>
        <Text
          style={styles.buttonTextInv}>{props.text}</Text>
      </View>

    </TouchableOpacity>
  )
}

export function GameButton(props) {
  return(
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.gameButton}>
        <Text
          style={styles.gameButtonText}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export function RefreshButton(props) {
  return(
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.buttonRefresh}>
        <Text
          style={styles.refreshText}>{props.text}</Text>
      </View>

    </TouchableOpacity>
  )
}
export function LogoutButton(props) {
  return(
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.buttonLogout}>
        <Text
          style={styles.logoutText}>{props.text}</Text>
      </View>

    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  buttonLogout: {
    width:'auto',
    borderRadius: 5,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#cc2f2f',
    marginVertical: 3,
  },
  logoutText: {
    color: '#ffff',
    textTransform: 'uppercase',
    fontSize: 15,
    // fontFamily: '',
    textAlign: 'center'
  },
  buttonInv: {
    width:'auto',
    borderRadius: 50,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#2623bf',
    marginVertical: 3,
  },
  buttonTextInv: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 20,
    fontFamily: '',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    width:'auto',
    borderRadius: 50,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginVertical: 3,
  },
  buttonText: {
    color: '#2623bf',
    textTransform: 'uppercase',
    fontSize: 20,
    fontFamily: '',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  gameButton: {
    width:'auto',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 12,
    backgroundColor: '#374151',
    marginVertical: 3,
  },
  gameButtonText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 15,
    textAlign: 'center'
  },

  buttonRefresh: {
    width:'auto',
    borderRadius: 5,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#cc2f2f',
    marginVertical: 3,
  },
  refreshText: {
    color: '#ffff',
    textTransform: 'uppercase',
    fontSize: 15,
    // fontFamily: '',
    textAlign: 'center'
  },
})