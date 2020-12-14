import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { PushNotification, Landing, Login, Register } from '../screens/'
import { BottomTabNav } from '../components/'
import * as SecureStore from 'expo-secure-store'

const Stack = createStackNavigator()

export default function Navigation() {

  const { isLogin } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    confirmIsLogin()
  }, [])

  async function confirmIsLogin() {
    let user = await SecureStore.getItemAsync('UserAuthStateKey')
    if (user) {
      dispatch({ type: 'SET_ISLOGIN', payload: true })
    } else {
      dispatch({ type: 'SET_ISLOGIN', payload: false })
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          isLogin
            ? (
              <>
                <Stack.Screen name="MainPage" component={BottomTabNav} options={{ title: "Paket Pintar MainPage" }} />
                <Stack.Screen name="PushNotification" component={PushNotification} />
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
    </NavigationContainer>
  );
}