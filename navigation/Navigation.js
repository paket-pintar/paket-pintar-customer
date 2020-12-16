import React, { useEffect, useState, useRef, Component } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Landing, Login, Register, LoadingPackage } from '../screens/'
// import { PushNotification, Landing, Login, Register } from '../screens/'
import { BottomTabNav } from '../components/'
import * as SecureStore from 'expo-secure-store'
import { fetchPackages } from '../actions';
import { StatusBar } from 'expo-status-bar'
import * as Notifications from 'expo-notifications';

const Stack = createStackNavigator()

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Navigation() {

  const { isLogin, loading, access_token } = useSelector(state => state)
  const dispatch = useDispatch()
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    confirmIsLogin()
    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      // console.log('notification: >>>>>>>>', notification.request.content);
      // console.log('qwerty');
      setNotification(notification);
      console.log('listener foreground nav:', access_token);
      dispatch(fetchPackages(access_token))
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      // console.log('response foreground >>>>>>>>', response);
      // setNotification(notification);
      console.log('listener nav:', access_token);
      dispatch(fetchPackages(access_token))
    });
    // Notifications.removeNotificationSubscription(notificationListener);
    // Notifications.removeNotificationSubscription(responseListener);
  }, [])

  async function confirmIsLogin() {
    let user = await SecureStore.getItemAsync('UserAuthStateKey')
    // console.log(user);
    user = JSON.parse(user)
    if (user) {
      dispatch({ type: "SET_LOGIN", payload: true, user })
      dispatch(fetchPackages(user.access_token))
    } else {
      dispatch({ type: 'SET_ISLOGIN', payload: false })
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode='none'
      // screenOptions={{
      //   headerShown: !isLogin,
      // }}
      >
        {
          isLogin
            ? 
              <>
                <Stack.Screen
                  name="MainPage"
                  component={BottomTabNav}
                  options={{ title: "Paket Pintar MainPage" }} />
                {/* <Stack.Screen name="PushNotification" component={PushNotification} /> */}
              </>
            : (
              <>
                <Stack.Screen name="Landing" component={Landing} options={{ title: "Paket Pintar" }} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Login" component={Login} />
              </>
            )
        }
      </Stack.Navigator>
      {/* <Stack.Screen name="MainPage" component={BottomTabNav} options={{ headerShown: false }} /> */}
      {/* <StatusBar
        backgroundColor="#fff"
        style="auto"
      // 'auto', 'inverted', 'light', or 'dark'
      /> */}
    </NavigationContainer>
  );
}