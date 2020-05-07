import React from 'react';
import { View, Text, Image } from "react-native";

import styleMaker from '../assets/stylesheets/ArtistCard';

export default ArtistCard = (props) => {


    const styles = styleMaker(props);


    return <View>
        <Text>{props.artist.name}</Text>
    </View>
};