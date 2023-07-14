import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
    handlePress: () => void;
}

export const ControlButton: React.FC<Props> = ( { handlePress } ) =>{
    return(
        <View>
            <TouchableOpacity style={styles.buttonPlus} onPress={handlePress}>
                <Text style={styles.plus}>></Text>
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