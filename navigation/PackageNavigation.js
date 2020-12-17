import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Package, History } from '../screens/'

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