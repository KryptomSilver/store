/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Cart from './src/views/Cart';
import AboutUs from './src/views/AboutUs';
import Perfil from './src/views/Perfil';
import Login from './src/views/Login';
import Purchases from './src/views/Purchases';
import Home from './src/views/Home';
import Registro from './src/views/Registro';
import Profile from './src/views/Profile';

const Stack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'light';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="LoginView" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Purchases" component={Purchases} />
        <Stack.Screen name="Registro" component={Registro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
