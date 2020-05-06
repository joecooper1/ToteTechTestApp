import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();

import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from './src/screens/SettingsScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator backBehaviour="order" >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name = "Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

