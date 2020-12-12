import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from 'react-redux'
import store from './store/'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { PushNotification, Landing, Login, Register } from './screens/'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { BottomTabNav } from './components/'

const Stack = createStackNavigator()
const BottomTab = createMaterialBottomTabNavigator()

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Landing" component={Landing} options={{ title: "Paket Pintar" }} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="MainPage" component={BottomTabNav} options={{ title: "Paket Pintar MainPage" }} />
          {/* <Stack.Screen name="MainPage" component={BottomTabNav} options={{ headerShown: false }} /> */}
          <Stack.Screen name="PushNotification" component={PushNotification} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

