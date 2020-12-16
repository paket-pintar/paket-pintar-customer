import * as React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Package, History } from '../screens/'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          tabStyle: {
            marginTop: 40
          }
        }}
      >
        <Tab.Screen name="Unclaimed" component={Package} />
        <Tab.Screen name="Claimed" component={History} />
      </Tab.Navigator>
    </>
  );
}