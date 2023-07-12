import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
    minutes:number;
}

export const ControlButton: React.FC<Props>= ({ minutes }) =>{
    const plus = () => {
        minutes = minutes + 1;
    }
    const minus = () => {
        minutes = minutes - 1;
    }
    return(
        <View>
            <TouchableOpacity style={styles.buttonPlus} onPress={plus}>
                <Text style={styles.plus}>></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonMinus} onPress={minus}>
                <Text style={styles.minus}>></Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonPlus:{
        width: 100,
        height: 50,
        bottom: 140,
        left: -3,
    },
    buttonMinus:{
        width: 100,
        height: 50,
        bottom: 20,
        right: -3,
    },
    plus:{
        transform:[{ rotate:'-90deg' }],
        fontSize: 30,
    },
    minus:{
        transform:[{ rotate:'90deg' }],
        fontSize: 30,
    }
})