import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

const focusTimeMin = 0.2 * 60 * 1000;
const breakTimeMin = 0.1 * 60 * 1000;

export default function App() {
  const [timerCount,setTimerCount] = useState<number>(focusTimeMin);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null);

  const startTime = () => {
    const id = setInterval(() => setTimerCount(prev => prev -1000),1000);
    setTimerInterval(id);
  }

  const stopTime = () => {
    if (timerInterval != null){
      clearInterval(timerInterval);
    }
  }

  const timerDate = new Date(timerCount);

  return (
    <View style={styles.container}> 
      <Text>{timerDate.getMinutes().toString().padStart(2, "0")}:{timerDate.getSeconds().toString().padStart(2, "0")}</Text> 
      <TouchableOpacity style={styles.button} onPress={startTime}>
        <Text style={styles.letters}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={stopTime}>
        <Text style={styles.letters}>Stop</Text>
      </TouchableOpacity>
      <StatusBar style='auto' />
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
    margin: 15,
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
