
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Home, Berita } from '../../pages'

const Stack = createStackNavigator();

function Router() {
  
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Berita" component={Berita} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

export default Router;