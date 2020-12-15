import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Landing, Login, Register, LoadingPackage } from '../screens/'
// import { PushNotification, Landing, Login, Register } from '../screens/'
import { BottomTabNav } from '../components/'
import * as SecureStore from 'expo-secure-store'
import { fetchPackages } from '../actions';
import { StatusBar } from 'expo-status-bar'

const Stack = createStackNavigator()

export default function Navigation() {

  const { isLogin, loading } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    confirmIsLogin()
  }, [])

  async function confirmIsLogin() {
    let user = await SecureStore.getItemAsync('UserAuthStateKey')
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
        screenOptions={{
          headerShown: !isLogin,
        }}
      >
        {
          isLogin
            ? loading
              ? <Stack.Screen
                name="LoadingPackage"
                component={LoadingPackage}
              />
              : (
                <>
                  <Stack.Screen
                    name="MainPage"
                    component={BottomTabNav}
                    options={{ title: "Paket Pintar MainPage" }} />
                  {/* <Stack.Screen name="PushNotification" component={PushNotification} /> */}
                </>
              )
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
      <StatusBar
        backgroundColor="#fff"
        style="auto"
      // 'auto', 'inverted', 'light', or 'dark'
      />
    </NavigationContainer>
  );
}