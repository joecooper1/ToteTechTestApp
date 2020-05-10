import React, { useState, useEffect } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();

import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import LoadScreen from "./src/screens/LoadScreen";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  });

  //Set color of status bar elements
  StatusBar.setBarStyle("light-content", true);

  if (loading) return <LoadScreen />;
  else {
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
              activeTintColor: "orange",
              inactiveTintColor: "orange",
              style: { backgroundColor: "hsl(0, 0%, 15%)" },
              indicatorStyle: {
                backgroundColor: "black",
                height: 0,
                top: 0,
              },
            }}
          >
            <Tab.Screen
              name="Browse"
              component={HomeScreen}
              options={{ tabBarAccessibilityLabel: "Home", tabBarLabel: 'Top Reggae' }}
            />
            <Tab.Screen
              name="Search"
              component={SearchScreen}
              options={{ tabBarAccessibilityLabel: "Search" }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
