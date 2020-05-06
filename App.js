import * as React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();

import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

export default function App() {
  //Set color of status bar elements
  StatusBar.setBarStyle("light-content", true);

  return (
    <>
      {/*SafeAreaView sets color of statusbar for ios */}
      <SafeAreaView style={{ backgroundColor: "black" }} />
      {/*Sets color of statusbar for android */}
      <View
        height={StatusBar.currentHeight}
        style={{ backgroundColor: "black", color: "white" }}
      />
      {/*Navigation */}
      <NavigationContainer>
        <Tab.Navigator
          backBehaviour="order"
          tabBarOptions={{
            activeTintColor: "red",
            inactiveTintColor: "grey",
            style: { backgroundColor: "black" },
            indicatorStyle: { backgroundColor: "black" },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ tabBarAccessibilityLabel: "Home" }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ tabBarAccessibilityLabel: "Home" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
