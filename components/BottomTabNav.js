import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Octicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { Home, Package, History, QRCodePage, Profile } from '../screens/'
import PackageNavigation from '../navigation/PackageNavigation'

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ffffff"
      inactiveColor="#709ce8"
      labelStyle={{ fontSize: 12 }}
      // barStyle={{ backgroundColor: '#2623bf' }}
      barStyle={{ backgroundColor: '#345eeb' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="QRCode"
        component={QRCodePage}
        options={{
          tabBarLabel: 'QR Code',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="qrcode" color={color} size={26} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Package"
        component={PackageNavigation}
        options={{
          tabBarLabel: 'Pack',
          tabBarIcon: ({ color }) => (
            <Octicons name="package" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={26} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}