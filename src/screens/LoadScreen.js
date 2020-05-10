import React, { useState, useEffect } from "react";
import { View, Text, Dimensions } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default function LoadScreen() {
  return (
    <View
      style={{
        height: winHeight,
        width: winWidth,
        backgroundColor: "black",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text style={{ color: "orange", fontSize: 50, left: 27, top: 50 }}>Only</Text>
      <Text style={{ color: "orange", fontSize: 50, left: 20 }}>Reggae</Text>
    </View>
  );
}
