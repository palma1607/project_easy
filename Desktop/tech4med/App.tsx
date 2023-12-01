import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ActivateAccountScreen from './src/screens/ActivateAccountScreen';
import RegiaoScreen from './src/screens/RegiaoScreen';
import MainScreen from './src/screens/MainScreen';
import StoreContactScreen from './src/screens/StoreContactScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import StoresScreen from './src/screens/StoresScreen';
import OptionsScreen from './src/screens/OptionsScreen';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OptionsScreen"
        screenOptions={{
          cardStyle: { backgroundColor: 'white' },
          headerShown: false,
        }}>
        <Stack.Screen name="OptionsScreen" component={OptionsScreen} />
        <Stack.Screen name="StoreContactScreen" component={StoreContactScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ActivateAccountScreen" component={ActivateAccountScreen} />
        <Stack.Screen name="RegiaoScreen" component={RegiaoScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="StoresScreen" component={StoresScreen} />
        <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
