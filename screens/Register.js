import React, { useState } from "react"
import { Text, View, StyleSheet, Button, TextInput } from "react-native"
import { MenuButtonInv } from "../components/Buttons"

export default function Register({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullname, setFullname] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")



  function register() {
    navigation.navigate("MainPage")
  }

  return (
    <View style={styles.container}>
            <View style={styles.header}>
        <Text style={styles.headerText}>USER REGISTER</Text>
      </View>
      <View style={styles.groupContainer}>
      <Text style={styles.textLabel}>Email</Text>

        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email address"
        />
                <Text style={styles.textLabel}>Password</Text>

        <TextInput
          style={styles.textInput}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Create password"
        />
        <Text style={styles.textLabel}>Fullname</Text>
        <TextInput
          style={styles.textInput}
          value={fullname}
          onChangeText={(text) => setFullname(text)}
          placeholder="Fullname"
        />
        <Text style={styles.textLabel}>Address</Text>
        <TextInput
          style={styles.textInput}
          value={address}
          onChangeText={(text) => setAddress(text)}
          placeholder="Address"
        />
      </View>

      <View style={styles.groupContainer}>
        <MenuButtonInv text="Register" onPress={register} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    flex: 1,
  },

  headerText: {
    fontSize: 20,
    alignSelf: "center",
    letterSpacing: 3,
    color: "#2623bf",
    textAlign: "center",
    textAlignVertical: "center",
  },
  groupContainer: {
    // backgroundColor: '#ddd',
    alignSelf: "stretch",
    marginHorizontal: 30,
    marginTop: 30,
  },
  textLabel: {
    textAlign: 'left',
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: '100',
  },
  textInput: {
    height: 35,
    borderRadius: 9,
    borderColor: "gray",
    borderWidth: 1.5,
    padding: 8,
    fontSize: 15,
    marginBottom: 20,
    marginTop: 8

  },
})
