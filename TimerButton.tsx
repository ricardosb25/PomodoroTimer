import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props ={
    timeRun: boolean;
    stopTime: () => void;
    startTime: () => void;
}

export const TimerButton: React.FC<Props> = ( { timeRun, stopTime, startTime } ) =>{
    return(
        <TouchableOpacity style={styles.button} onPress={timeRun ? stopTime : startTime}>
            <Text style={styles.letters}>{timeRun ? 'Stop Timer' : 'Start Timer'}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 15,
        height: 75,
        width: 125,
        borderRadius: 20,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      },
      letters: {
        fontSize: 20,
        color: 'white',
      },
})

