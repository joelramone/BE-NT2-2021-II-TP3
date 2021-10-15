import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Constants from "expo-constants";

import { vibrate } from './utils'

export default function App() {
  // console.log(Constants);
  return (
    <View style={styles.container}>
      <Text>Click para hacer vibrar el dispositivo! - </Text>
      <Button 
        style={styles.Button}
        title="Vibracion"
        onPress={vibrate}
      />
      


      {/* <TouchableOpacity
        onPress={vibrate}
        style={styles.Button}
      >
       
          <Text>Vibracion</Text>
       
      </TouchableOpacity> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: Constants.statusBarHeight
  },
  Button: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'green',
    borderRadius: 5,
    margin: 50
  }
});
