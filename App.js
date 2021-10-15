import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Constants from "expo-constants";

import Cronometro from "./components/Cronometro";

import { vibrate } from './utils'

const DEFAULT_WORKS_MINS = 0.30
const DEFAULT_BREAK_MINS = 0.15

const minToSec = min => min * 60

var interval

export default function App() {

  const [activeTimer, setActiveTimer] = useState(true)
  const [isWorking, setIsWorking] = useState(true)
  const [timeRemaining, setTimeRemaining] = useState(minToSec(DEFAULT_WORKS_MINS))


  useEffect(() => {
    if (timeRemaining === 0){
      vibrate()
      setTimeRemaining((isWorking) ? minToSec(DEFAULT_BREAK_MINS) :  minToSec(DEFAULT_WORKS_MINS))

      setIsWorking(prev => !prev)

    }
  }, [timeRemaining])

  useEffect(() => {
    if (activeTimer){
      //deterner el cronometro
      clearInterval(interval)
    }else{
      interval = setInterval(() => {
        setTimeRemaining(prev => prev - 1)
      }, 1000);
    }
  }, [activeTimer])


  const restart = () => {
    clearInterval(interval)
    setActiveTimer(false)
    
    setTimeRemaining((isWorking) ? minToSec(DEFAULT_WORKS_MINS) : minToSec(DEFAULT_BREAK_MINS))
  }


  return (
    <View style={styles.container}>

      <Text> Tiempo de {(isWorking) ? 'trabajo' : 'descanso'}</Text>

      <Cronometro timeRemaining={timeRemaining} />


      <View style={styles.buttonContainer}>
        <Button title={(!activeTimer) ? 'Pausar' : 'Iniciar'} onPress={() => setActiveTimer(!activeTimer)} />
        <Button title={'Reiniciar'} onPress={restart} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    padding: 100
  },
  buttonContainer: {
    marginTop: 25,
    padding: 10,
    flexDirection: 'row'
  }

});
