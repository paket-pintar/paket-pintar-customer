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

const styles = StyleSheet.create({
  buttonInv: {
    width:'auto',
    borderRadius: 50,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#3648d3',
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
    color: '#3648d3',
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
  }
})