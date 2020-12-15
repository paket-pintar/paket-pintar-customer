import React, { useState, useRef, useEffect } from "react"
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native"
import { MenuButtonInv, MenuButton } from "../components/Buttons"
import * as Notifications from 'expo-notifications';

export default function Home({ navigation }) {
  // function pushNotification() {
  //   navigation.navigate("PushNotification")
  // }
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  function goToPakage() {
    navigation.navigate("Package")
  }

  useEffect(() => {
    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      // console.log('notification: >>>>>>>>', notification.request.content);
      setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log('response foreground >>>>>>>>', response);
    });
    // Notifications.removeNotificationSubscription(notificationListener);
    // Notifications.removeNotificationSubscription(responseListener);
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerCircle}>
          <Text style={styles.headerText}>2</Text>
        </View>
        <Text style={styles.headerSubText}>New Packages</Text>
      </View>

      <View style={styles.buttonGroup}>
        {/* <MenuButton text="test push notification" onPress={pushNotification} /> */}
        <MenuButton text="Check Your Package" onPress={goToPakage} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2623bf",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "stretch",
  },
  headerCircle: {
    height: 100,
    width: 100,
    backgroundColor: "#00e5ff",
    justifyContent: "center",
    borderRadius: 150,
  },
  headerText: {
    color: '#3648d3',
    fontWeight: 'bold',
    textAlign: "center",
    fontSize: 40,
    textAlignVertical: "center",
    padding: 10,
  },
  headerSubText: {
    color: '#fff',
    fontSize: 25,
    padding: 20,
    fontWeight: 'bold',
  },
  buttonGroup: {
    flex: 1,
    alignSelf: "stretch",
    marginHorizontal: 40,
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "#000",
  },
  buttonText: {
    fontSize: 15,
    color: "#000",
  },
})
