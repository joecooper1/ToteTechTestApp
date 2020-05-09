import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Dimensions } from "react-native";

import ScrollBar from "../components/ScrollBar";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default function ListScreen({ navigation, data, searchTerm }) {
  return (
    <View
      style={{
        minHeight: winHeight,
        width: winWidth,
        backgroundColor: "black",
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item, index, seperators }) => {
          return (
            <ScrollBar
              label={item.label}
              scrollThrough={item.scrollThrough}
              argument={item.argument}
              navigation={navigation}
              type={item.type}
              elements={item.elements}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        style={{ width: winWidth, maxHeight: winHeight * 0.85 }}
        windowSize={3}
        removeClippedSubViews={true}
      />
    </View>
  );
}
