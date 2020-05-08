import React from "react";
import { View, Text, Image } from "react-native";
import Button from "react-native-button";

import { styleMaker } from "../assets/stylesheets/SmallTrackCard";

export default function SmallTrackCard(props) {
    const styles = styleMaker(props);
  
    const goToPage = () => {
      props.navigation.navigate('Track', {element: props.track});
    };

    //Shorten text to fit in lines, add ... to any that exceed the max limit
    const nameText = props.track.name.slice(0, 24).concat(props.track.name.length > 20 ? "..." : "");
  
    return (
      <Button onPress={goToPage}>
        <View style={styles.container}>
          <Text style={styles.name}>{nameText}</Text>
        </View>
      </Button>
    );
  }
  