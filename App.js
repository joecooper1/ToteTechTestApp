import React, { useState, useEffect } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();

import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

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
          initialRouteName="Home"
          swipeEnabled={false}
          tabBarOptions={{
            activeTintColor: "red",
            inactiveTintColor: "red",
            style: { backgroundColor: "hsl(0, 0%, 15%)" },
            indicatorStyle: { backgroundColor: "black", height: null, top: 0 },
          }}
        >
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ tabBarAccessibilityLabel: "Profile" }}
          />
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ tabBarAccessibilityLabel: "Home" }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ tabBarAccessibilityLabel: "Settings" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
