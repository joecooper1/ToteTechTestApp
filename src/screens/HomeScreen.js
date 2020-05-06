import * as React from 'react';
import { Text, View } from 'react-native';

import styles from '../assets/stylesheets/HomeScreen';

export default function HomeScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
      </View>
    );
  }