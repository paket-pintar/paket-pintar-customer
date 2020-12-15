import React, { useState } from "react"
import { Text, View, StyleSheet, TextInput } from "react-native"
import { MenuButtonInv } from "../components/Buttons"
import { fetchRegister } from "../actions/"

export default function Register({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [unit, setUnit] = useState("")

  async function submitRegister() {
    const payload = {
      email, password, name, unit
    }
    // console.log(payload);
    try {
      const { data: newUser } = await fetchRegister(payload)
      // console.log(newUser);
      // navigation.navigate("MainPage")
    } catch (err) {
      if (err.response?.data) {
        console.log(err.response.data);
      } else {
        console.log(err);
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>REGISTER</Text>
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
        <Text style={styles.textLabel}>Full Name</Text>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Full Name"
        />
        <Text style={styles.textLabel}>Unit</Text>
        <TextInput
          style={styles.textInput}
          value={unit}
          onChangeText={(text) => setUnit(text)}
          placeholder="Unit"
        />
      </View>

      <View style={styles.groupContainer}>
        <MenuButtonInv text="Register" onPress={submitRegister} />
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
    fontSize: 25,
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
