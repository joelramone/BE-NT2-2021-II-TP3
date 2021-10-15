import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Styles from "./styles";



export default (props) => {

    const mins = parseInt(props.timeRemaining /60)
    const secs = props.timeRemaining % 60

    const paddZero = value => value < 10 ? '0': ''

    return (
        <Text style={Styles.text}>{paddZero(mins)}{mins}:{paddZero(secs)}{secs}</Text>
    )
}