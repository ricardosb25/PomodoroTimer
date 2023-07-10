import React from "react";
import {Text, View, StyleSheet} from "react-native";


type Props = {
    timerDate: Date;
};
export const CountDown: React.FC<Props> = ( { timerDate } ) => {
    return (
        <View>
            <Text style={styles.numbers}>
                {timerDate.getMinutes().toString().padStart(2, "0")}:
                {timerDate.getSeconds().toString().padStart(2, "0")}
            </Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    numbers:{
    fontSize: 20,
    fontWeight: "700",
    color: 'white',
    }
})