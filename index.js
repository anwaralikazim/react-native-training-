/*
 * @format
 

import {AppRegistry, ScrollView} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react'
import{View, view}from "react-native";
import Screen from './Screen';
//import footer from './footer';
//import MenuItems from './scrollview';
import  ClearanceScreen  from './(Student Clearance List Management )FYP/Applyforclearance'
//import Home from './Home/index'
//import Home1 from './Home/Home';
//import Hooks from './Home/hooks'
import LoginScreen from './(Student Clearance List Management )FYP/LoginScreen';
import PhotoCopierRecords from './(Student Clearance List Management )FYP/PhotoCopies';
import LibraryRecords from './(Student Clearance List Management )FYP/Library';
const Stack = createNativeStackNavigator();
import Canteen from './(Student Clearance List Management )FYP/CanteenRecord';
import Count1 from'./Home/Component/component';
import LabRecords from './(Student Clearance List Management )FYP/LabRecord' 

function Students() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ClearanceScreen" component={ClearanceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Book);
*/
/**
 * @format
 */
import { AppRegistry,ScrollView } from 'react-native';
import { name as appName } from './app.json';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import LoginScreen from './(Student Clearance List Management )FYP/LoginScreen';
//import ClearanceScreen from './(Student Clearance List Management )FYP/Applyforclearance';
//import Cart from './Home/Cart';
import ShoppingCart from './Home/Cart';
import  MyComponent from './Home/image';
import move from ',/Home/apps';





AppRegistry.registerComponent(appName, () =>  move);
