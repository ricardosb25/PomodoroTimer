import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

const focusTimeMin = 0.2 * 60 * 1000;
const breakTimeMin = 0.1 * 60 * 1000;

export default function App() {
  const [timerCount,setTimerCount] = useState<number>(focusTimeMin);

  const startTime = () => {
    setInterval(() => setTimerCount(prev => prev -1000),1000);
  }

  return (
    <View style={styles.container}> 
      <Text>{timerCount}</Text> 
      <TouchableOpacity style={styles.button} onPress={startTime}>
        <Text style={styles.letters}>Start</Text>
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
