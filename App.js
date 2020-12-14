import React from 'react';
import { Provider } from 'react-redux'
import store from './store/'
import { createStackNavigator } from '@react-navigation/stack'
import Navigation from './navigation/Navigation'
// import { useFonts, RobotoSlab_400Regular, RobotoSlab_600SemiBold, RobotoSlab_900Black } from '@expo-google-fonts/roboto-slab';


const Stack = createStackNavigator()

export default function App() {

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
