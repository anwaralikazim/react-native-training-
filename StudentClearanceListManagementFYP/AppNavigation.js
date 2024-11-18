// AppNavigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import ClearanceStatus from './ClearanceRequest';  // Import your ClearanceScreen
import ClearanceScreen from './Applyforclearance';
import ClearanceRequest from './ClearanceRequest';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ClearanceRequest" component={ClearanceRequest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
