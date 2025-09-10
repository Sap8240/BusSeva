import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';   // ✅ Added this

// Import all the screens for your app
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen' ;
import DetailScreen from './screens/DetailScreen';
import ResultScreen from './screens/ResultScreen'; // Import the new screen
import Sigin from './screens/Signin'; // Import the Signin screen
import Login from './screens/Login'; // Import the Login screen

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* ✅ Hide StatusBar globally */}
      <StatusBar hidden={true} translucent={true} backgroundColor="transparent" />

      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#F4F6F-7' },
          headerTintColor: '#333',
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
          
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'Welcome to Busseva' }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ headerShown: false }}
        />
        {/* Add the new ResultScreen to the navigator */}
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ title: 'Identification Result' }}
        />
        <Stack.Screen
          name="Signin"
          component={Sigin}
          options={{ headerShown: false }}   // ✅ Hides header + keeps statusbar off
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}   // ✅ Hides header + keeps statusbar off
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
