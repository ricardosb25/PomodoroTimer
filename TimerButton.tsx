import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type Props ={
    timeRun: boolean;
    stopTime: () => void;
    startTime: () => void;
}

export const TimerButton: React.FC<Props> = ( { timeRun, stopTime, startTime } ) =>{
    return(
        <TouchableOpacity style={styles.circle} onPress={timeRun ? stopTime : startTime}>
            <FontAwesome style={styles.icon} name={timeRun ? 'pause' : 'play'} size={125} color={'antiquewhite'}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
      icon: {
        alignSelf: 'center',
      },
      circle: {
        borderWidth: 5,
        width: 250, 
        height: 250,
        borderRadius: 125,
        justifyContent: 'center',
        borderColor: 'antiquewhite',
        marginVertical: 50,
        bottom: 40,
      },
})

