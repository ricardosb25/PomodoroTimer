import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

const FocusTimeMin = 0.2 * 60 * 1000;
const BreakTimeMin = 0.1 * 60 * 1000;

export default function App() {
  const [timerCount,setTimerCount] = useState<number>(12);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.letters}>Botão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 75,
    width: 100,
    borderRadius: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letters: {
    fontSize: 20,
    color: 'white',
  },
});
